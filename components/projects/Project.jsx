import React from 'react'
import Image from 'next/image'
import { AiOutlineGithub } from 'react-icons/ai'
import { RiExternalLinkLine } from 'react-icons/ri'
import Link from 'next/link'

export default function Project({ project }) {

    return (
        <>
        <section id="project-detail" className="my-project">
            <h2 > {project.title}</h2>
            
            <article className="portfolio__item_id">
                <div className="portfolio__item-image_id">
                    <Image
                        width={200}
                        height={200}
                        alt=""
                        className='project-image'
                        src={project.image} />
                    <div className="portfolio__item-cta">
                        <Link href={project.github} ><AiOutlineGithub /></Link>
                        <Link href={project.live} target="_blank"><RiExternalLinkLine /></Link>
                    </div>
                </div>
            </article>
       
         
            <div className='details_id_page'>
                <h4>Stack :</h4>
                <div className='stack_list'>
                    {project.stack.map((item, index) => {
                        return (
                            <div className="project__stack-item" key={index}>
                                <p>{item}</p>
                            </div>
                        )
                    })}
                </div>
                <h4>Tools:</h4>
                <div className='stack_list'>
                    {project.tools.map((item, index) => {
                        return (
                            <div className="project__stack-item" key={index}>
                                <p>{item}</p>
                            </div>
                        )
                    })}
                </div>

                <h4>Detail :</h4>
                <p>{project.description}</p>
            </div>

            <div className='code_website'>
                <Link href={project.github} target="_blank" className="project__link">
                    See Code: <AiOutlineGithub />
                </Link>
                <Link href={project.live} target="_blank"  className="project__link">
                    See Website: <RiExternalLinkLine />
                </Link>
            </div>
          
        </section>
        </>
    )
}
