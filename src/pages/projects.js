import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import Project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import { GithubIcon } from '@/components/Icons'

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid 
        border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 relative'>
            <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] dark:bg-light bg-dark rounded-br-3xl'></div>
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto' priority sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"/>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'><GithubIcon/></Link>
                    <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light 
                    dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light 
                    hover:border-dark hover:bg-light hover:text-dark border border-solid p-2 px-6 text-lg font-semibold'>
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
         bg-light dark:bg-dark dark:border-light shadow-2xl p-6 relative'>
            <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl'></div>
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto' priority sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"/>
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target="_blank" className='text-lg font-semibold underline underline-offset-4'>
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className='w-8'>{" "}<GithubIcon/>{" "}</Link>
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
            <meta name="description" content="my projects"/>
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Imagination Trumps Knowledge" className='mb-16' />
                <div className='grid grid-cols-12 gap-24 gap-y-32'>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            type="Featured Project"
                            title="Crypto Screener Application"
                            link="/"
                            github="/"
                            img={Project1}
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project 
                            type="Project"
                            title="Crypto Screener Application"
                            link="/"
                            github="/"
                            img={Project1}
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project 
                            type="Project"
                            title="Crypto Screener Application"
                            link="/"
                            github="/"
                            img={Project1}
                        />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects