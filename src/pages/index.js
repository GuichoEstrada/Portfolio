import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/profile-pic.png'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import { LinkArrow, MailIcon } from '@/components/Icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Luis Carlo Estrada | Home Page</title>
        <meta name="description" content='Welcome to the portfolio of Luis Carlo Estrada, where the worlds of software development and culinary arts converge. Discover innovative React.js applications, creative coding projects, and delectable recipes that showcase a unique blend of technical skill and culinary passion.'></meta>
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light 2xl'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="home image" className='w-full h-auto lg:hidden md:inline-block md:w-full' priority sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-justify'>
              <AnimatedText text="Dishing Out Digital Delicacies" className='!text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>Step into my world, where I delve into the art of code and cuisine. 
                From crafting innovative software applications to creating culinary delights, I blend my passion for software development with the finesse of a chef. 
                Explore a fusion of flavors and functionalities in my latest projects, highlighting my expertise in React.js and beyond.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link 
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:text-dark
                dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base" 
                href="/Resume.pdf" target={"_blank"}
                download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link 
                className="ml-4 flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:text-dark
                dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base" 
                href="mailto:lcrestrada.dev@gmail.com" target={"_blank"}
                >
                  Contact
                  <MailIcon className={"w-6 ml-2"}/>
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
