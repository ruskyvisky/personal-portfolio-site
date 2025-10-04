"use client";
import React from "react";
import { RiReactjsFill } from "react-icons/ri";
import {
  SiAmazonwebservices,
  SiApachekafka,
  SiDocker,
  SiGrafana,
  SiMysql,
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
  SiMongodb,
  SiKubernetes,
  SiExpress,
} from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { motion } from "framer-motion";
import { DiRedis } from "react-icons/di";
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
  const t = useTranslations("home-page");

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
        {/* React.js */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <RiReactjsFill className="text-7xl text-cyan-400" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300">
            React.js
          </p>
        </motion.div>

        {/* Next.js */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <SiNextdotjs className="text-7xl text-white" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300">
            Next.js
          </p>
        </motion.div>

        {/* Tailwind CSS */}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <SiTailwindcss className="text-7xl text-blue-500" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300">
            Tailwind CSS
          </p>
        </motion.div>

        {/* Express.js */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <SiExpress className="text-7xl text-gray-300" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300">
            Express.js
          </p>
        </motion.div>

        {/* Grafana */}
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <SiGrafana className="text-7xl text-orange-600" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300">
            Grafana
          </p>
        </motion.div>

        {/* Apache Kafka */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <SiApachekafka className="text-7xl text-white" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300">
            Apache Kafka
          </p>
        </motion.div>

        {/* Amazon S3 */}
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <SiAmazonwebservices className="text-7xl text-orange-700" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300">
            Amazon Web Services
          </p>
        </motion.div>

        {/* MongoDB */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <SiMongodb className="text-7xl text-green-600" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300">
            MongoDB
          </p>
        </motion.div>

        {/* Redis */}
        <motion.div
          variants={iconVariants(6.5)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <DiRedis className="text-7xl text-red-600" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300">
            Redis
          </p>
        </motion.div>

        {/* PostgreSQL */}
        <motion.div
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <SiPostgresql className="text-7xl text-blue-500" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300">
            PostgreSQL
          </p>
        </motion.div>

        {/* Docker */}
        <motion.div
          variants={iconVariants(7.5)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <SiDocker className="text-7xl text-blue-600" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300">
            Docker
          </p>
        </motion.div>

        {/* Kubernetes */}
        <motion.div
          variants={iconVariants(8)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <SiKubernetes className="text-7xl text-sky-500" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300">
            Kubernetes
          </p>
        </motion.div>

        {/* MySQL */}
        <motion.div
          variants={iconVariants(8.5)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <SiMysql className="text-7xl text-blue-800" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300">
            MySQL
          </p>
        </motion.div>

        {/* Prisma */}
        <motion.div
          variants={iconVariants(9)}
          initial="initial"
          animate="animate"
          className="flex w-48 flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <SiPrisma className="text-7xl text-green-400" />
          <p className="mt-4 text-center text-lg font-semibold text-neutral-300">
            Prisma.js
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
