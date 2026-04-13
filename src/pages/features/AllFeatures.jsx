import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PhoneFrame } from "../../components/assets/phoneFrame/PhoneFrame";
import { FeatureTabs } from "../../components/assets/features/FeatureTabs";
import { FaArrowLeft, FaHome, FaBrain, FaFileSignature } from "react-icons/fa";
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
          image: [
            "/features/job01.jpg",
            "/features/job02.jpg",
          ],
        },
      ],
    },
    {
      id: "AI Matching",
      icon: <FaBrain />,
      contents: [
        {
          key: "Smart Screening",
          title: "AI-Powered Applicant Matching",
          subtitle: "Automated selection with zero manual effort.",
          desc: "Say goodbye to manual CV sorting. Our intelligent AI automatically screens incoming applications and selects the most qualified candidates based on your specific category requirements.",
          image: [
            "/features/tracking01.png",
            "/features/tracking02.jpg",
            "/features/tracking03.png",
          ],
        },
      ],
    },
    {
      id: "E-Contracts",
      icon: <FaFileSignature />,
      contents: [
        {
          key: "Digital E-Contracts",
          title: "Paperless Onboarding",
          subtitle: "Legal compliance, 100% paperless.",
          desc: "Ensure legal compliance without the paperwork. Selected candidates review and sign their employment contracts digitally through their mobile app before arriving on-site.",
          image: [
            "/features/contract01.jpg",
            "/features/contract02.jpg",
          ],
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
          subtitle: "GPS + facial recognition verified clock-in.",
          desc: "Guarantee attendance accuracy. Workers check in and out via the app using a secure QR code system, validated by GPS location tracking and facial recognition.",
          image: [
            "/features/kehadiran01.jpg",
            "/features/kehadiran02.jpg",
          ],
        },
      ],
    },
    {
      id: "Payroll",
      icon: <RiMoneyDollarCircleLine />,
      contents: [
        {
          key: "Automated Payroll",
          title: "Seamless Financials",
          subtitle: "Accurate wages, instant digital payslips.",
          desc: "Eliminate manual calculation errors. The system automatically calculates worker wages based on verified attendance hours and instantly distributes digital payslips to the workers.",
          image: [
            "/features/payroll01.jpg",
            "/features/payroll02.jpg",
          ],
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
          image: [
            "/features/report01.png",
            "/features/report02.png",
          ],
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
                    <p className="text-xl font-bold leading-tight text-sky-500 lg:text-5xl xl:text-2xl">
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
    </div>
  );
};
