'use client';

import { motion } from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';

export default function ManufacturingPage() {
    return (
        <>
            <Header />

            {/* Hero Section */}
            <section
                className="relative bg-cover bg-no-repeat min-h-[70vh] flex items-center justify-center text-white"
                style={{
                    backgroundImage:
                        "url('/manufacturing/OIP.jpeg')",
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center px-4"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
                        Manufacturing
                    </h1>
                    <p className="text-lg md:text-2xl max-w-2xl mx-auto text-gray-200">
                        Modern Facilities Empowered by Precision, Innovation, and Purpose
                    </p>
                </motion.div>
            </section>

            {/* Introduction */}
            <section className="bg-white py-20 px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-6">Introduction</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        An organisation’s capabilities are deeply reflected in what it manufactures. SWIFT's
                        manufacturing infrastructure is an extension of our R&D vision—designed to meet modern
                        therapeutic demands across diseases while making healthcare affordable and accessible.
                        <br /><br />
                        Our state-of-the-art facility enables us to produce branded formulations, generics,
                        and explore advanced Active Pharmaceutical Ingredients (APIs), addressing both local
                        and global markets.
                    </p>
                </motion.div>
            </section>

            {/* Dosage Forms */}
            <section className="bg-gray-50 py-20 px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-10 text-center">
                        Dosage Forms
                    </h2>
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {[
                            "NON BETA LACTUM CAPSULE",
                            "NON BETA LACTUM TABLETS",
                            "SACHETS",
                            "TOPICAL PREPARATIONS",
                            "ORAL LIQUIDS",
                        ].map((form, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition duration-300 text-center"
                            >
                                <CheckCircle className="text-indigo-600 mb-3" size={28} />
                                <h3 className="text-lg font-semibold text-gray-800">{form}</h3>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* APIs and Bulk Drugs */}
            <section className="bg-white py-20 px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-10 text-center">
                        API & Bulk Drugs
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            "Chloramphenicol Palmitate I.P/B.P",
                            "Sodium Citrate I.P/B.P",
                            "Sodium Acid Citrate B.P (Di-sodium Hydrogen Citrate)",
                            "Potassium Citrate I.P/B.P",
                            "Mono Sodium Citrate",
                            "Citric Acid I.P",
                        ].map((api, i) => (
                            <div
                                key={i}
                                className="bg-indigo-50 border border-indigo-100 p-5 rounded-xl hover:bg-indigo-100 transition"
                            >
                                <p className="text-gray-800">{api}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Call to Action */}
            <section className="bg-indigo-700 text-white py-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto px-4"
                >
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                        SWIFT: Where Innovation Meets Integrity
                    </h3>
                    <p className="text-md md:text-lg text-gray-200">
                        We are committed to building a future where advanced pharmaceuticals are accessible,
                        effective, and made with excellence from the ground up.
                    </p>
                </motion.div>
            </section>

            <Footer />
        </>
    );
}
