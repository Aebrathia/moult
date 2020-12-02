import { useState, useEffect } from 'react'
import cx from 'classnames'
import { useParams } from 'react-router-dom'
import s from './ProfilePage.module.css'
import axios from 'axios'

const ProfilePage = () => {
  const { id } = useParams()
  const [freelance, setFreelance] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get(`/api/v1/freelances/${id}`).then((res) => {
      setFreelance(res.data)
      setIsLoading(false)
    })
  }, [id])

  return (
    <div data-testid="ProfilePage">
      {isLoading && <p>Chargement…</p>}
      {freelance && (
        <main>
          <img src={freelance.picture} alt={`${freelance.name}, ${freelance.title}`} />
          <h1>{freelance.name}</h1>
          <h2>{freelance.title}</h2>
          {freelance.available && <p>Disponible</p>}
          <section>
            <h2>Compétences ({freelance.skills.length})</h2>
            {freelance.skills.length > 0 && (
              <ul className={s.skillList}>
                {freelance.skills.map((skill) => (
                  <li key={skill.id} className={cx(s.pill, s.skill)}>{skill.name}</li>)
                )}
              </ul>
            )}
          </section>
        </main>
      )}
    </div>
  )
}

export default ProfilePage
