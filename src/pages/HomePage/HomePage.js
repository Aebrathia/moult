import React from 'react'
import './HomePage.css'

const freelances = [
  {
    id: 1,
    name: 'Antoine Ribeiro',
    title: 'Développeur Fullstack JavaScript',
    picture: 'https://cloudinary-a.akamaihd.net/hopwork/image/upload/h_360,w_360,c_thumb,g_face,z_0.4,dpr_2.0,f_auto/hityiw8t9n4ygmbovvbv.jpg',
    available: true,
    skills: [
      'React',
      'Node.js',
      'JavaScript',
    ]
  },
  {
    id: 2,
    name: 'Stanislas Vega',
    title: 'Développeur Frontend React',
    picture: 'https://media-exp1.licdn.com/dms/image/C5603AQFWeSH-pN0bGA/profile-displayphoto-shrink_400_400/0/1578294360332?e=1612396800&v=beta&t=8cC2qwqi7CBiA3ys0lP1FqYl5Tb4toNbC5lytz7uzWo',
    available: false,
    skills: [
      'Next.js',
      'HTML',
      'CSS',
    ]
  },
]

const HomePage = () => {
  return (
    <div className="HomePage">
      <main>
        <h1>Les meilleurs freelances qui soient.</h1>
        <div className="HomePage__freelances">
          {freelances.map((f) => (
            <article className="HomePage__freelance" key={f.id}>
              <header>
                <img
                  className="HomePage__freelance-picture"
                  src={f.picture}
                  alt={`${f.name}, ${f.title}`}
                />
                <h2>{f.name}</h2>
                <p>{f.title}</p>
              </header>
              {f.available && <p>Disponible</p>}
              <ul>
                {f.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}

export default HomePage
