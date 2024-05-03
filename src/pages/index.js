import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png'
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
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className='text-left'/>
              <p className='my-4 text-base font-medium'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
              Explore my latest projects and articles, showcasing my expertise in React.js and web development.
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
