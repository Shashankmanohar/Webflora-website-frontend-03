"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  MessageSquare,
  Briefcase,
  Mail,
  LogOut,
  CheckCircle2,
  Clock,
  ExternalLink,
  ChevronRight,
  Search,
  Filter,
  ShieldCheck,
  Plus,
  Trash2,
  X,
  FileText,
  ImagePlus
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import API_BASE_URL from "../../config";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("inquiries");
  const [inquiries, setInquiries] = useState([]);
  const [careers, setCareers] = useState([]);
  const [newsletters, setNewsletters] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [actionLoading, setActionLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
      return;
    }

    fetchData(token);
  }, []);

  const fetchData = async (token) => {
    try {
      const [inqRes, carRes, newsRes, blogRes] = await Promise.all([
        fetch(`${API_BASE_URL}/api/admin/inquiries`, {
          headers: { Authorization: `Bearer ${token}` }
        }),
        fetch(`${API_BASE_URL}/api/admin/careers`, {
          headers: { Authorization: `Bearer ${token}` }
        }),
        fetch(`${API_BASE_URL}/api/admin/newsletters`, {
          headers: { Authorization: `Bearer ${token}` }
        }),
        fetch(`${API_BASE_URL}/api/admin/blogs`, {
          headers: { Authorization: `Bearer ${token}` }
        })
      ]);

      if (inqRes.status === 401 || carRes.status === 401) {
        localStorage.removeItem("adminToken");
        router.push("/admin/login");
        return;
      }

      const inqData = await inqRes.json();
      const carData = await carRes.json();
      const newsData = await newsRes.json();
      const blogData = await blogRes.json();

      setInquiries(inqData);
      setCareers(carData);
      setNewsletters(newsData);
      setBlogs(blogData);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };



  const handleDeleteBlog = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/blogs/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        setBlogs(blogs.filter(b => b._id !== id));
      } else {
        const data = await res.json();
        alert(data.message || "Failed to delete blog");
      }
    } catch (err) {
      alert("Error deleting blog");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  const filteredInquiries = inquiries.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCareers = careers.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <div className="w-64 border-r border-white/10 bg-zinc-950 flex flex-col p-6 fixed h-full">
        <div className="mb-10">
          <h1 className="text-2xl font-bold tracking-tighter text-brand-red">WEBFLORA</h1>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Admin Engine v2.0</p>
        </div>

        <nav className="flex-1 space-y-2">
          <SidebarLink
            icon={<MessageSquare size={20} />}
            label="Enquiries"
            active={activeTab === "inquiries"}
            onClick={() => setActiveTab("inquiries")}
            count={inquiries.length}
          />
          <SidebarLink
            icon={<Briefcase size={20} />}
            label="Career Forms"
            active={activeTab === "careers"}
            onClick={() => setActiveTab("careers")}
            count={careers.length}
          />
          <SidebarLink
            icon={<Mail size={20} />}
            label="Subscribers"
            active={activeTab === "newsletters"}
            onClick={() => setActiveTab("newsletters")}
            count={newsletters.length}
          />
          <SidebarLink
            icon={<FileText size={20} />}
            label="Blogs"
            active={activeTab === "blogs"}
            onClick={() => setActiveTab("blogs")}
            count={blogs.length}
          />
        </nav>

        <button
          onClick={handleLogout}
          className="mt-auto flex items-center gap-3 text-gray-400 hover:text-white transition-colors p-3 rounded-xl hover:bg-white/5"
        >
          <LogOut size={20} />
          <span className="font-bold text-sm uppercase tracking-tight">Logout</span>
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-10">
        <header className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-2">
              {activeTab === "inquiries" ? "Project Enquiries" :
                activeTab === "careers" ? "Job Applications" :
                  activeTab === "newsletters" ? "Subscribers" : "Blog Management"}
            </h2>
            <p className="text-gray-400">
              {activeTab === "inquiries" ? "Manage and respond to incoming project inquiries." :
                activeTab === "careers" ? "Review and manage career applications." :
                  activeTab === "newsletters" ? "View all newsletter subscribers." : "Create and manage website blog posts."}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {activeTab === "blogs" && (
              <button
                onClick={() => router.push("/admin/dashboard/blogs/create")}
                className="flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-tight hover:shadow-lg hover:shadow-brand-red/20 transition-all"
              >
                <Plus size={18} />
                Create Blog
              </button>
            )}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Search records..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-zinc-900 border border-white/10 rounded-full py-3 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/50 w-64"
              />
            </div>
          </div>
        </header>

        {loading ? (
          <div className="h-[60vh] flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-brand-red border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {activeTab === "inquiries" && (
                <motion.div
                  key="inq"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  {filteredInquiries.map((inq) => (
                    <InquiryCard key={inq._id} data={inq} />
                  ))}
                </motion.div>
              )}
              {activeTab === "careers" && (
                <motion.div
                  key="car"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  {filteredCareers.map((car) => (
                    <CareerCard key={car._id} data={car} />
                  ))}
                </motion.div>
              )}
              {activeTab === "newsletters" && (
                <motion.div
                  key="news"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  {newsletters.map((news) => (
                    <NewsletterCard key={news._id} data={news} />
                  ))}
                </motion.div>
              )}
              {activeTab === "blogs" && (
                <motion.div
                  key="blogs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {blogs.map((blog) => (
                    <BlogCard key={blog._id} data={blog} onDelete={handleDeleteBlog} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}


      </main>
    </div>
  );
}


