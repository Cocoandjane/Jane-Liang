import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { RiExternalLinkLine } from 'react-icons/ri'
import { TbListDetails } from 'react-icons/tb'
import Image from 'next/image'
export default function Projects({ projects }) {

  return (
    <section id="projects" >
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {
          projects.map((project) => {
            return (<article className="portfolio__item" key={project.id}>
              <div className="portfolio__item-image">
                <Image
                  width={500}
                  height={500}
                  alt=""
                  className='project-image'
                  src={project.image} />
                <h3>{project.title}</h3>
                <div className="portfolio__item-cta">
                  <a href={project.github}  target="_blank" ><AiOutlineGithub /></a>
                  <a href={project.live} target="_blank" ><RiExternalLinkLine /></a>
                  <a href={`/projects/${project.id}`}><TbListDetails /></a>
                  {/* <Link
                    href={{
                      pathname: '/projects/[projectId]]',
                      query: { projectId: project.id },
                    }}
                  >
                   < ><TbListDetails /></>
                  </Link> */}
                </div>
              </div>
            </article>)
          })
        }
      </div>
    </section>
  )
}
