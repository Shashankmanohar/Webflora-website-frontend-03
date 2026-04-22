"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Save, 
  Eye, 
  Upload, 
  Link as LinkIcon, 
  Globe, 
  Tag, 
  User, 
  Calendar,
  Layout,
  Code,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { useRouter } from "next/navigation";
import API_BASE_URL from "../../../../config";

export default function CreateBlog() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [activeView, setActiveView] = useState("visual"); // visual or source
  
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    author: "",
    category: "General",
    tags: "",
    status: "published",
    seoTitle: "",
    seoDescription: "",
    seoKeywords: "",
    metaExtraHead: "",
    datePosted: new Date().toISOString().split('T')[0],
    imageUrl: ""
  });

  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // Auto-generate slug from title
  useEffect(() => {
    if (formData.title) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
  }, [formData.title]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e, status = "published") => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");
    setLoading(true);

    const submitData = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'status') {
        submitData.append(key, status);
      } else {
        submitData.append(key, formData[key]);
      }
    });

    if (imageFile) {
      submitData.append("image", imageFile);
    }

    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/blogs`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: submitData
      });
      
      const data = await res.json();
      if (res.ok) {
        alert(`Blog ${status === 'draft' ? 'saved as draft' : 'published'} successfully!`);
        router.push("/admin/dashboard");
      } else {
        alert(data.message || "Failed to save blog");
      }
    } catch (err) {
      alert("Error saving blog");
    } finally {
      setLoading(false);
    }
  };

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
              <h1 className="text-3xl font-bold tracking-tight">Create New Blog Post</h1>
              <p className="text-gray-400 text-sm">Design and publish your latest thoughts.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={(e) => handleSubmit(e, "draft")}
              disabled={loading}
              className="px-6 py-2.5 rounded-xl border border-white/10 font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all disabled:opacity-50"
            >
              Save to Draft
            </button>
            <button 
              onClick={(e) => handleSubmit(e, "published")}
              disabled={loading}
              className="px-8 py-2.5 rounded-xl bg-brand-red text-white font-bold text-sm uppercase tracking-widest hover:shadow-lg hover:shadow-brand-red/20 transition-all disabled:opacity-50"
            >
              {loading ? "Publishing..." : "Publish Now"}
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Slug */}
            <section className="bg-zinc-950 border border-white/10 rounded-3xl p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">Post Title</label>
                <input 
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Thinking About Remote Legal Transcription Jobs?..."
                  className="w-full bg-black border border-white/10 rounded-xl py-4 px-6 text-xl font-bold focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-gray-500 tracking-widest flex items-center gap-2">
                  <LinkIcon size={12} />
                  Permalink
                </label>
                <div className="flex items-center bg-black border border-white/10 rounded-xl px-6 py-3">
                  <span className="text-gray-500 text-sm">webflora.com/blogs/</span>
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
                  Description
                </h3>
                <div className="flex bg-black p-1 rounded-lg border border-white/10">
                  <button 
                    onClick={() => setActiveView("visual")}
                    className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${activeView === 'visual' ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
                  >
                    Visual Editor
                  </button>
                  <button 
                    onClick={() => setActiveView("source")}
                    className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${activeView === 'source' ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
                  >
                    Source Code
                  </button>
                </div>
              </div>
              <textarea 
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                rows={20}
                placeholder="Write your blog content here or paste HTML..."
                className={`w-full bg-black p-8 focus:outline-none transition-all resize-none font-mono text-sm leading-relaxed ${activeView === 'source' ? 'text-green-400' : 'text-gray-300'}`}
              />
            </section>

            {/* SEO Details */}
            <section className="bg-zinc-950 border border-white/10 rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <Globe className="text-brand-red" size={24} />
                SEO Meta Details
              </h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">SEO Title</label>
                  <input 
                    type="text"
                    name="seoTitle"
                    value={formData.seoTitle}
                    onChange={handleInputChange}
                    placeholder="Search engine optimized title..."
                    className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">SEO Description</label>
                  <textarea 
                    name="seoDescription"
                    value={formData.seoDescription}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="A brief summary for search results..."
                    className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition-all resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">SEO Keywords</label>
                    <input 
                      type="text"
                      name="seoKeywords"
                      value={formData.seoKeywords}
                      onChange={handleInputChange}
                      placeholder="legal, transcription, ai..."
                      className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">Meta Extra Head</label>
                    <input 
                      type="text"
                      name="metaExtraHead"
                      value={formData.metaExtraHead}
                      onChange={handleInputChange}
                      placeholder="<meta name='robots' ... />"
                      className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition-all font-mono text-xs"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            {/* Author & Tags */}
            <section className="bg-zinc-950 border border-white/10 rounded-3xl p-6 space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-gray-500 tracking-widest flex items-center gap-2">
                  <Layout size={12} />
                  Category
                </label>
                <select 
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition-all text-sm appearance-none cursor-pointer"
                >
                  <option value="General">General</option>
                  <option value="Technology">Technology</option>
                  <option value="Business">Business</option>
                  <option value="Development">Development</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                  <option value="News">News</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-gray-500 tracking-widest flex items-center gap-2">
                  <User size={12} />
                  Author Name
                </label>
                <input 
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  placeholder="e.g., John Doe"
                  className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition-all text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-gray-500 tracking-widest flex items-center gap-2">
                  <Tag size={12} />
                  Tags (Comma separated)
                </label>
                <input 
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="e.g., Education, News..."
                  className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition-all text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-gray-500 tracking-widest flex items-center gap-2">
                  <Calendar size={12} />
                  Date Posted
                </label>
                <input 
                  type="date"
                  name="datePosted"
                  value={formData.datePosted}
                  onChange={handleInputChange}
                  className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition-all text-sm"
                />
              </div>
            </section>

            {/* Featured Image */}
            <section className="bg-zinc-950 border border-white/10 rounded-3xl p-6 space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest">Featured Image</h3>
              
              <div className="relative group aspect-video rounded-2xl overflow-hidden border-2 border-dashed border-white/10 hover:border-brand-red/50 transition-all flex flex-col items-center justify-center text-center p-4">
                {previewImage ? (
                  <>
                    <img src={previewImage} className="absolute inset-0 w-full h-full object-cover" />
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
                    <p className="text-xs text-gray-500">Upload high-res image</p>
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
                  Image URL
                </label>
                <input 
                  type="text"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
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
