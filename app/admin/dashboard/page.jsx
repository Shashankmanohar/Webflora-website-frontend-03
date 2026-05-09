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
  const [caseStudies, setCaseStudies] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [actionLoading, setActionLoading] = useState(false);
  const [isCaseStudyModalOpen, setIsCaseStudyModalOpen] = useState(false);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [currentCaseStudy, setCurrentCaseStudy] = useState(null);
  const [newJob, setNewJob] = useState({ title: "", category: "Engineering", type: "Full-Time", location: "", lastDate: "" });
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
      const [inqRes, carRes, newsRes, blogRes, caseRes, jobRes] = await Promise.all([
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
        }),
        fetch(`${API_BASE_URL}/api/admin/case-studies`, {
          headers: { Authorization: `Bearer ${token}` }
        }),
        fetch(`${API_BASE_URL}/api/admin/jobs`, {
          headers: { Authorization: `Bearer ${token}` }
        })
      ]);

      if (inqRes.status === 401) {
        localStorage.removeItem("adminToken");
        router.push("/admin/login");
        return;
      }

      const inqData = await inqRes.json();
      const carData = await carRes.json();
      const newsData = await newsRes.json();
      const blogData = await blogRes.json();
      const caseData = await caseRes.json();
      const jobData = await jobRes.json();

      setInquiries(inqData);
      setCareers(carData);
      setNewsletters(newsData);
      setBlogs(blogData);
      setCaseStudies(caseData);
      setJobs(jobData);
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

  const handleDeleteCaseStudy = async (id) => {
    if (!confirm("Are you sure you want to delete this case study?")) return;
    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/case-studies/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        setCaseStudies(caseStudies.filter(c => c._id !== id));
      } else {
        const data = await res.json();
        alert(data.message || "Failed to delete case study");
      }
    } catch (err) {
      alert("Error deleting case study");
    }
  };

  const handleDeleteInquiry = async (id) => {
    if (!confirm("Are you sure you want to delete this enquiry?")) return;
    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/inquiry/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        setInquiries(inquiries.filter(i => i._id !== id));
      } else {
        const data = await res.json();
        alert(data.message || "Failed to delete enquiry");
      }
    } catch (err) {
      alert("Error deleting enquiry");
    }
  };

  const handleDeleteCareer = async (id) => {
    if (!confirm("Are you sure you want to delete this application?")) return;
    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/career/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        setCareers(careers.filter(c => c._id !== id));
      } else {
        const data = await res.json();
        alert(data.message || "Failed to delete application");
      }
    } catch (err) {
      alert("Error deleting application");
    }
  };

  const handleDeleteNewsletter = async (id) => {
    if (!confirm("Are you sure you want to delete this subscriber?")) return;
    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/newsletter/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        setNewsletters(newsletters.filter(n => n._id !== id));
      } else {
        const data = await res.json();
        alert(data.message || "Failed to delete subscriber");
      }
    } catch (err) {
      alert("Error deleting subscriber");
    }
  };

  const handleDeleteJob = async (id) => {
    if (!confirm("Are you sure you want to delete this job position?")) return;
    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/jobs/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        setJobs(jobs.filter(j => j._id !== id));
      } else {
        const data = await res.json();
        alert(data.message || "Failed to delete job");
      }
    } catch (err) {
      alert("Error deleting job");
    }
  };

  const handleCreateJob = async (e) => {
    e.preventDefault();
    setActionLoading(true);
    const token = localStorage.getItem("adminToken");
    const method = newJob._id ? "PUT" : "POST";
    const url = newJob._id 
      ? `${API_BASE_URL}/api/admin/jobs/${newJob._id}` 
      : `${API_BASE_URL}/api/admin/jobs`;

    try {
      const res = await fetch(url, {
        method,
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(newJob)
      });
      if (res.ok) {
        const data = await res.json();
        if (newJob._id) {
          setJobs(jobs.map(j => j._id === data._id ? data : j));
        } else {
          setJobs([data, ...jobs]);
        }
        setIsJobModalOpen(false);
        setNewJob({ title: "", category: "Engineering", type: "Full-Time", location: "", lastDate: "" });
      } else {
        const data = await res.json();
        alert(data.message || "Failed to save job");
      }
    } catch (err) {
      alert("Error saving job");
    } finally {
      setActionLoading(false);
    }
  };

  const handleUpdateJobStatus = async (id, currentStatus) => {
    const token = localStorage.getItem("adminToken");
    const newStatus = currentStatus === "open" ? "closed" : "open";
    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/jobs/${id}`, {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        const data = await res.json();
        setJobs(jobs.map(j => j._id === id ? data : j));
      }
    } catch (err) {
      alert("Error updating status");
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

  const filteredCaseStudies = caseStudies.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
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
          <SidebarLink
            icon={<ShieldCheck size={20} />}
            label="Case Studies"
            active={activeTab === "case-studies"}
            onClick={() => setActiveTab("case-studies")}
            count={caseStudies.length}
          />
          <SidebarLink
            icon={<Icon icon="solar:user-speak-bold" width="20" />}
            label="Job Roles"
            active={activeTab === "jobs"}
            onClick={() => setActiveTab("jobs")}
            count={jobs.length}
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
                  activeTab === "newsletters" ? "Subscribers" : 
                    activeTab === "blogs" ? "Blog Management" : 
                      activeTab === "case-studies" ? "Case Studies" : "Job Openings"}
            </h2>
            <p className="text-gray-400">
              {activeTab === "inquiries" ? "Manage and respond to incoming project inquiries." :
                activeTab === "careers" ? "Review and manage career applications." :
                  activeTab === "newsletters" ? "View all newsletter subscribers." : 
                    activeTab === "blogs" ? "Create and manage website blog posts." : 
                      activeTab === "case-studies" ? "Showcase your best work and success stories." : "Manage open roles on your career page."}
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
            {activeTab === "case-studies" && (
              <button
                onClick={() => router.push("/admin/dashboard/case-studies/create")}
                className="flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-tight hover:shadow-lg hover:shadow-brand-red/20 transition-all"
              >
                <Plus size={18} />
                Add Case Study
              </button>
            )}
            {activeTab === "jobs" && (
              <button
                onClick={() => setIsJobModalOpen(true)}
                className="flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-tight hover:shadow-lg hover:shadow-brand-red/20 transition-all"
              >
                <Plus size={18} />
                Add New Role
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
                    <InquiryCard key={inq._id} data={inq} onDelete={handleDeleteInquiry} />
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
                    <CareerCard key={car._id} data={car} onDelete={handleDeleteCareer} />
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
                    <NewsletterCard key={news._id} data={news} onDelete={handleDeleteNewsletter} />
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
              {activeTab === "case-studies" && (
                <motion.div
                  key="case-studies"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {caseStudies.map((cs) => (
                    <CaseStudyCard 
                      key={cs._id} 
                      data={cs} 
                      onDelete={handleDeleteCaseStudy} 
                      onEdit={(id) => router.push(`/admin/dashboard/case-studies/edit/${id}`)}
                    />
                  ))}
                </motion.div>
              )}
              {activeTab === "jobs" && (
                <motion.div
                  key="jobs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {jobs.map((job) => (
                    <JobCard 
                      key={job._id} 
                      data={job} 
                      onDelete={handleDeleteJob}
                      onStatusToggle={() => handleUpdateJobStatus(job._id, job.status)}
                      onEdit={() => {
                        setNewJob(job);
                        setIsJobModalOpen(true);
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </main>

      <JobModal 
        isOpen={isJobModalOpen}
        onClose={() => setIsJobModalOpen(false)}
        onSave={handleCreateJob}
        job={newJob}
        setJob={setNewJob}
        loading={actionLoading}
      />
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

function InquiryCard({ data, onDelete }) {
  return (
    <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-2xl hover:border-brand-red/30 transition-colors group relative">
      <button
        onClick={() => onDelete(data._id)}
        className="absolute top-6 right-6 text-gray-600 hover:text-red-500 transition-colors p-2 opacity-0 group-hover:opacity-100"
      >
        <Trash2 size={18} />
      </button>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-1">{data.name}</h3>
          <p className="text-brand-red text-sm font-bold uppercase tracking-widest">{data.service}</p>
        </div>
        <div className="flex items-center gap-2 bg-zinc-800 px-3 py-1.5 rounded-full mr-10">
          <Clock size={14} className="text-gray-400" />
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
            {new Date(data.createdAt).toLocaleDateString('en-IN')}
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

function CareerCard({ data, onDelete }) {
  return (
    <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-2xl hover:border-blue-500/30 transition-colors group relative">
      <button
        onClick={() => onDelete(data._id)}
        className="absolute top-6 right-6 text-gray-600 hover:text-red-500 transition-colors p-2 opacity-0 group-hover:opacity-100"
      >
        <Trash2 size={18} />
      </button>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-1">{data.name}</h3>
          <p className="text-blue-500 text-sm font-bold uppercase tracking-widest">{data.position}</p>
        </div>
        <div className="flex items-center gap-2 bg-zinc-800 px-3 py-1.5 rounded-full mr-10">
          <Clock size={14} className="text-gray-400" />
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
            {new Date(data.createdAt).toLocaleDateString('en-IN')}
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

function NewsletterCard({ data, onDelete }) {
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
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-zinc-800 px-3 py-1.5 rounded-full">
          <Clock size={12} className="text-gray-500" />
          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">
            Joined {new Date(data.createdAt).toLocaleDateString('en-IN')}
          </span>
        </div>
        <button
          onClick={() => onDelete(data._id)}
          className="text-gray-600 hover:text-red-500 transition-colors p-2 opacity-0 group-hover:opacity-100"
        >
          <Trash2 size={18} />
        </button>
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
          loading="lazy"
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
              {new Date(data.createdAt).toLocaleDateString('en-IN')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseStudyCard({ data, onDelete, onEdit }) {
  return (
    <div className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden group hover:border-brand-red/30 transition-all flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={data.image.startsWith('http') ? data.image : `${API_BASE_URL}/${data.image}`}
          alt={data.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
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
              onClick={() => onEdit(data._id)}
              className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-lg hover:bg-white/10"
            >
              <Icon icon="solar:pen-bold" size={16} />
            </button>
            <button
              onClick={() => onDelete(data._id)}
              className="text-gray-400 hover:text-red-500 transition-colors p-2 bg-white/5 rounded-lg hover:bg-white/10"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>

        <p className="text-gray-400 text-sm line-clamp-2 mb-6 flex-1">
          {data.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex flex-col gap-1">
             <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Client</span>
             <span className="text-sm font-medium">{data.client || "Webflora Client"}</span>
          </div>
          <div className="flex items-center gap-2 bg-zinc-800 px-3 py-1.5 rounded-full">
            <Clock size={12} className="text-gray-500" />
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">
              {new Date(data.createdAt).toLocaleDateString('en-IN')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function JobCard({ data, onDelete, onStatusToggle, onEdit }) {
  return (
    <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-2xl hover:border-brand-red/30 transition-all group flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-2">
          <span className="bg-brand-red text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded">
            {data.category}
          </span>
          <span className="bg-zinc-800 text-gray-400 text-[9px] font-bold uppercase px-2 py-0.5 rounded">
            {data.type}
          </span>
        </div>
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={onEdit}
            className="text-gray-600 hover:text-white transition-colors"
          >
            <Icon icon="solar:pen-bold" width="18" />
          </button>
          <button
            onClick={() => onDelete(data._id)}
            className="text-gray-600 hover:text-red-500 transition-colors"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <h3 className="text-lg font-bold mb-2 uppercase tracking-tight">{data.title}</h3>
      
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2 uppercase font-bold">
        <Icon icon="solar:map-point-bold" width="14" />
        {data.location}
      </div>

      {data.lastDate && (
        <div className="flex items-center gap-2 text-[10px] text-brand-red mb-6 uppercase font-bold">
          <Icon icon="solar:calendar-bold" width="14" />
          Apply Before: {new Date(data.lastDate).toLocaleDateString('en-IN')}
        </div>
      )}

      <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
        <button 
          onClick={onStatusToggle}
          className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full transition-colors ${data.status === 'open' ? 'text-green-500 bg-green-500/10 hover:bg-green-500/20' : 'text-red-500 bg-red-500/10 hover:bg-red-500/20'}`}
        >
          {data.status}
        </button>
        <span className="text-[10px] text-gray-600 font-bold uppercase">
          {new Date(data.createdAt).toLocaleDateString('en-IN')}
        </span>
      </div>
    </div>
  );
}

