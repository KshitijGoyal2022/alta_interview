import { Inter } from 'next/font/google'
import FoodCard from '@/components/FoodCard'

const inter = Inter({ subsets: ['latin'] })

import React from 'react'

const Home = () => {
  return (
    <main>
        <FoodCard />

    </main>
  )
}

export default Home