import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PhoneFrame } from "../../components/assets/phoneFrame/PhoneFrame";
import { FaArrowLeft, FaHome, FaSyncAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const HowItWorks = () => {
  const navigate = useNavigate();
  const [landscapeIdx, setLandscapeIdx] = useState({});

  const handleLandscapeSwap = (index, length) => {
    setLandscapeIdx((prev) => ({
      ...prev,
      [index]: ((prev[index] ?? 0) + 1) % length,
    }));
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const steps = [
    {
      step: "STEP 01",
      title: "Request & Broadcast",
      subtitle: "Sourcing & Broadcasting",
      desc: "It starts with your daily workforce needs. Contact us with your requirements, and the job vacancy is instantly broadcasted live on our dedicated applicant mobile app.",
      images: "/step/step1.svg",
      landscape: true,
    },
    {
      step: "STEP 02",
      title: "Apply & Review",
      subtitle: "Applicant Review",
      desc: "Job seekers register and apply directly through the app. You gain immediate access to a dashboard where you can view the complete, detailed profiles of every registered candidate.",
      images: ["/step/step2.svg", "/step/step2-1.svg"],
      landscape: true,
    },
    {
      step: "STEP 03",
      title: "Digital Contract",
      subtitle: "Digital Onboarding",
      desc: "Once the candidate is selected and completed the interview, they will receive their job offers on the app. They can securely review and sign their employment contracts digitally.",
      images: "/step/step04.jfif",
    },
    {
      step: "STEP 04",
      title: "App-Based Attendance",
      subtitle: "On-Site Operations",
      desc: "During the event, workers use the mobile app to clock in and out. The app validates their presence on-site, ensuring strict, real-time attendance tracking for your operations.",
      images: "/step/step05.jpg",
    },
    {
      step: "STEP 05",
      title: "Payroll",
      subtitle: "Income Tracking",
      desc: "Take control of your financial visibility. With Income Tracking, attendance data is automatically synchronised with payroll calculations, and instant invoices and performance reports are sent directly to your dashboard.",
      images: "/step/step06.jpg",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-white px-6 py-8 font-sans lg:px-16 lg:py-24 xl:px-10 xl:py-16">
      {/* 1. Background Decor - Ditaruh di luar Card supaya tidak kena overflow-hidden */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />

      {/* Top Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mb-8 flex w-full items-center justify-between lg:mb-16 xl:mb-12"
      >
        {/* Tombol Kembali - kiri atas */}
        <button
          onClick={() => navigate(-1)}
          className="hover:bg-primary border-primary group flex cursor-pointer items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-lg transition-all hover:scale-110 lg:gap-4 lg:px-8 lg:py-4 xl:gap-3 xl:px-6 xl:py-3"
        >
          <FaArrowLeft className="text-primary text-base group-hover:text-white lg:text-4xl xl:text-lg" />
          <span className="text-primary text-sm font-bold uppercase group-hover:text-white lg:text-3xl xl:text-base">
            Back
          </span>
        </button>

        {/* Tombol Home - kanan atas */}
        <button
          onClick={() => navigate("/")}
          className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:text-white lg:h-24 lg:w-24 xl:h-12 xl:w-12"
        >
          <FaHome className="text-lg lg:text-5xl xl:text-xl" />
        </button>
      </motion.div>

      {/* Main Content */}
      <div className="mb-4 flex w-full justify-center lg:mb-20 xl:mb-10">
        <img
          src="/bg-casual.png"
          alt="Casual Logo"
          className="h-auto w-[40%] object-contain lg:w-[50%] xl:w-[15%]"
        />
      </div>
      <div className="mb-10 text-center lg:mb-20 lg:text-left xl:mb-16 xl:text-center">
        <h1 className="text-primary text-2xl font-black tracking-tight lg:text-6xl xl:text-3xl">
          How Casual Work Operates
        </h1>
        <p className="mt-4 text-sm font-medium text-black lg:mt-8 lg:text-4xl xl:mt-2 xl:text-lg">
          From your initial request to final invoicing, discover how our
          end-to-end ecosystem fully automates your daily worker management.
        </p>
      </div>

      {/* Container Step */}
      <div className="mx-auto flex max-w-5xl flex-col gap-20 lg:gap-20 xl:gap-0">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col gap-6 border-b border-slate-500 pb-16"
          >
            {item.landscape ? (
              // LANDSCAPE LAYOUT - Teks atas, gambar bawah
              <>
                {/* Teks Section */}
                <div className="space-y-3 text-left">
                  <span className="bg-primary inline-block rounded-full px-6 py-2 text-sm font-bold text-white lg:text-4xl xl:text-lg">
                    {item.step}
                  </span>
                  <h2 className="text-primary text-3xl font-black leading-tight lg:text-7xl xl:text-5xl">
                    {item.title}
                  </h2>
                  <p className="text-lg font-extrabold leading-tight text-slate-500 lg:text-5xl xl:text-2xl">
                    {item.subtitle}
                  </p>
                  <p className="max-w-full text-justify text-sm font-medium leading-relaxed text-black lg:text-4xl xl:text-xl">
                    {item.desc}
                  </p>
                </div>

                {/* Landscape Frame */}
                <div className="w-full">
                  <div className="lg:border-10 relative w-full overflow-hidden rounded-2xl border-[6px] border-black bg-black shadow-2xl lg:rounded-3xl xl:rounded-2xl xl:border-[7px]">
                    {/* Top bar notch */}
                    <div className="flex items-center gap-1.5 bg-black px-4 py-2 lg:px-6 lg:py-3 xl:px-4 xl:py-2">
                      <div className="h-2 w-2 rounded-full bg-red-500 lg:h-4 lg:w-4 xl:h-2.5 xl:w-2.5" />
                      <div className="h-2 w-2 rounded-full bg-yellow-400 lg:h-4 lg:w-4 xl:h-2.5 xl:w-2.5" />
                      <div className="h-2 w-2 rounded-full bg-green-500 lg:h-4 lg:w-4 xl:h-2.5 xl:w-2.5" />
                    </div>

                    {/* Screenshot - handle array & single */}
                    <div className="w-full bg-white">
                      {Array.isArray(item.images) ? (
                        <motion.img
                          key={landscapeIdx[index] ?? 0}
                          src={item.images[landscapeIdx[index] ?? 0]}
                          alt={item.title}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          onClick={() =>
                            handleLandscapeSwap(index, item.images.length)
                          }
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="h-auto w-full object-cover object-top"
                        />
                      ) : (
                        <img
                          src={item.images}
                          alt={item.title}
                          className="h-auto w-full object-cover object-top"
                        />
                      )}
                    </div>
                  </div>

                  {/* Swap Button - hanya muncul jika images array */}
                  {Array.isArray(item.images) && (
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      onClick={() =>
                        handleLandscapeSwap(index, item.images.length)
                      }
                      className="mx-auto mt-4 flex cursor-pointer items-center gap-2 rounded-full bg-slate-200 px-5 py-2.5 text-xs font-bold text-slate-600 shadow-md transition-colors hover:bg-slate-300 lg:mt-6 lg:px-8 lg:py-4 lg:text-2xl xl:mt-4 xl:px-5 xl:py-2.5 xl:text-xs"
                    >
                      <FaSyncAlt
                        style={{
                          transform: `rotate(${(landscapeIdx[index] ?? 0) * 180}deg)`,
                          transition: "transform 0.5s ease-in-out",
                        }}
                        className="text-sky-500"
                      />
                      <span>Tap to Switch Screen</span>
                    </motion.button>
                  )}

                  {/* Glow */}
                  <div className="pointer-events-none -z-10 mt-2 h-10 w-full scale-95 animate-pulse bg-sky-100 blur-[60px]" />
                </div>
              </>
            ) : (
              // PORTRAIT LAYOUT - Kiri kanan pakai PhoneFrame
              <div
                className={`flex flex-col items-center gap-10 lg:flex-row ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Teks Section */}
                <div className="flex-1 space-y-4 text-left">
                  <span className="bg-primary inline-block rounded-full px-6 py-2 text-sm font-bold text-white lg:text-4xl xl:text-lg">
                    {item.step}
                  </span>
                  <div className="space-y-1">
                    <h2 className="text-primary text-3xl font-black leading-tight lg:text-7xl xl:text-5xl">
                      {item.title}
                    </h2>
                    <p className="text-lg font-extrabold leading-tight text-slate-500 lg:text-5xl xl:text-2xl">
                      {item.subtitle}
                    </p>
                  </div>
                  <p className="max-w-md text-justify text-sm font-medium leading-relaxed text-black lg:text-4xl xl:text-xl">
                    {item.desc}
                  </p>
                </div>

                {/* Phone Frame Section */}
                <div className="flex w-full flex-1 justify-center">
                  <div className="max-w-62.5 lg:max-w-100 w-full xl:max-w-80">
                    <PhoneFrame screenshot={item.images} index={index} />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
