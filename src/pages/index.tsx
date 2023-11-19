import { Helmet } from 'react-helmet';
import Header from '@/components/Header'
import MiddleBar from '@/components/MiddleBar'
import FoodSection from '@/components/FoodSection'

const Home = () => {
  return (
    <main>
      
        <Helmet>
          <title>Oltre 20.000 ricette veloci, semplici e gustose | Al.ta Cucina</title>
          <link rel="icon" href="/favicon-96x96.png" />
        </Helmet>

        <Header />
        <MiddleBar />
        <FoodSection />
    </main>
  )
}

export default Home