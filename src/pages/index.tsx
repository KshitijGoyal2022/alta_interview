import { Inter } from 'next/font/google'

import Header from '@/components/Header'
import MiddleBar from '@/components/MiddleBar'
import FoodSection from '@/components/FoodSection'
import FoodCard from '@/components/FoodCard'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <main>
        <Header />
        <MiddleBar />
        <FoodSection />
        <FoodCard />

    </main>
  )
}

export default Home