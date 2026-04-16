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
      title: "100% Paperless Operation",
      description:
        "Eliminate physical paperwork with digital employment contracts and digital pay slips.",
      icon: <IoPhonePortrait />,
      bgIcon: "bg-slate-200",
    },
    {
      title: "Real-Time Visibility",
      description: "Monitor worker attendance and on-site status live via GPS.",
      icon: <CiMapPin />,
      bgIcon: "bg-slate-200",
    },
    {
      title: "Verified Talent",
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
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-white px-6 py-8 font-sans lg:px-10 lg:py-16">
      {/* Background Decor */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-60 -right-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />

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
              <span className="text-[#2563EB]">Solution.</span>
            </h1>
            <p className="mx-auto max-w-5xl text-justify text-base font-semibold leading-relaxed text-slate-500 lg:mx-0 lg:text-[40px] xl:text-lg">
              A smart, cloud-based platform designed to{" "}
              <span className="text-primary font-extrabold">
                bridge the gap
              </span>{" "}
              between your daily worker requests and fast, transparent
              fulfillment.
            </p>
          </section>

          {/* Section Label */}
          <section className="space-y-4 rounded-2xl bg-slate-100 p-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 lg:text-4xl xl:text-base">
              Core Pillars
            </span>
            <div className="space-y-6 pt-10">
              {corePillar.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="flex items-center gap-10 rounded-2xl border border-slate-400 bg-white px-5 py-6 shadow-xl"
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center self-center rounded-xl lg:h-24 lg:w-24 xl:h-12 xl:w-12 ${item.bgIcon}`}
                  >
                    {React.cloneElement(item.icon, {
                      className: "text-lg lg:text-6xl xl:text-3xl text-black",
                    })}
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-primary text-sm font-bold lg:text-5xl xl:text-2xl">
                      {item.title}
                    </p>
                    <p className="text-bold text-sm leading-snug text-slate-500 lg:text-4xl xl:text-lg">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};
