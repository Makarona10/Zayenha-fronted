"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/26756094/pexels-photo-26756094.jpeg",
    title: "تكلفة بسيطة وتصاميم رائعة!",
    url: "/",
    bg: "bg-gradient-to-l from-[#c0e7f0] to-[#FFFFFF]",
    description: "إلحق عروض الصيف من زينها",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/3246665/pexels-photo-3246665.png",
    title: "لوحات فنية لجدران بيتك",
    url: "/",
    bg: "bg-gradient-to-r from-[#decea4] to-[#e0e0e0]",
    description: "زين بيتك بأجمل اللوحات",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/850360/pexels-photo-850360.jpeg",
    title: "زينة مكتبية تضفي لمسة جمالية",
    url: "/",
    bg: "bg-gradient-to-r from-[#f0f0f0] to-[#e0e0e0]",
    description: "أضف لمسة من الجمال إلى مكتبك",
  },
];

const descriptionVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const titleVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all duration-1000 ease-in-out"
        style={{ transform: `translateX(${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
          >
            {/* text container */}
            <div className="h-1/2 xl:h-full xl:w-1/2 flex items-center justify-center flex-col gap-12 px-4 2xl:px-16 text-center">
              <motion.h2
                initial="hidden"
                animate="visible"
                variants={descriptionVariants}
                transition={{ duration: 1, delay: 0.1 }}
                className="text-xl lg:text-3xl 2xl:text-5xl"
              >
                {slide.description}
              </motion.h2>
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={titleVariants}
                transition={{ duration: 1, delay: 0.1 }}
                className="font-semibold text-gray-800 text-5xl lg:text-6xl 2xl:text-7xl"
              >
                {slide.title}
              </motion.h1>
              <Link
                href={slide.url}
                className="md:text-lg text-sm hover:text-blue-800 transition duration-300"
              >
                <motion.button
                  initial="hidden"
                  animate="visible"
                  variants={buttonVariants}
                  transition={{ duration: 1, delay: 0.1 }}
                  className="px-4 py-3 text-white bg-black rounded-md"
                >
                  استعرض الآن
                </motion.button>
              </Link>
            </div>
            {/* image container */}
            <div className="relative xl:w-1/2 h-1/2 xl:h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
