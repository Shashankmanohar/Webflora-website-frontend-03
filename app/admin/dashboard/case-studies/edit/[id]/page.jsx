"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Save, 
  Upload, 
  Link as LinkIcon, 
  Globe, 
  Briefcase,
  Layout,
  Trophy,
  Activity,
  Code
} from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import API_BASE_URL from "../../../../../config";

export default function EditCaseStudy() {
  const router = useRouter();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeView, setActiveView] = useState("visual");
  
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    content: "",
    category: "WEB",
    client: "",
    projectUrl: "",
    outcome: "",
    status: "published",
    offset: "false",
    imageUrl: ""
  });

  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    fetchCaseStudy();
  }, [id]);

  const fetchCaseStudy = async () => {
    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/case-studies`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      const study = data.find(s => s._id === id);
      if (study) {
        setFormData({
          title: study.title,
          slug: study.slug,
          description: study.description,
          content: study.content,
          category: study.category,
          client: study.client || "",
          projectUrl: study.projectUrl || "",
          outcome: study.outcome || "",
          status: study.status || "published",
          offset: String(study.offset),
          imageUrl: study.image
        });
        setPreviewImage(study.image.startsWith('http') ? study.image : `${API_BASE_URL}/${study.image}`);
      }
    } catch (err) {
      console.error("Error fetching case study:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) {
        alert("Image file size must be less than 4MB to avoid Vercel upload limits.");
        return;
      }
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");
    setSaving(true);

    const submitData = new FormData();
    Object.keys(formData).forEach(key => {
      submitData.append(key, formData[key]);
    });

    if (imageFile) {
      submitData.append("image", imageFile);
    }

    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/case-studies/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: submitData
      });
      
      const data = await res.json();
      if (res.ok) {
        alert("Case study updated successfully!");
        router.push("/admin/dashboard");
      } else {
        alert(data.message || "Failed to update case study");
      }
    } catch (err) {
      alert("Error saving case study");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-brand-red border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => router.back()}
              className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Edit Case Study</h1>
              <p className="text-gray-400 text-sm">Update your project details and content.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={handleSubmit}
              disabled={saving}
              className="flex items-center gap-2 px-8 py-2.5 rounded-xl bg-brand-red text-white font-bold text-sm uppercase tracking-widest hover:shadow-lg hover:shadow-brand-red/20 transition-all disabled:opacity-50"
            >
              <Save size={18} />
              {saving ? "Updating..." : "Update Project"}
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Slug */}
            <section className="bg-zinc-950 border border-white/10 rounded-3xl p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">Project Title</label>
                <input 
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="E.g., Global E-commerce Platform Transformation"
                  className="w-full bg-black border border-white/10 rounded-xl py-4 px-6 text-xl font-bold focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-gray-500 tracking-widest flex items-center gap-2">
                  <LinkIcon size={12} />
                  Slug
                </label>
                <div className="flex items-center bg-black border border-white/10 rounded-xl px-6 py-3">
                  <span className="text-gray-500 text-sm">webflora.com/case-studies/</span>
                  <input 
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    className="flex-1 bg-transparent border-none focus:ring-0 text-sm ml-1"
                  />
                </div>
              </div>
            </section>

            {/* Content Editor */}
            <section className="bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden">
              <div className="flex items-center justify-between px-8 py-4 border-b border-white/10 bg-zinc-900/50">
                <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                  <Layout size={16} />
                  Main Content (HTML)
                </h3>
                <div className="flex bg-black p-1 rounded-lg border border-white/10">
                  <button 
                    onClick={() => setActiveView("visual")}
                    className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${activeView === 'visual' ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
                  >
                    Visual
                  </button>
                  <button 
                    onClick={() => setActiveView("source")}
                    className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${activeView === 'source' ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
                  >
                    Source
                  </button>
                </div>
              </div>
              <textarea 
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                rows={20}
                placeholder="Write your case study details here using HTML..."
                className={`w-full bg-black p-8 focus:outline-none transition-all resize-none font-mono text-sm leading-relaxed ${activeView === 'source' ? 'text-green-400' : 'text-gray-300'}`}
              />
            </section>

            {/* Project Details */}
            <section className="bg-zinc-950 border border-white/10 rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <Activity className="text-brand-red" size={24} />
                Project Metadata
              </h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">Short Description (for Grid Card)</label>
                  <textarea 
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Short summary for the card view..."
                    className="w-full bg-black border border-white/10 rounded-xl py-4 px-6 text-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition-all resize-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">Client Name</label>
                    <input 
                      type="text"
                      name="client"
                      value={formData.client}
                      onChange={handleInputChange}
                      placeholder="E.g., Retail Pro Corp"
                      className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">Live URL</label>
                    <div className="flex items-center bg-black border border-white/10 rounded-xl px-4 py-3">
                      <LinkIcon size={14} className="text-gray-500 mr-2" />
                      <input 
                        type="url"
                        name="projectUrl"
                        value={formData.projectUrl}
                        onChange={handleInputChange}
                        placeholder="https://example.com"
                        className="flex-1 bg-transparent border-none focus:ring-0 text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-gray-500 tracking-widest flex items-center gap-2">
                    <Trophy size={12} />
                    Project Outcome / Result
                  </label>
                  <input 
                    type="text"
                    name="outcome"
                    value={formData.outcome}
                    onChange={handleInputChange}
                    placeholder="E.g., +150% Increase in conversion rates"
                    className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition-all"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            {/* Category & Settings */}
            <section className="bg-zinc-950 border border-white/10 rounded-3xl p-6 space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-gray-500 tracking-widest flex items-center gap-2">
                  <Briefcase size={12} />
                  Project Category
                </label>
                <select 
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition-all text-sm appearance-none cursor-pointer"
                >
                  <option value="WEB">Web Development</option>
                  <option value="MOBILE">Mobile App</option>
                  <option value="AI/ML">AI & Machine Learning</option>
                  <option value="SOFTWARE">Software Development</option>
                  <option value="DIGITAL MARKETING">Digital Marketing</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-gray-500 tracking-widest flex items-center gap-2">
                  <Layout size={12} />
                  Layout Style (Offset)
                </label>
                <select 
                  name="offset"
                  value={formData.offset}
                  onChange={handleInputChange}
                  className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition-all text-sm appearance-none cursor-pointer"
                >
                  <option value="false">Standard Grid</option>
                  <option value="true">Offset (Shifted Down)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-gray-500 tracking-widest flex items-center gap-2">
                   Status
                </label>
                <select 
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition-all text-sm appearance-none cursor-pointer"
                >
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>
              </div>
            </section>

            {/* Featured Image */}
            <section className="bg-zinc-950 border border-white/10 rounded-3xl p-6 space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest">Project Cover Image</h3>
              
              <div className="relative group aspect-video rounded-2xl overflow-hidden border-2 border-dashed border-white/10 hover:border-brand-red/50 transition-all flex flex-col items-center justify-center text-center p-4">
                {previewImage ? (
                  <>
                    <img src={previewImage} className="absolute inset-0 w-full h-full object-cover" loading="lazy" alt={formData.title || "Preview cover image"} />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button 
                        onClick={() => { setImageFile(null); setPreviewImage(null); }}
                        className="bg-brand-red text-white p-2 rounded-full"
                      >
                        Change
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <Upload className="text-gray-500 mb-2 group-hover:text-brand-red transition-colors" size={32} />
                    <p className="text-xs text-gray-500">Upload high-res cover</p>
                    <input 
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </>
                )}
              </div>

              <div className="relative flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10"></div>
                <span className="text-[10px] text-gray-500 font-bold uppercase">OR</span>
                <div className="h-px flex-1 bg-white/10"></div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-gray-500 tracking-widest flex items-center gap-2">
                  <LinkIcon size={12} />
                  Direct Image URL
                </label>
                <input 
                  type="text"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com/project-cover.jpg"
                  className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition-all text-xs"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
