'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import emailjs from 'emailjs-com';
import CareersSlider from '@/components/CareersSlider';

const jobDetails = {
  job1: {
    title: "Senior Research Analyst",
    description:
      "We are looking for a Senior Research Analyst to join our team. As part of the R&D department, you'll be responsible for driving cutting-edge pharmaceutical research that helps bring life-changing medicines to the market.",
    responsibilities: [
      "Conduct market and pharmaceutical research",
      "Collaborate with cross-functional teams",
      "Analyze data and prepare detailed reports",
      "Manage the research budget and timelines",
    ],
    qualifications: [
      "Master's Degree in Pharmaceutical Sciences, Biochemistry, or related field",
      "5+ years of experience in research and analysis",
      "Strong communication and team collaboration skills",
      "Familiarity with pharmaceutical regulatory standards",
    ],
  },
  job2: {
    title: "Marketing Manager",
    description:
      "We are seeking a dynamic Marketing Manager to lead marketing initiatives, drive brand awareness, and increase sales across various platforms.",
    responsibilities: [
      "Develop marketing strategies",
      "Lead market research efforts",
      "Coordinate with the sales team to drive customer acquisition",
      "Analyze marketing performance and ROI",
    ],
    qualifications: [
      "Bachelor's degree in Marketing or related field",
      "4+ years of experience in marketing",
      "Proven track record in digital marketing",
      "Excellent communication skills",
    ],
  }
};

export default function CareerPage() {
  const [activeJob, setActiveJob] = useState(null);
  const hasJobs = Object.keys(jobDetails).length > 0;
  const jobRefs = useRef({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    location: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  useEffect(() => {
    // Scroll selected job into view when activeJob changes
    if (activeJob && jobRefs.current[activeJob]) {
      jobRefs.current[activeJob].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeJob]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.firstName + ' ' + formData.lastName,
      to_name: 'SWIFT Life Sciences HR',
      subject: `Job Application for ${jobDetails[activeJob]?.title}`,
      mobile: formData.mobile,
      email: formData.email,
      location: formData.location,
      resume: formData.resume ? formData.resume.name : 'No resume uploaded',
    };

    emailjs
      .send(
        'service_id', // Your EmailJS service ID
        'template_id', // Your EmailJS template ID
        templateParams,
        'user_id' // Your EmailJS user ID
      )
      .then(
        (result) => {
          alert('Your application has been submitted successfully!');
        },
        (error) => {
          alert('An error occurred while submitting your application.');
        }
      );
  };

  return (
    <>
      <Header />
      <section className="min-h-screen bg-white p-10 md:px-10">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">
            Careers at SWIFT Life Sciences
          </h1>
          <p className="text-gray-600 text-lg">
            Join us in revolutionizing healthcare solutions and building a better tomorrow.
          </p>
        </motion.div>

        <CareersSlider />

        {/* Job Selection and Application Form */}
        <section>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Job Details (Left Side) */}
            <div>
              <h2 className="text-3xl font-semibold text-indigo-700 mb-4 text-center">Open Positions</h2>
              {hasJobs ? (
                <div className="space-y-6">
                  {Object.entries(jobDetails)
                    .sort(([keyA], [keyB]) => (keyA === activeJob ? -1 : keyB === activeJob ? 1 : 0))
                    .map(([key, job]) => (
                      <div
                        key={key}
                        ref={(el) => (jobRefs.current[key] = el)}
                        className={`cursor-pointer border p-6 rounded-lg transition transform ${activeJob === key
                          ? 'bg-indigo-100 ring-2 ring-indigo-400 scale-[1.01]'
                          : 'hover:bg-indigo-50'
                          }`}
                        onClick={() => setActiveJob(key)}
                      >
                        <h3 className="text-xl font-semibold text-indigo-700">{job.title}</h3>
                        <p className="text-gray-600">{job.description}</p>

                        {activeJob === key && (
                          <div className="mt-4 text-sm text-gray-700 space-y-4">
                            <div>
                              <h4 className="font-semibold text-indigo-600 mb-2">Responsibilities:</h4>
                              <ul className="list-disc list-inside space-y-1">
                                {job.responsibilities.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold text-indigo-600 mb-2">Qualifications:</h4>
                              <ul className="list-disc list-inside space-y-1">
                                {job.qualifications.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              ) : (
                <div className="text-center text-gray-500">No jobs available at the moment.</div>
              )}
            </div>
            {/* Apply Form (Right Side) */}
            <div>
              <h2 className="text-3xl font-semibold text-indigo-700 mb-6 text-center">
                Career Application
              </h2>

              <motion.form
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
                onSubmit={handleSubmit}
              >
                {/* Job Title Display - "Applying for [Job Title]" */}
                {activeJob && jobDetails[activeJob] && (
                  <div className="mb-6">
                    <p className="text-lg font-semibold text-indigo-700">
                      Applying for: {jobDetails[activeJob].title}
                    </p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* First Name */}
                  <div>
                    <label className="block text-gray-800 mb-2 font-medium">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-gray-800 mb-2 font-medium">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                    />
                  </div>

                  {/* Mobile / Telephone */}
                  <div>
                    <label className="block text-gray-800 mb-2 font-medium">Mobile / Telephone</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-800 mb-2 font-medium">Email ID</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                    />
                  </div>

                  {/* Location */}
                  <div className="md:col-span-2">
                    <label className="block text-gray-800 mb-2 font-medium">State / City / Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                    />
                  </div>

                  {/* Resume Upload */}
                  <div className="md:col-span-2">
                    <label className="block text-gray-800 mb-2 font-medium">Upload Resume (PDF/DOC)</label>
                    <input
                      type="file"
                      name="resume"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                      className="w-full file:px-4 file:py-2 file:border file:border-gray-300 file:rounded-lg file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 transition"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow-sm transition"
                >
                  Submit Application
                </button>
              </motion.form>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
