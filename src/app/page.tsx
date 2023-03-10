import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Navbar,Contact,Experience,Work,About,Hero} from '@/components/componet'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className='text-4xl'>Hello page</h1>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact/>
    </main>
  )
}
