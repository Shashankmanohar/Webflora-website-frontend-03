"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Icon} from "@iconify/react";
import API_BASE_URL from "../config";

const CareerPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [generalFormState, setGeneralFormState] = useState({
    name: "",
    email: "",
    file: null,
  });
  const [modalFormState, setModalFormState] = useState({
    name: "",
    email: "",
    file: null,
  });
  const [submitLoading, setSubmitLoading] = useState(false);
  const [generalFileName, setGeneralFileName] = useState(
    "Drag & drop or click to upload",
  );
  const [modalFileName, setModalFileName] = useState("Select File");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallbackJobs = [
    {
      title: "Senior Frontend Engineer",
      category: "Engineering",
      type: "Full-Time",
      location: "Remote / New York",
    },
    {
      title: "Product Designer",
      category: "Design",
      type: "Full-Time",
      location: "London, UK",
    },
    {
      title: "Growth Marketing Intern",
      category: "Marketing",
      type: "Internship",
      location: "Remote",
    },
    {
      title: "Backend Systems Engineer",
      category: "Engineering",
      type: "Full-Time",
      location: "San Francisco, CA",
    },
  ];

  React.useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/public/jobs`);
        const data = await res.json();
        if (res.ok) {
          setJobs(data.length > 0 ? data : fallbackJobs);
        } else {
          setJobs(fallbackJobs);
        }
      } catch (err) {
        setJobs(fallbackJobs);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  const openApplyModal = (jobTitle) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  const closeApplyModal = () => {
    setIsModalOpen(false);
    setModalFormState({ name: "", email: "", file: null });
    setModalFileName("Select File");
  };

  const handleFileChange = (e, isGeneral = true) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        if (isGeneral) {
          setGeneralFileName("File too large (>5MB)");
        } else {
          setModalFileName("File too large (>5MB)");
        }
      } else {
        if (isGeneral) {
          setGeneralFormState({ ...generalFormState, file });
          setGeneralFileName(file.name);
        } else {
          setModalFormState({ ...modalFormState, file });
          setModalFileName(file.name);
        }
      }
    }
  };

  const handleFormSubmit = async (e, isGeneral = true) => {
    e.preventDefault();
    setSubmitLoading(true);

    const formData = new FormData();
    const state = isGeneral ? generalFormState : modalFormState;
    
    formData.append("name", state.name);
    formData.append("email", state.email);
    formData.append("resume", state.file);
    formData.append("position", isGeneral ? "General Application" : selectedJob);

    try {
      const res = await fetch(`${API_BASE_URL}/api/public/career`, {
        method: "POST",
        body: formData, // No headers needed for FormData, fetch adds them
      });

      if (res.ok) {
        alert("Application submitted successfully!");
        if (isGeneral) {
          setGeneralFormState({ name: "", email: "", file: null });
          setGeneralFileName("Drag & drop or click to upload");
        } else {
          closeApplyModal();
        }
      } else {
        const data = await res.json();
        alert(data.message || "Submission failed");
      }
    } catch (err) {
      alert("Server connection error.");
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <div className="bg-white text-black selection:bg-[#FF3B00] selection:text-white flex flex-col min-h-screen overflow-x-hidden">
      {/* Navigation */}

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 md:py-32 px-6 text-center border-b-4 border-black relative overflow-hidden bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1], delay: 0.2 }}
          className="relative z-10 max-w-4xl mx-auto bg-white border-4 border-black p-8 md:p-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-6 leading-none"
          >
            Join Our
            <br />
            <motion.span
              initial={{ color: "#000000" }}
              animate={{ color: "#FF3B00" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[#FF3B00] stroke-black drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
            >
              Team
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl font-semibold mb-10 max-w-2xl mx-auto tracking-tight uppercase"
          >
            We are looking for bold minds to build the future. No corporate BS.
            Just hard work and impact.
          </motion.p>

          <motion.a
            href="#jobs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-3 bg-[#FF3B00] text-black font-bold uppercase tracking-tight border-4 border-black px-8 py-4 text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-[#FF3B00] transition-all"
          >
            View Open Roles
            <Icon icon="solar:arrow-right-linear" width="24" height="24" />
          </motion.a>
        </motion.div>
      </motion.section>

      {/* General Application Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-6 border-b-4 border-black bg-[#FF3B00]/10"
        id="general-apply"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-2">
              Drop Your Resume
            </h2>
            <p className="text-lg font-semibold uppercase tracking-tight">
              Don't see a perfect fit? Send it anyway.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            onSubmit={(e) => handleFormSubmit(e, true)}
            className="bg-white border-4 border-black p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <label className="block font-bold uppercase text-sm tracking-tight">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={generalFormState.name}
                  onChange={(e) =>
                    setGeneralFormState({
                      ...generalFormState,
                      name: e.target.value,
                    })
                  }
                  className="w-full bg-white border-4 border-black p-3 font-semibold focus:outline-none focus:bg-[#FF3B00]/20 transition-colors placeholder:text-gray-400"
                  placeholder="JANE DOE"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <label className="block font-bold uppercase text-sm tracking-tight">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={generalFormState.email}
                  onChange={(e) =>
                    setGeneralFormState({
                      ...generalFormState,
                      email: e.target.value,
                    })
                  }
                  className="w-full bg-white border-4 border-black p-3 font-semibold focus:outline-none focus:bg-[#FF3B00]/20 transition-colors placeholder:text-gray-400"
                  placeholder="JANE@EXAMPLE.COM"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <label className="block font-bold uppercase text-sm tracking-tight">
                Resume (PDF/DOC, Max 5MB) *
              </label>
              <motion.div
                className="relative border-4 border-dashed border-black bg-gray-50 hover:bg-[#FF3B00]/10 transition-colors group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e, true)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="p-10 text-center flex flex-col items-center justify-center gap-3 pointer-events-none">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Icon
                      icon="solar:document-add-linear"
                      width="48"
                      height="48"
                      className="text-black group-hover:text-[#FF3B00] transition-colors"
                    />
                  </motion.div>
                  <span className="font-bold uppercase tracking-tight text-sm">
                    {generalFileName}
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <motion.button
              type="submit"
              disabled={submitLoading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 bg-[#FF3B00] text-black font-bold uppercase tracking-tight border-4 border-black px-6 py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-[#FF3B00] transition-all text-lg disabled:opacity-80"
            >
              {submitLoading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Icon
                      icon="solar:refresh-circle-linear"
                      width="24"
                      height="24"
                    />
                  </motion.div>
                  PROCESSING...
                </>
              ) : (
                <>
                  Submit Application
                  <Icon icon="solar:plain-2-linear" width="24" height="24" />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </motion.section>

      {/* Job Listings Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-6 flex-grow"
        id="jobs"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-12 border-b-4 border-black pb-4 inline-block"
          >
            Open Positions
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {loading ? (
              <div className="col-span-full py-20 flex justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 border-4 border-[#FF3B00] border-t-transparent rounded-full"
                />
              </div>
            ) : jobs.map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "12px 12px 0px 0px rgba(255,59,0,1)",
                }}
                className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col h-full group"
              >
                <div className="flex gap-2 mb-4 flex-wrap">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-black text-white text-xs font-bold uppercase px-3 py-1 border-2 border-black tracking-tight"
                  >
                    {job.category}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white text-black text-xs font-bold uppercase px-3 py-1 border-2 border-black tracking-tight"
                  >
                    {job.type}
                  </motion.span>
                </div>

                <h3 className="text-2xl font-bold uppercase tracking-tighter mb-2 group-hover:text-[#FF3B00] transition-colors">
                  {job.title}
                </h3>

                <div className="flex items-center gap-2 text-sm font-semibold uppercase mb-4 opacity-80">
                  <Icon icon="solar:map-point-linear" width="18" height="18" />
                  {job.location}
                </div>

                {job.lastDate && (
                  <div className="flex items-center gap-2 text-xs text-[#FF3B00] font-bold uppercase mb-8">
                    <Icon icon="solar:calendar-linear" width="18" height="18" />
                    Last Date: {new Date(job.lastDate).toLocaleDateString('en-IN')}
                  </div>
                )}

                <div className="mt-auto pt-6 border-t-4 border-black">
                  <motion.button
                    onClick={() => openApplyModal(job.title)}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#FF3B00",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-between bg-white text-black font-bold uppercase tracking-tight border-4 border-black px-4 py-3 hover:bg-[#FF3B00] transition-all"
                  >
                    Apply Now
                    <Icon
                      icon="solar:arrow-right-up-linear"
                      width="20"
                      height="20"
                    />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="border-t-4 border-black bg-white py-8 px-6 mt-auto"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-bold tracking-tighter text-xl uppercase">
            CRRS © 2024
          </div>
          <div className="flex gap-4">
            <motion.a
              href="#"
              whileHover={{ backgroundColor: "#FF3B00", scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 border-2 border-black hover:bg-[#FF3B00] hover:text-white transition-colors flex"
            >
              <Icon icon="solar:letter-linear" width="24" height="24" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ backgroundColor: "#FF3B00", scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 border-2 border-black hover:bg-[#FF3B00] hover:text-white transition-colors flex"
            >
              <Icon icon="solar:global-linear" width="24" height="24" />
            </motion.a>
          </div>
        </div>
      </motion.footer>

      {/* Apply Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeApplyModal}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border-4 border-black shadow-[16px_16px_0px_0px_rgba(255,59,0,1)] w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
            >
              {/* Close Button */}
              <motion.button
                onClick={closeApplyModal}
                whileHover={{ scale: 1.1, backgroundColor: "#FF3B00" }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-4 right-4 p-2 bg-white border-4 border-black hover:bg-[#FF3B00] hover:text-white transition-colors z-10 flex"
              >
                <Icon icon="solar:close-circle-linear" width="24" height="24" />
              </motion.button>

              <div className="p-8 md:p-10">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mb-8 border-b-4 border-black pb-6 pr-12"
                >
                  <p className="text-sm font-bold uppercase tracking-tight text-[#FF3B00] mb-2">
                    Applying For
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter">
                    {selectedJob}
                  </h2>
                </motion.div>

                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  onSubmit={(e) => handleFormSubmit(e, false)}
                  className="space-y-6"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-2"
                  >
                    <label className="block font-bold uppercase text-sm tracking-tight">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={modalFormState.name}
                      onChange={(e) =>
                        setModalFormState({
                          ...modalFormState,
                          name: e.target.value,
                        })
                      }
                      className="w-full bg-white border-4 border-black p-3 font-semibold focus:outline-none focus:bg-[#FF3B00]/20 transition-colors placeholder:text-gray-400"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-2"
                  >
                    <label className="block font-bold uppercase text-sm tracking-tight">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={modalFormState.email}
                      onChange={(e) =>
                        setModalFormState({
                          ...modalFormState,
                          email: e.target.value,
                        })
                      }
                      className="w-full bg-white border-4 border-black p-3 font-semibold focus:outline-none focus:bg-[#FF3B00]/20 transition-colors placeholder:text-gray-400"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-2"
                  >
                    <label className="block font-bold uppercase text-sm tracking-tight">
                      Resume (PDF/DOC) *
                    </label>
                    <motion.div
                      className="relative border-4 border-dashed border-black bg-white hover:bg-[#FF3B00]/10 transition-colors group cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                    >
                      <input
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => handleFileChange(e, false)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className="p-8 text-center flex flex-col items-center gap-2 pointer-events-none">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Icon
                            icon="solar:upload-linear"
                            width="32"
                            height="32"
                            className="text-black group-hover:text-[#FF3B00] transition-colors"
                          />
                        </motion.div>
                        <span className="font-bold uppercase tracking-tight text-sm">
                          {modalFileName}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={submitLoading}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-4 flex items-center justify-center gap-2 bg-[#FF3B00] text-black font-bold uppercase tracking-tight border-4 border-black px-6 py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-[#FF3B00] transition-all text-lg disabled:opacity-80"
                  >
                    {submitLoading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <Icon
                            icon="solar:refresh-circle-linear"
                            width="24"
                            height="24"
                          />
                        </motion.div>
                        PROCESSING...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Icon
                          icon="solar:plain-2-linear"
                          width="24"
                          height="24"
                        />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CareerPage;
