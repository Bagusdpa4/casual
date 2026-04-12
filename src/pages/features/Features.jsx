import React from "react";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { HiChevronRight } from "react-icons/hi";
import { MdOutlineEventNote } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const Features = () => {
  const navigate = useNavigate();

  const featuresItems = [
    {
      step: "01",
      title: "Visit Management",
      desc: "Pemantauan jadwal, pencatatan laporan aktivitas, hingga pembuatan transaksi langsung di lokasi pelanggan",
      icon: <MdOutlineEventNote />,
      path: "/visit-management",
    },
    {
      step: "02",
      title: "Costumer List",
      desc: "Database pelanggan yang merangkum profil kontak, titik lokasi GPS, status keaktifan, dan riwayat transaksi tiap toko",
      icon: <MdOutlineEventNote />,
      path: "/costumer-list",
    },
    {
      step: "03",
      title: "Product List",
      desc: "Mengelola apa yang siap dijual, memastikan kasir bisa memproses transaksi dengan cepat dan stok selalu terpantau akurat",
      icon: <MdOutlineEventNote />,
      path: "/product-list",
    },
    {
      step: "04",
      title: "Transaction",
      desc: "Mendigitalisasi seluruh proses penjualan mulai dari pelacakan riwayat harian, hingga pengiriman struk instan ke pelanggan",
      icon: <MdOutlineEventNote />,
      path: "/transaction",
    },
    {
      step: "05",
      title: "Sales Report",
      desc: "Dashboard Analitik yang memudahkan manajemen untuk mengevaluasi omset, produktivitas tim, dan loyalitas pelanggan dengan cepat berbasis data",
      icon: <MdOutlineEventNote />,
      path: "/sales-report",
    },
  ];

  return (
    <motion.div
      // Wrapper utama untuk transisi antar halaman
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="relative flex min-h-screen w-full select-none flex-col items-center justify-center overflow-hidden bg-white px-6 font-sans"
    >
      {/* 1. Background Decor - Ditaruh di luar Card supaya tidak kena overflow-hidden */}
      <div className="lg:h-120 lg:w-120 absolute -right-10 -top-10 h-64 w-64 rounded-full bg-blue-400/20 blur-[80px]" />
      <div className="lg:h-100 lg:w-100 absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-sky-300/20 blur-[80px]" />

      {/* Container Menu Utama */}
      <motion.div
        // Animasi Slide Up yang lebih smooth
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier untuk efek 'out-expo'
          delay: 0.1,
        }}
        className="relative z-10 w-full max-w-sm overflow-hidden p-2 backdrop-blur-md lg:max-w-7xl xl:max-w-5xl"
      >
        {/* Header Section */}
        <div className="py-6 text-center lg:py-20 xl:py-10">
          <div className="mb-4 flex w-full justify-center lg:mb-16 xl:mb-10">
            <img
              src="/Teks Sellgo.png"
              alt="Teks Sellgo Logo"
              className="h-auto w-[60%] object-contain lg:w-[40%] xl:w-[35%]"
            />
          </div>
          <h1 className="text-primary py-2 text-2xl font-bold tracking-tight lg:text-8xl xl:text-4xl">
            Features
          </h1>
          <p className="mt-2 text-sm font-normal text-black lg:mt-6 lg:text-4xl xl:mt-2 xl:text-lg">
            Lihat apa saja yang dapat anda kelola di SellGo
          </p>
        </div>

        {/* List Features - Formasi 2 kolom, ganjil otomatis di tengah */}
        <div className="relative z-10 flex w-full flex-wrap justify-center gap-6 px-4 lg:px-0">
          {featuresItems.map((item, index) => (
            <motion.button
              key={index}
              whileHover={{
                y: -10,
                shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(item.path)}
              className="group relative flex w-full flex-col items-start rounded-[2rem] border border-slate-300 bg-white text-left shadow-xl transition-all hover:shadow-2xl lg:w-[calc(50%-20px)] lg:p-10 xl:w-[calc(50%-15px)] xl:p-6"
            >
              {/* Header Card: Icon & Step Number */}
              <div className="mb-6 flex w-full items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-2xl text-sky-500 lg:h-20 lg:w-20 lg:text-5xl xl:h-14 xl:w-14 xl:text-4xl">
                  {item.icon}
                </div>
                <span className="text-2xl font-black text-slate-300 lg:text-6xl xl:text-4xl">
                  {item.step}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-primary mb-3 text-xl font-black leading-tight lg:text-5xl xl:text-2xl">
                {item.title}
              </h3>
              <p className="text-sm font-semibold leading-relaxed text-slate-500 lg:text-3xl xl:text-lg">
                {item.desc}
              </p>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Navigation Bar Bawah */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mb-4 mt-10 flex items-center gap-6 rounded-full border border-slate-100 bg-white p-2 shadow-lg lg:mb-20 lg:mt-16 lg:gap-10 lg:p-6 xl:mb-10 xl:mt-4 xl:gap-6 xl:p-4"
      >
        <button
          onClick={() => navigate(-1)}
          className="hover:text-primary flex cursor-pointer flex-col items-center gap-1 px-1 text-slate-400 transition-colors lg:gap-4 lg:px-8 xl:gap-2 xl:px-2"
        >
          <FaArrowLeft className="text-lg lg:text-5xl xl:text-xl" />
          <span className="text-[10px] font-bold uppercase lg:text-2xl xl:text-[12px]">
            Back
          </span>
        </button>

        <button
          onClick={() => navigate("/")}
          className="bg-primary/10 text-primary hover:bg-primary flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:text-white lg:h-24 lg:w-24 xl:h-14 xl:w-14"
        >
          <FaHome className="text-xl lg:text-6xl xl:text-2xl" />
        </button>

        <button className="flex cursor-not-allowed flex-col items-center gap-1 px-1 text-slate-400 transition-colors lg:gap-4 lg:px-8 xl:gap-2 xl:px-2">
          <FaArrowRight className="text-lg lg:text-5xl xl:text-xl" />
          <span className="text-[10px] font-bold uppercase lg:text-2xl xl:text-[12px]">
            Next
          </span>
        </button>
      </motion.div>
    </motion.div>
  );
};
