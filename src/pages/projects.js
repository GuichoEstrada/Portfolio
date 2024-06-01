import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import Project1 from '../../public/images/projects/featured-project-1.png'
import Project2 from '../../public/images/projects/featured-project-2.png'
import Project3 from '../../public/images/projects/project-3.png'
import Project4 from '../../public/images/projects/project-4.png'
import Project5 from '../../public/images/projects/featured-project-3.png'
import TransitionEffect from '@/components/TransitionEffect'
import { GithubIcon } from '@/components/Icons'

const FeaturedProject = ({type, title, summary, img, link, github, credentials}) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid 
        border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 relative lg:flex-col lg:p-8
        xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] dark:bg-light bg-dark rounded-br-3xl
            xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'></div>
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <Image src={img} alt={title} className='w-full h-auto' priority sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"/>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{credentials}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10 hidden'><GithubIcon/></Link>
                    <Link href={link} target="_blank" className='rounded-lg bg-dark text-light 
                    dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light 
                    hover:border-dark hover:bg-light hover:text-dark border border-solid p-2 px-6 text-lg font-semibold
                    sm:px-4 sm:text-base'>
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({type, title, img, link, github}) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark
         bg-light dark:bg-dark dark:border-light shadow-2xl p-6 relative xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl
            md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'></div>
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto' priority sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"/>
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl '>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target="_blank" className='text-lg font-semibold underline underline-offset-4 md:text-base'>
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className='w-8 md:w-6'>{" "}<GithubIcon/>{" "}</Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>Luis Carlo Estrada | Projects Page</title>
            <meta name="description" content="Explore a diverse range of projects by Luis Carlo Estrada, showcasing expertise in React.js and software development alongside creative culinary ventures. Discover innovative applications and delightful recipes that highlight a unique fusion of technology and cuisine."/>
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="What I've Cooked Up" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                <div className='col-span-12'>
                        <FeaturedProject 
                            type="Featured Project"
                            title="iStar Program"
                            link="https://moodle1.sparksoft-demo.com/moodle/"
                            github="/"
                            img={Project1}
                            summary="The iSTAR program uses a Learning Management System that builds on the success of TESDA's long-running Sari-Sari Store Training and Access to Resources (STAR) Program, which aims to train female micro entrepreneurs and provide them with financial resources to help them grow their businesses. It includes interactive learning components, including games, lectures, videos, and modules using HTML/CSS/JS."
                            credentials="Username: cokeaccess-1 | Password: Cokeaccess-1"
                        />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            type="Featured Project"
                            title="OFW Rise"
                            link="https://moodle1.sparksoft-demo.com/moodle/"
                            github="/"
                            img={Project2}
                            summary="The OFW-RISE or Overseas Filipino Workers Re-Integration through Skills & Entrepreneurship Program provides returning OFWs with an online course that they can attend through the TESDA Online Program (TOP), allowing them to translate their business ideas into business plans. It includes interactive learning components, including games, lectures, videos, and modules using HTML/CSS/JS and is also run through a Learning Management System."
                            credentials="Username: cokeaccess-1 | Password: Cokeaccess-1"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                            type="Project"
                            title="CRWN Clothing"
                            link="https://crwn-clothing-ruddy-ten.vercel.app/"
                            github="https://github.com/GuichoEstrada/crwn-clothing"
                            img={Project3}
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                            type="Project"
                            title="Fable OAuth Integrated Figma Widget"
                            link="https://prezi.com/p/bicfzliuuqqn/?present=1"
                            github="/"
                            img={Project4}
                        />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            type="Featured Project"
                            title="3D Portfolio"
                            link="https://3d-portfolio-five-sepia.vercel.app/"
                            github="https://github.com/GuichoEstrada/3d-portfolio"
                            img={Project5}
                            summary="My own personal, mobile-responsive, 3D portfolio built with React, Tailwind CSS, and Three.js. Includes interactive parts and music."
                        />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects