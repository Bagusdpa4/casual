import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaHome, FaRobot, FaUserFriends } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoPhonePortrait, IoReceipt } from "react-icons/io5";
import { CiMapPin } from "react-icons/ci";

export const WhatIs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const corePillar = [
    {
      title: "All-in-One Ecosystem",
      description:
        "Manage sourcing, attendance, and payroll within a single integrated platform.",
      icon: <AiOutlineGlobal />,
      bgIcon: "bg-slate-200",
    },
    {
      title: "AI-Powered Matching",
      description:
        "Automatically selects the most matching candidates tailored perfectly to your specific manpower needs.",
      icon: <FaRobot />,
      bgIcon: "bg-slate-200",
    },
    {
      title: "100% Paperless Operation",
      description:
        "Eliminate physical paperwork with digital employment contracts and e-pay slips.",
      icon: <IoPhonePortrait />,
      bgIcon: "bg-slate-200",
    },
    {
      title: "Real-Time Visibility",
      description:
        "Monitor worker attendance and on-site status live via GPS and facial recognition.",
      icon: <CiMapPin />,
      bgIcon: "bg-slate-200",
    },
    {
      title: "Verified Talent Pool",
      description:
        "Gain instant access to a curated database of pre-screened, ready-to-work candidates.",
      icon: <FaUserFriends />,
      bgIcon: "bg-slate-200",
    },
    {
      title: "Automated Accuracy",
      description:
        "Ensure zero calculation errors with automated payroll and transparent digital invoicing.",
      icon: <IoReceipt />,
      bgIcon: "bg-slate-200",
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-white px-6 py-8 font-sans lg:px-20 lg:py-16">
      {/* Background Decor */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />

      {/* Logo */}
      <div className="mb-12 flex w-full justify-center lg:mb-16 xl:mb-20">
        <img
          src="/bg-casual.png"
          alt="Casual Logo"
          className="h-auto w-[40%] lg:w-[50%] xl:w-[20%]"
        />
      </div>

      {/* Main Content */}
      <div className="mx-auto w-full max-w-5xl grow">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col space-y-10"
        >
          {/* Headline */}
          <section className="space-y-6 border-b border-slate-500 pb-6 text-center lg:text-left">
            <h1 className="text-primary text-3xl font-black lg:text-7xl xl:text-4xl">
              Your End-to-End Daily Workforce{" "}
              <span className="text-sky-400">Solution.</span>
            </h1>
            <p className="mx-auto max-w-4xl text-base font-semibold leading-relaxed text-slate-500 lg:mx-0 lg:text-4xl xl:text-lg">
              A smart, cloud-based platform designed to{" "}
              <span className="text-primary font-extrabold">
                bridge the gap
              </span>{" "}
              between your daily worker requests and fast, transparent
              fulfillment.
            </p>
          </section>

          {/* Section Label */}
          <span className="text-4xl font-medium uppercase text-slate-500">
            The Core Pillar
          </span>

          {/* Core Pillar Cards */}
          <section className="space-y-10">
            {corePillar.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6 rounded-2xl border border-slate-300 bg-white p-4 shadow-xl"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center self-center rounded-full lg:h-28 lg:w-28 xl:h-12 xl:w-12 ${item.bgIcon}`}
                >
                  {React.cloneElement(item.icon, {
                    className: "text-lg lg:text-6xl xl:text-2xl text-black",
                  })}
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-primary text-sm font-bold lg:text-5xl xl:text-2xl">
                    {item.title}
                  </p>
                  <p className="text-sm leading-snug text-slate-500 lg:text-4xl xl:text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </motion.div>
      </div>

      {/* Bottom Navigation */}
      <div className="mt-16 flex w-full justify-center lg:mt-24 xl:mt-16">
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
      </div>
    </div>
  );
};