// --- Modals ---

function JobModal({ isOpen, onClose, onSave, job, setJob, loading }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-zinc-950 border border-white/10 p-8 rounded-3xl w-full max-w-lg shadow-2xl"
      >
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold uppercase tracking-tight">{job._id ? "Edit Job Role" : "Create Job Role"}</h3>
          <button onClick={() => {
            onClose();
            setJob({ title: "", category: "Engineering", type: "Full-Time", location: "", lastDate: "" });
          }} className="text-gray-500 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={onSave} className="space-y-5">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Role Title</label>
            <input
              type="text"
              required
              className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-red"
              placeholder="e.g. Senior Frontend Engineer"
              value={job.title}
              onChange={(e) => setJob({ ...job, title: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Category</label>
              <select
                className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-sm focus:outline-none"
                value={job.category}
                onChange={(e) => setJob({ ...job, category: e.target.value })}
              >
                <option value="Engineering">Engineering</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Support">Support</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Type</label>
              <select
                className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-sm focus:outline-none"
                value={job.type}
                onChange={(e) => setJob({ ...job, type: e.target.value })}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Location</label>
            <input
              type="text"
              required
              className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-red"
              placeholder="e.g. Remote / Patna, India"
              value={job.location}
              onChange={(e) => setJob({ ...job, location: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Last Date to Apply</label>
            <input
              type="date"
              className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-red text-gray-400"
              value={job.lastDate ? new Date(job.lastDate).toISOString().split('T')[0] : ""}
              onChange={(e) => setJob({ ...job, lastDate: e.target.value })}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-red text-white font-bold uppercase tracking-tight py-4 rounded-xl shadow-lg shadow-brand-red/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 mt-4"
          >
            {loading ? "Publishing..." : "Publish Opening"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