function SidebarLink({ icon, label, active, onClick, count }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 group ${active
          ? "bg-brand-red text-white shadow-lg shadow-brand-red/20"
          : "text-gray-400 hover:bg-white/5 hover:text-white"
        }`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="font-bold text-sm uppercase tracking-tight">{label}</span>
      </div>
      {count > 0 && (
        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${active ? "bg-white text-brand-red" : "bg-zinc-800 text-gray-400"
          }`}>
          {count}
        </span>
      )}
    </button>
  );
}

function InquiryCard({ data }) {
  return (
    <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-2xl hover:border-brand-red/30 transition-colors group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-1">{data.name}</h3>
          <p className="text-brand-red text-sm font-bold uppercase tracking-widest">{data.service}</p>
        </div>
        <div className="flex items-center gap-2 bg-zinc-800 px-3 py-1.5 rounded-full">
          <Clock size={14} className="text-gray-400" />
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
            {new Date(data.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-4">
        <div>
          <p className="text-gray-500 text-[10px] font-bold uppercase mb-1">Email</p>
          <p className="text-sm font-medium">{data.email}</p>
        </div>
      </div>

      <div className="bg-black/40 p-4 rounded-xl border border-white/5">
        <p className="text-gray-500 text-[10px] font-bold uppercase mb-2">Message</p>
        <p className="text-sm text-gray-300 leading-relaxed italic">"{data.message}"</p>
      </div>
    </div>
  );
}

function CareerCard({ data }) {
  return (
    <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-2xl hover:border-blue-500/30 transition-colors group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-1">{data.name}</h3>
          <p className="text-blue-500 text-sm font-bold uppercase tracking-widest">{data.position}</p>
        </div>
        <div className="flex items-center gap-2 bg-zinc-800 px-3 py-1.5 rounded-full">
          <Clock size={14} className="text-gray-400" />
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
            {new Date(data.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-gray-500 text-[10px] font-bold uppercase mb-1">Email</p>
          <p className="text-sm font-medium">{data.email}</p>
        </div>
        <div className="flex justify-end gap-3">
          <a
            href={data.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/5 text-white border border-white/10 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-tight hover:bg-white/10 transition-all"
          >
            View
            <ExternalLink size={14} />
          </a>
          <a
            href={data.resumeUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-tight hover:bg-brand-red hover:text-white transition-all shadow-xl"
          >
            Download
            <Icon icon="solar:download-linear" width="16" height="16" />
          </a>
        </div>
      </div>
    </div>
  );
}

function NewsletterCard({ data }) {
  return (
    <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-xl hover:border-brand-red/30 transition-colors group flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-brand-red/10 rounded-full flex items-center justify-center border border-brand-red/20 text-brand-red">
          <Mail size={18} />
        </div>
        <div>
          <p className="text-white font-medium">{data.email}</p>
          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Subscriber</p>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-zinc-800 px-3 py-1.5 rounded-full">
        <Clock size={12} className="text-gray-500" />
        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">
          Joined {new Date(data.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}

function BlogCard({ data, onDelete }) {
  return (
    <div className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden group hover:border-brand-red/30 transition-all flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            {data.category}
          </span>
          <span className={`text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${data.status === 'published' ? 'bg-green-600' : 'bg-yellow-600'}`}>
            {data.status || 'published'}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold line-clamp-2">{data.title}</h3>
          <div className="flex items-center gap-1">
            <button
              onClick={() => onDelete(data._id)}
              className="text-gray-600 hover:text-red-500 transition-colors p-2"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>

        <p className="text-[10px] text-gray-500 font-mono mb-4 truncate italic">
          /{data.slug}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {data.tags && data.tags.map((tag, i) => (
            <span key={i} className="text-[9px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-400">
              #{tag}
            </span>
          ))}
        </div>

        <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-1">
          {data.content.replace(/<[^>]*>/g, '')}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-zinc-800 rounded-full flex items-center justify-center text-[10px] font-bold text-gray-500">
              {data.author ? data.author.charAt(0) : 'A'}
            </div>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{data.author || 'Admin'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={12} className="text-gray-500" />
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">
              {new Date(data.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
