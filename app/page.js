'use client';

import Head from 'next/head';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { AcademicCapIcon, UsersIcon, GlobeAltIcon, BuildingStorefrontIcon, PresentationChartBarIcon } from '@heroicons/react/24/solid';

export default function HomePage() {
  const [visibleLogos, setVisibleLogos] = useState([]);
  const allLogos = [
    '/partners/1.webp',
    '/partners/2.webp',
    '/partners/3.webp',
    '/partners/4.webp',
    '/partners/5.webp',
    '/partners/6.webp',
    '/partners/7.webp',
    '/partners/8.webp',
    '/partners/9.webp',
    '/partners/10.webp',
  ];

  const logosToShow = 6;
  const intervalTime = 5000;

  useEffect(() => {
    setVisibleLogos(allLogos.slice(0, logosToShow));

    const interval = setInterval(() => {
      setVisibleLogos((prevVisibleLogos) => {
        const nextIndex = (allLogos.indexOf(prevVisibleLogos[0]) + logosToShow) % allLogos.length;
        return allLogos.slice(nextIndex, nextIndex + logosToShow);
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      label: 'Years of Research Experience',
      value: 24,
      icon: <AcademicCapIcon className="w-8 h-8 text-indigo-600" />
    },
    {
      label: 'Staff Dedicated to Quality',
      value: 40,
      icon: <UsersIcon className="w-8 h-8 text-indigo-600" />
    },
    {
      label: 'Distribution Channel Across States',
      value: 1000,
      icon: <BuildingStorefrontIcon className="w-8 h-8 text-indigo-600" />
    },
    {
      label: 'Operations Across Countries',
      value: 19,
      icon: <GlobeAltIcon className="w-8 h-8 text-indigo-600" />
    },
    {
      label: 'Pharmaceutical Companies Trusted Partnership',
      value: 14,
      icon: <PresentationChartBarIcon className="w-8 h-8 text-indigo-600" />
    }
  ];

  const Counter = ({ endValue }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 2; // seconds
      const increment = endValue / (duration * 60);

      const interval = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          clearInterval(interval);
          setCount(endValue);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60); // update every frame

      return () => clearInterval(interval);
    }, [endValue]);

    return <motion.span>{count}</motion.span>;
  };

  return (
    <>
      <Head>
        <title>Swift Life Sciences</title>
        <meta name="description" content="Driving a healthier future through science and technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          aria-label="Background video showcasing innovation"
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6 md:px-12">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6 text-shadow-lg leading-tight tracking-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Welcome to Swift Life Sciences
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl max-w-3xl mb-8 px-4 text-gray-200 drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          >
            For a healthier future through science and technology.
          </motion.p>
          <motion.button
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: 'easeOut', delay: 0.6 }}
            aria-label="Learn more about Swift Life Sciences"
          >
            Learn More
          </motion.button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16"
          >
            Why Choose Us?
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-center bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 w-full sm:w-1/2 md:w-48"
              >
                {/* Render the specific icon for each stat */}
                <div className="mb-4 p-3 bg-indigo-100 text-indigo-600 rounded-full">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-indigo-600 mb-2">
                  <Counter endValue={stat.value} />
                </h3>
                <p className="text-sm text-gray-600 text-center">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* What We Do */}
      <section className="bg-gray-50 py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="text-left text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              <span className="relative inline-block text-indigo-600">
                What We Do
              </span>
            </h2>
            <p className="mt-4 text-left text-gray-500 max-w-2xl">
              Driving healthcare innovation through research, manufacturing, and modern science.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Commitment to Innovation',
                desc: 'We recognize that technology and medicine are constantly evolving. Our team is always up to date with the latest advancements in the healthcare industry.',
                img: '/whatwedo/innovation.jpeg',
              },
              {
                title: 'Drug Development and Testing',
                desc: 'We strive to improve patient outcomes through rigorous testing and research. Our team is committed to advancing medical science and improving health outcomes.',
                img: '/whatwedo/drug-testing.jpeg',
              },
              {
                title: 'Pharmaceutical Manufacturing',
                desc: 'We maintain the highest standards of safety and quality in manufacturing. Our partnerships help ensure safe and effective products for clinical trials.',
                img: '/whatwedo/pharmaceutical-manufacturing.jpeg',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-4">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-indigo-700 mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-gradient-to-r from-blue-50 via-gray-50 to-white py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Our Partners
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
              We collaborate with leading pharmaceutical companies and research institutions around the globe to accelerate innovation and deliver trusted healthcare solutions.
            </p>
          </motion.div>

          <div className="overflow-x-auto py-6">
            <div className="inline-flex gap-10 md:gap-12 justify-start md:justify-center px-2">
              {visibleLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="transition-transform hover:scale-105 duration-300"
                >
                  <Image
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    width={180}
                    height={100}
                    className="rounded-xl shadow-md object-contain"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
