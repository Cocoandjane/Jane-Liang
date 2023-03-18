import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'

export default function Services() {

  const frontEnd = ["HTML", "CSS", "Express.js", "JavaScript", "React.js", "Bootstrap", "Tailwind", "DOM", "AJAX", "Remix.js", "Next.js", "JSON", "Axios"]
  const backEnd = ["Lamda", "Node.js", "MySQL", "CockroachDB", "MongoDB", "PostgreSQL", "Firebase", "C#", "PHP", "ASP.NET", "Pusher.js", "SignalR", "SwaggerAPI", "Prisma", "Socket.io", "Cognito", "Nextauth"]

  return (
    <section id="skills">
      <h5>Technical stack</h5>
      <h2>My Skills</h2>
      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>

          <div className='experience__content'>
            {frontEnd.map((item, index) => {
              return (
                <article className='experience__details' key={index}>
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{item}</h4>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        {/* ========================backend here======================= */}

        <div className="experience__backend">

          <h3>Backend Development</h3>
          <div className='experience__content'>
            {backEnd.map((item, index) => {
              return (
                <article className='experience__details' key={index}>
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{item}</h4>
                  </div>
                </article>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
