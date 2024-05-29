import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.jpeg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, {once:true});

    useEffect(() => {
        if(isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value ) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>Luis Carlo Estrada | About Page</title>
            <meta name="description" content="Discover the unique blend of software development and culinary creativity by Luis Carlo Estrada. From innovative React.js applications to delectable dishes, explore projects that combine technical expertise with a chef's finesse."/>
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Crafting with Finesse" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='col-span-3 xl:col-span-4 flex flex-col items-start justify-start text-justify md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg- font-bold uppercase text-dark/75 dark:text-light/75'>Some things about me...</h2>
                        <p className='font-medium'>
                            Hey, I&#39;m Luis Estrada, a passionate software and web developer with a knack for crafting code and cooking up 
                            culinary delights. With 3 years of experience in the digital world, I thrive on turning ideas into reality, 
                            whether it&#39;s through building applications or experimenting with new recipes.
                        </p>
                        <p className='font-medium my-4'>                            
                            I believe in the power of software and web development to solve problems and craft experiences that people truly 
                            enjoy using. It&#39;s not just about making things visually appealing; it&#39;s about creating solutions that resonate with users 
                            and make their lives easier. Whether it&#39;s coding applications or designing websites, I&#39;m passionate about leveraging technology 
                            to create meaningful experiences.
                        </p>
                        <p className='font-medium my-4'>
                            Combining my love for coding and cooking, I bring a fresh perspective to my work. Whether I&#39;m coding a new application or cooking 
                            up a delicious meal, I always strive for excellence and aim to create something that leaves a lasting impression.
                        </p>
                        <p className='font-medium my-4'>
                            Let&#39;s collaborate on your next project, whether it&#39;s a cutting-edge application or a mouthwatering dish. Together, we can create something truly special.
                        </p>
                    </div>

                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'></div>
                        <Image src={profilePic} alt="profile picture" className='w-full h-auto rounded-2xl' priority sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"/>
                    </div>

                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={3}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={5}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>successful projects delivered</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={1000}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>hours dedicated to continuous learning</h2>
                        </div>
                    </div>

                </div>
                <Skills />
                <Experience />
                <Education />
            </Layout>
        </main>
    </>
  )
}

export default about