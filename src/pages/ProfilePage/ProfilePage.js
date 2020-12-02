import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SkillPill from '../../components/SkillPill/SkillPill'
import s from './ProfilePage.module.css'

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
    <div className={s.ProfilePage} data-testid="ProfilePage">
      {isLoading && <p>Chargement…</p>}
      {freelance && (
        <main>
          <header className={s.header}>
            <img
              src={freelance.picture}
              alt={`${freelance.name}, ${freelance.title}`}
              className={s.picture}
            />
            <div className={s.headerDetails}>
              <h1 className={s.name}>{freelance.name}</h1>
              <h2 className={s.title}>{freelance.title}</h2>
              {freelance.available && <p>Disponible</p>}
            </div>
          </header>
          <div className={s.body}>
            <section className={s.section}>
              <h2 className={s.sectionTitle}>Compétences ({freelance.skills.length})</h2>
              {freelance.skills.length > 0 && (
                <ul className={s.skillList}>
                  {freelance.skills.map((skill) => (
                    <li key={skill.id} className={s.skillItem} data-testid={`skill-${skill.id}`}>
                      <SkillPill>{skill.name}</SkillPill>
                      {' '}
                      {skill.recommendations}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </div>
        </main>
      )}
    </div>
  )
}

export default ProfilePage
