import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
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
            <meta name="description" content="A little something about me"/>
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose!" className='mb-16'/>
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start text-justify'>
                        <h2 className='mb-4 text-lg- font-bold uppercase text-dark/75'>Some things about me...</h2>
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
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'></div>
                        <Image src={profilePic} alt="profile picture" className='w-full h-auto rounded-2xl'/>
                    </div>
                    <div className='col-span-2 flex flex-col items-end justify-between'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={3}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>years of experience</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={5}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>successful projects delivered</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={1000}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>hours dedicated to continuous learning</h2>
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