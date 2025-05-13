'use client';

import { motion } from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <>
            <Header />
            {/* Hero Section */}
            <section className="relative bg-cover bg-no-repeat min-h-[60vh] flex items-center justify-center text-white" style={{ backgroundImage: "url('/about/OIP.jpeg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center px-6 md:px-16"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                        About SWIFT Life Sciences
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                        Innovating Healthcare Solutions for a Better Tomorrow
                    </p>
                </motion.div>
            </section>

            {/* Overview Section */}
            <section className="py-16 px-6 md:px-16 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl font-semibold text-indigo-700 mb-8">
                            Company Overview
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            SWIFT, India’s emerging pharmaceutical company, manufactures and markets world-class generics and branded generic pharmaceuticals, with an aim to expand into Active Pharmaceutical Ingredients (API) in the near future.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            We are committed to delivering high-quality medications, enhancing access to healthcare across India and globally, and driving innovation in our field.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-16 px-6 md:px-16 bg-gray-50">
                <div className="max-w-7xl mx-auto space-y-16">
                    {/* Section 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="md:flex md:items-center md:gap-10"
                    >
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-semibold text-indigo-700 mb-6">
                                India-Centric, Globally Focused
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                India’s pharmaceutical sector plays a critical role in global healthcare. SWIFT is committed to utilizing India-centric advantages to deliver transformative health solutions to both advanced and developing nations.
                            </p>
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0">
                            <Image
                                src="/about/Global Healthcare.jpeg"
                                alt="Global Healthcare"
                                width={600}
                                height={400}
                                className="rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105"
                            />
                        </div>
                    </motion.div>

                    {/* Section 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="md:flex md:items-center md:gap-10 flex-row-reverse"
                    >
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-semibold text-indigo-700 mb-6">
                                Modern Infrastructure for a Healthier World
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Our state-of-the-art manufacturing facility focuses on prevention, diagnosis, and treatment, helping to reduce the global disease burden through innovation and quality.
                            </p>
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0">
                            <Image
                                src="/about/Modern Infrastructure.jpg"
                                alt="Modern Infrastructure"
                                width={600}
                                height={400}
                                className="rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105"
                            />
                        </div>
                    </motion.div>

                    {/* Section 3 */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="md:flex md:items-center md:gap-10"
                    >
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-semibold text-indigo-700 mb-6">
                                SWIFT Speaks – Our Promise
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                SWIFT speaks of dedication, resilience, and leadership. Through consistent growth, we aim to establish a strong presence in specialty pharmaceuticals while expanding our reach globally.
                            </p>
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0">
                            <Image
                                src="/about/Our Promise.jpeg"
                                alt="Our Promise"
                                width={600}
                                height={400}
                                className="rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105"
                            />
                        </div>
                    </motion.div>

                    {/* Section 4 */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="md:flex md:items-center md:gap-10 flex-row-reverse"
                    >
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-semibold text-indigo-700 mb-6">
                                People First, Innovation Always
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Our people are the backbone of our success. As we strive to become a research-driven global pharmaceutical company, their passion and purpose will propel our journey forward.
                            </p>
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0">
                            <Image
                                src="/about/Our Team.jpg"
                                alt="Our Team"
                                width={600}
                                height={400}
                                className="rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    );
}
