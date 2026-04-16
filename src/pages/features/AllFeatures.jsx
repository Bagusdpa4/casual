import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PhoneFrame } from "../../components/assets/phoneFrame/PhoneFrame";
import { FeatureTabs } from "../../components/assets/features/FeatureTabs";
import { FaArrowLeft, FaHome, FaFileSignature } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { MdInsertChart } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { CiMapPin } from "react-icons/ci";

export const AllFeatures = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Job Broadcasting");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const features = [
    {
      id: "Job Broadcasting",
      icon: <GrAnnounce />,
      contents: [
        {
          key: "Instant Sourcing",
          title: "Real-Time Job Broadcasting",
          subtitle: "Reach thousands of verified workers in seconds.",
          desc: "Publish daily worker vacancies instantly. Your requests are broadcasted directly to our mobile app, reaching a vast pool of verified, ready-to- work candidates in seconds.",
          image: ["/features/job01.jpg", "/features/job02.jpg"],
        },
      ],
    },
    // {
    //   id: "AI Matching",
    //   icon: <FaBrain />,
    //   contents: [
    //     {
    //       key: "Smart Screening",
    //       title: "AI-Powered Applicant Matching",
    //       subtitle: "Automated selection with zero manual effort.",
    //       desc: "Say goodbye to manual CV sorting. Our intelligent AI automatically screens incoming applications and selects the most qualified candidates based on your specific category requirements.",
    //       image: [
    //         "/features/tracking01.png",
    //         "/features/tracking02.jpg",
    //         "/features/tracking03.png",
    //       ],
    //     },
    //   ],
    // },
    {
      id: "E-Contracts",
      icon: <FaFileSignature />,
      contents: [
        {
          key: "Digital E-Contracts",
          title: "Paperless Onboarding",
          subtitle: "Legal compliance, 100% paperless.",
          desc: "Ensure legal compliance without the paperwork. Selected candidates review and sign their employment contracts digitally through their mobile app before arriving on-site.",
          image: ["/features/contract01.jpg", "/features/contract02.jpg"],
        },
      ],
    },
    {
      id: "Attendance",
      icon: <CiMapPin />,
      contents: [
        {
          key: "Smart Clock-In System",
          title: "Fraud-Proof Attendance",
          subtitle: "GPS verified clock-in.",
          desc: "Guarantee attendance accuracy. Workers check in and out via the app using a secure QR code system, validated by GPS location.",
          image: ["/features/kehadiran01.jpg", "/features/kehadiran02.jpg"],
        },
      ],
    },
    {
      id: "Payroll",
      icon: <RiMoneyDollarCircleLine />,
      contents: [
        {
          key: "Automated Payroll",
          title: "Seamless Payroll System",
          subtitle: "Accurate wages, instant digital payslips.",
          desc: "Eliminate manual calculation errors. The system automatically calculates worker wages based on verified attendance hours and instantly distributes digital payslips to the workers.",
          image: ["/features/payroll01.jpg", "/features/payroll02.jpg"],
        },
      ],
    },
    {
      id: "Reporting",
      icon: <MdInsertChart />,
      contents: [
        {
          key: "Auto-Invoicing & Reporting",
          title: "Comprehensive Administration",
          subtitle: "Automated invoices & performance reports.",
          desc: "At the end of every event or shift, the system automatically generates a digital invoice for the client, accompanied by a detailed performance report of the deployed workforce.",
          image: ["/features/report01.png", "/features/report02.png"],
        },
      ],
    },
  ];

  const currentData = features.find((f) => f.id === activeTab);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white py-12 font-sans">
      {/* Background Decor - Lingkaran Blur Halus */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-sky-200 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-sky-200 blur-[120px]" />

      {/* Top Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex w-full items-center justify-between px-6 pt-6 lg:px-12 xl:px-8"
      >
        <button
          onClick={() => navigate(-1)}
          className="hover:bg-primary border-primary group flex cursor-pointer items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-lg transition-all hover:scale-110 lg:gap-4 lg:px-8 lg:py-4 xl:gap-3 xl:px-6 xl:py-3"
        >
          <FaArrowLeft className="text-primary text-base group-hover:text-white lg:text-4xl xl:text-lg" />
          <span className="text-primary text-sm font-bold uppercase group-hover:text-white lg:text-3xl xl:text-base">
            Back
          </span>
        </button>

        <button
          onClick={() => navigate("/")}
          className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:text-white lg:h-24 lg:w-24 xl:h-12 xl:w-12"
        >
          <FaHome className="text-lg lg:text-5xl xl:text-xl" />
        </button>
      </motion.div>

      <div className="flex w-full max-w-7xl flex-col">
        {/* Header Section */}
        <div className="mt-6 flex w-full justify-center">
          <img
            src="/bg-casual.png"
            alt="Casual Logo"
            className="h-auto w-[30%] object-contain lg:w-[40%] xl:w-[20%]"
          />
        </div>
        <div className="px-12 py-6 text-left lg:py-10 xl:py-6">
          <h1 className="text-primary py-2 text-2xl font-black uppercase tracking-tight lg:text-7xl xl:text-4xl">
            Features
          </h1>
          <p className="mt-4 border-b border-slate-500 pb-10 text-sm font-semibold text-slate-500 lg:text-4xl xl:text-lg">
            See what Casual Works can do
          </p>
        </div>

        {/* Dynamic Tab Navigation Component */}
        <div className="w-full overflow-hidden">
          <FeatureTabs
            items={features}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        {/* Content Section - Dinamis Kanan Kiri */}
        <div className="flex w-full items-center justify-center p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex w-full flex-col gap-20"
            >
              {currentData.contents.map((content, index) => (
                <div
                  key={index}
                  className={`flex w-full flex-col items-center gap-12 lg:gap-16 ${
                    currentData.contents.length > 1
                      ? "lg:flex-row lg:justify-center"
                      : "lg:flex-row lg:justify-center lg:gap-6"
                  } ${index % 2 !== 0 && currentData.contents.length > 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Details Section */}
                  <div className="w-full flex-1 space-y-4 text-left">
                    {/* Badge / Key Label */}
                    <span className="text-primary inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-4 text-3xl font-semibold tracking-widest">
                      {React.cloneElement(currentData.icon, {
                        className: "text-4xl",
                      })}
                      {content.key}
                    </span>

                    {/* Title */}
                    <h2 className="text-primary text-4xl font-black leading-tight lg:text-7xl xl:text-5xl">
                      {content.title}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-xl font-bold leading-tight text-[#2563EB] lg:text-5xl xl:text-2xl">
                      {content.subtitle}
                    </p>

                    {/* Divider */}
                    <div className="h-1 w-40 rounded-full bg-black" />

                    {/* Description */}
                    <p className="text-sm font-semibold leading-relaxed text-slate-500 lg:text-4xl xl:text-base">
                      {content.desc}
                    </p>

                    {/* Dots Indicator */}
                    <div className="flex items-center gap-2 pt-2">
                      {features.map((f) => (
                        <button
                          key={f.id}
                          onClick={() => setActiveTab(f.id)}
                          className={`h-6 rounded-full transition-all duration-300 ${
                            activeTab === f.id
                              ? "bg-primary w-20"
                              : "w-10 cursor-pointer bg-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Phone Frame Section */}
                  <div className="flex w-full flex-1 justify-center">
                    <div className="max-w-62.5 lg:max-w-100 xl:max-w-65 w-full">
                      <PhoneFrame screenshot={content.image} />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
