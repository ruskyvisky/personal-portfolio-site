"use client";
import React from "react";
import { RiReactjsFill } from "react-icons/ri";
import { SiAmazons3, SiApachekafka,  SiDocker, SiGrafana, SiMysql, SiNextdotjs, SiPrisma,  SiTailwindcss } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { DiRedis } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { useTranslations } from "next-intl";
const iconVariants = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
});

const Technologies = () => {
  
  const t = useTranslations("home-page")
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        {t("techs-title")}
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <RiReactjsFill className="text-7xl text-cyan-400" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300 break-words">
            React.js
          </p>
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <SiNextdotjs className="text-7xl text-white" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300 break-words">
            Next.js
          </p>
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <SiTailwindcss className="text-7xl text-blue-500" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300 break-words">
Tailwind CSS          </p>
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <SiSpringboot className="text-7xl text-green-400" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300 break-words">
            Spring Boot
          </p>
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <SiGrafana className="text-7xl text-orange-600" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300 break-words">
            Grafana
          </p>
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <SiApachekafka className="text-7xl text-white" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300 break-words">
            Apache Kafka 
          </p>
        </motion.div>

        
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <SiAmazons3 className="text-7xl text-orange-700" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300 break-words">
            Amazon S3 
          </p>
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <SiMongodb className="text-7xl text-green-600" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300 break-words">
            MongoDB
          </p>
        </motion.div>
        <motion.div
          variants={iconVariants(6.5)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <DiRedis className="text-7xl text-red-600" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300 break-words">
            Redis
          </p>
        </motion.div>
        <motion.div
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <SiPostgresql className="text-7xl text-blue-500" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300 break-words">
            PostgreSQL
          </p>
        </motion.div>

        <motion.div
          variants={iconVariants(7.5)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <SiDocker className="text-7xl text-blue-600" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300 break-words">
            Docker
          </p>
        </motion.div>

        
        <motion.div
          variants={iconVariants(8)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <SiMysql className="text-7xl text-blue-800" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300 break-words">
            MySQL
          </p>
        </motion.div>

        
        <motion.div
          variants={iconVariants(8.5)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <SiPrisma className="text-7xl text-green-400" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300 break-words">
            Prisma.js
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
