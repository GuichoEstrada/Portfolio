import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/profile-pic.png'
import AnimatedText from '@/components/AnimatedText'
import { LinkArrow, MailIcon } from '@/components/Icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Luis Carlo Estrada</title>
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={profilePic} alt="home image" className='w-full h-auto'/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Dishing Out Digital Delicacies: Crafting Web Solutions with a Chef's Precision" className='text-left'/>
              <p className='my-4 text-base font-medium'>Step into my world, where I delve into the art of code and cuisine. 
                From crafting innovative software applications to creating culinary delights, I blend my passion for software development with the finesse of a chef. 
                Explore a fusion of flavors and functionalities in my latest projects, highlighting my expertise in React.js and beyond.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link 
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark" 
                href="/Resume.pdf" target={"_blank"}
                download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link 
                className="ml-4 flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark" 
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
