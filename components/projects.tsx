"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import { Project } from '../interfaces/projectInterface'


const Projects = () => {
  const t = useTranslations('home-page');
  const projects: Project[] = t.raw("projects");


  return (
    <div className='border-b border-neutral-900 pb-4'>

        <motion.h2  
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>{t("projects-title")}</motion.h2>

        <div>
            {projects.map((project, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:1}}
                    className='w-full lg:w-1/4'>
                        <Image src={project.image} width={300} height={300} alt='Project' className='mb-6 rounded' />
                    </motion.div>
                    <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:100}}
                    transition={{duration:1}}
                    className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='font-semibold mb-2'>{project.title}</h6>
                        <p className='mb-4 text-neutral-400'>{project.description}</p>
                        <div className='flex flex-wrap gap-'>
                          {project.technologies.map((tech, index) => (
                              <span key={index} className='mr-2 mt-2 break-words rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'>
                                  {tech}
                              </span>
                          ))}
                        </div>
                        <a 
                          href={"project.githubLink"} 
                          target='_blank' 
                          rel='noopener noreferrer' 
                          className='mt-4 inline-flex items-center rounded border border-purple-600 bg-neutral-900 px-4 py-2 text-sm font-medium text-purple-600 hover:bg-purple-600 hover:text-white'
                        >
                          <FaGithub className='mr-2' /> View on GitHub
                        </a>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects
