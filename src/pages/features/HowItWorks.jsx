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
      title: "Absence",
      subtitle: "Absence Smart Attendance & Geo-Validation",
      desc: "Selfie-based attendance and geotagging features provide management with full transparency regarding the precise time and location your sales team starts their day.",
      images: ["/step/step01.jpg", "/step/step01-2.jpg"],
    },
    {
      step: "STEP 02",
      title: "Stock Entry",
      subtitle: "Warehouse Stock Withdrawal Quantity",
      desc: "Say goodbye to inventory discrepancies. SellGo automates the recording of stock taken directly from the warehouse, ensuring every product movement is accurately tracked.",
      images: "/step/step02.jpg",
    },
    {
      step: "STEP 03",
      title: "Schedule Visits",
      subtitle: "Optimized Route Mapping",
      desc: "Maximize trip efficiency and productivity. SellGo enables strategic, real-time daily store routing, eliminating overlapping paths and wasted travel time.",
      images: "/step/step03.png",
    },
    {
      step: "STEP 04",
      title: "Visitation",
      subtitle: "",
      desc: "Visits are executed based on clear schedules and priorities, increasing conversion rates by keeping the team focused on the right targets.",
      images: ["/step/step04-2.jpg", "/step/step04.png"],
    },
    {
      step: "STEP 05",
      title: "Transaction",
      subtitle: "Live Transactions & Reporting",
      desc: "Every transaction is recorded in real-time, streamlining workflows and providing comprehensive sales performance data.",
      images: ["/step/step05.jpg", "/step/step05-2.jpg"],
    },
    {
      step: "STEP 06",
      title: "Reconciliation & Reporting",
      subtitle: "Final Verification & Sales Insights",
      desc: "Digitized reconciliation of cash and inventory ensures seamless validation between field sales and the warehouse. Access real-time sales analytics to monitor team productivity and shape your long-term business roadmap.",
      images: "/step/step06.png",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-white px-6 py-8 font-sans lg:px-16 lg:py-24 xl:px-10 xl:py-16">
      {/* 1. Background Decor - Ditaruh di luar Card supaya tidak kena overflow-hidden */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />

      {/* Header Halaman */}
      <div className="mb-4 flex w-full justify-center lg:mb-20 xl:mb-10">
        <img
          src="/Teks Sellgo.png"
          alt="Teks Sellgo Logo"
          className="h-auto w-[40%] object-contain lg:w-[50%] xl:w-[15%]"
        />
      </div>
      <div className="mb-10 text-center lg:mb-20 xl:mb-16">
        <h1 className="text-primary text-2xl font-black tracking-tight lg:text-6xl xl:text-3xl">
          HOW THIS APP WORK
        </h1>
        <p className="mt-4 text-sm font-medium text-black lg:mt-8 lg:text-4xl xl:mt-2 xl:text-lg">
          Revolutionize your sales workflow through efficiency and transparency
          in every step
        </p>
      </div>

      {/* Container Step */}
      <div className="mx-auto flex max-w-5xl flex-col gap-20 lg:gap-40 xl:gap-0">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col items-center gap-10 lg:flex-row ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Bagian Teks */}
            <div className="flex-1 space-y-4 text-left">
              <span className="text-primary inline-block rounded-full bg-blue-200 px-6 py-2 text-sm font-bold lg:text-4xl xl:text-lg">
                {item.step}
              </span>
              <div className="space-y-1">
                <h2 className="text-primary text-3xl font-black leading-tight lg:text-7xl xl:text-5xl">
                  {item.title}
                </h2>
                <p className="text-lg font-extrabold leading-tight text-sky-400 lg:text-5xl xl:text-2xl">
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
      <div className="mt-16 flex w-full justify-center lg:mt-24 xl:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-6 p-3 lg:gap-8 lg:p-6 xl:gap-4 xl:p-4"
        >
          {/* Tombol Kembali */}
          <button
            onClick={() => navigate(-1)}
            className="group flex cursor-pointer items-center gap-4 rounded-full border border-slate-100 bg-white px-6 py-2 shadow-lg transition-all hover:scale-110 hover:bg-slate-50 lg:px-12 lg:py-8 xl:px-4 xl:py-4"
          >
            <FaArrowLeft className="group-hover:text-primary text-lg text-slate-500 lg:text-4xl xl:text-xl" />
            <span className="group-hover:text-primary text-sm font-bold uppercase text-slate-500 lg:text-2xl xl:text-base">
              Kembali
            </span>
          </button>

          {/* Divider vertikal tipis agar mirip desain referensi */}
          <div className="h-8 w-1 bg-slate-200 lg:h-16" />

          {/* Tombol Home */}
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
