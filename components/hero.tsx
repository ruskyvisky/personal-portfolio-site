"use client"
import React from "react";
import { HERO_CONTENT } from "../constants";
import {motion } from 'framer-motion'
import { useTranslations } from "next-intl";

const container = (delay:number) =>({
  hidden:{x:-100 , opacity:0},
  visible:{x:0,opacity:1, transition:{duration:0.5 , delay:delay}}
})

const Hero = () => {

  const t = useTranslations("home-page")
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-3,5 ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-center">
            <motion.h1  
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Numan Dirican
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500  to-purple-500 bg-clip-text text-4xl tracking tight text-transparent">
             {t("developer")}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter">
                {t("hero-content")} 
                {/* TODO: bURASI DEĞİŞCEK */}
            </motion.p>
        </div>
<div className="px-20 py-3">
        <button className="bg-gradient-to-r from-pink-400 via-indigo-600 to-purple-600 text-white text-2xl font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500">
  {t("button-text")}
</button>     
</div>
   </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex  justify-center">
                <motion.img initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:1,delay:1.2}}
                src="/assets/myGithub.jpg" width={500} height={500} alt="Profile"  className="rounded-full border-8"/>
            </div>
            </div> 
      </div>
    </div>
  );
};

export default Hero;
