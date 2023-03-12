import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Navbar,Contact,Experience,Work,About,Hero, SocialLinks} from '@/components/componet'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex justify-between items-center min-h-screen px-12 flex-col'>
      {/* <h1 className='text-4xl'>Welcome, I&apos;m Ekene</h1> */}
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Contact />
      <SocialLinks/>
    </main>
  )
}
