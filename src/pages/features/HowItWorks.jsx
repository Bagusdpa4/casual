import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { PhoneFrame } from "../../components/assets/phoneFrame/PhoneFrame";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const HowItWorks = () => {
  const navigate = useNavigate();

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
      images: "/step/step01.jpg",
    },
    {
      step: "STEP 02",
      title: "Apply & Review",
      subtitle: "Applicant Review",
      desc: "Job seekers register and apply directly through the app. You gain immediate access to a dashboard where you can view the complete, detailed profiles of every registered candidate.",
      images: "/step/step02.jpg",
    },
    // {
    //   step: "STEP 03",
    //   title: "AI-Powered Matching",
    //   subtitle: "Smart Selection",
    //   desc: "No more manual sorting. Our built-in AI automatically screens all applicants and selects the most qualified candidates that perfectly match your specific job categories.",
    //   images: "/step/step03.png",
    // },
    {
      step: "STEP 03",
      title: "Digital Contracting",
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
      title: "Payroll & Invoicing",
      subtitle: "Automated Settlement",
      desc: "Attendance data automatically calculates worker payroll, generating instant digital payslips. Simultaneously, the system sends an automated invoice and a complete performance report directly to you.",
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
            className={`flex flex-col items-center gap-10 border-b border-slate-500 pb-20 lg:flex-row ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Bagian Teks */}
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
              <p className="max-w-md text-sm font-medium leading-relaxed text-black lg:text-4xl xl:text-xl">
                {item.desc}
              </p>
            </div>

            {/* Phone Frame Section */}
            <div className="flex w-full flex-1 justify-center">
              <div className="max-w-62.5 lg:max-w-100 xl:max-w-65 w-full">
                <PhoneFrame screenshot={item.images} index={index} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Bar Bawah */}
      {/* <div className="mt-16 flex w-full justify-center lg:mt-24 xl:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-6 p-3 lg:gap-8 lg:p-6 xl:gap-4 xl:p-4"
        >
          <button
            onClick={() => navigate(-1)}
            className="group flex cursor-pointer items-center gap-4 rounded-full border border-slate-100 bg-white px-6 py-2 shadow-lg transition-all hover:scale-110 hover:bg-slate-50 lg:px-12 lg:py-8 xl:px-4 xl:py-4"
          >
            <FaArrowLeft className="group-hover:text-primary text-lg text-slate-500 lg:text-4xl xl:text-xl" />
            <span className="group-hover:text-primary text-sm font-bold uppercase text-slate-500 lg:text-2xl xl:text-base">
              Kembali
            </span>
          </button>

          <div className="h-8 w-1 bg-slate-200 lg:h-16" />

          <button
            onClick={() => navigate("/")}
            className="bg-primary/10 text-primary hover:bg-primary flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:text-white lg:h-24 lg:w-24 xl:h-14 xl:w-14"
          >
            <FaHome className="text-xl lg:text-5xl xl:text-2xl" />
          </button>
        </motion.div>
      </div> */}
    </div>
  );
};
