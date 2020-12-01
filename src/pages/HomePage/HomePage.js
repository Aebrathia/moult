import React from 'react'
import FreelanceCard from '../../components/FreelanceCard/FreelanceCard'
import s from './HomePage.module.css'
import { freelances } from '../../fixtures'

const HomePage = () => {
  return (
    <div className={s.HomePage}>
      <main>
        <h1>Les meilleurs freelances qui soient.</h1>
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
