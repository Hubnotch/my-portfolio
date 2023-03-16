import Image from "next/image"
import { Inter } from "next/font/google"
import { Navbar,Contact,Experience,Work,About,Hero, SocialLinks, Footer} from "@/components/componet"


const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className="flex justify-between items-center min-h-screen  flex-col">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Contact />
      <SocialLinks />
      <Footer/>
    </main>
  )
}
