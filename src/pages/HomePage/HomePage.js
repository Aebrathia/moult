import { useState, useEffect } from 'react'
import axios from 'axios';
import FreelanceCard from '../../components/FreelanceCard/FreelanceCard'
import s from './HomePage.module.css'

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [freelances, setFreelances] = useState([])

  useEffect(() => {
    axios.get('/api/v1/freelances').then((res) => {
      setFreelances(res.data)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className={s.HomePage}>
      <main>
        <h1>Les meilleurs freelances qui soient.</h1>
        {isLoading && <p>Chargement…</p>}
        <div className={s.freelances}>
          {freelances.map((freelance) => (
            <FreelanceCard
              key={freelance.id}
              freelance={freelance}
              className={s.freelance}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default HomePage
