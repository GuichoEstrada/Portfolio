import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref}/>
        <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration: 0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>
                {position}&nbsp;
                <a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize'>
                    @{company}
                </a>
            </h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full mt-2 text-justify'>{work}</p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light'>
            </motion.div>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                    position="Intern"
                    company="Fable"
                    companyLink="https://makeitfable.com/"
                    time="January 2024 - April 2024"
                    address="Toronto, ON"
                    work={
                        <>
                            - Our software development internship project is dedicated to enhancing accessibility by addressing the direct feedback from Fable&#39;s diverse user base.<br />
                            - We&#39;ve built a widget that submits Fable requests via URLs or slugs, resulting in informative summary cards within Figma. In these cards are feedbacks from users.
                        </>
                    }
                />
                <Details 
                    position="Software Developer"
                    company="Sparksoft Solutions, Inc."
                    companyLink="https://sparksoft.com.ph/"
                    time="November 2019 - June 2022"
                    address="Manila, Philippines"
                    work={
                        <>
                            - Spearheaded the development of Coca-Cola PH and E-TESDA&#39;s OFW RISE and iSTAR programs, offering comprehensive entrepreneurship courses for OFWs and MSMEs.<br />
                            - Developed interactive learning components, including games, lectures, videos, and modules using HTML/CSS/JS.<br />
                            - Developed and maintained web applications using a tech stack including JavaScript, React, and Node.js, delivering high-quality software solutions to meet client requirements and project deadlines.
                        </>
                    }
                />
                <Details 
                    position="Creative Developer"
                    company="WideOut Workforces Inc."
                    companyLink="https://www.aqa.work/"
                    time="May 2019 - November  2019"
                    address="Makati, Philippines"
                    work={
                        <>
                            - Translated client requirements, graphic designs, and specifications into functional advertisements, utilizing core technologies aligned with client preferences.<br />
                            - Designed and crafted static and dynamic Banner Ads, employing HTML5, CSS3, and JavaScript to enhance user engagement and interactivity.<br />
                            - Conducted comprehensive cross-browser and multi-resolution testing to ensure optimal functionality and promptly resolved any issues identified.<br />
                            - Transformed raw client assets into captivating and interactive rich media ad executions, enhancing brand visibility and audience engagement.<br />
                            - Determined the digital optimization and presentation strategy for images and multimedia content on designated platforms.
                        </>
                    }
                />
            </ul>
            
        </div>
    </div>
  )
}

export default Experience