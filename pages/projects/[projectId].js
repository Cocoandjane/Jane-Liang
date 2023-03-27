import React from 'react'
import {Nav,Head, SingleProject, Footer} from '../../components'

export default function Project( {project}) {

  return (
    <div>
      <Head/>
      <div className='id_header'>
      <Nav/>
        <SingleProject project={project}/>
      </div>
      <Footer/>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { projectId: '1' } },
      { params: { projectId: '2' } },
      { params: { projectId: '3' } },
      { params: { projectId: '4' } },
      { params: { projectId: '5' } },
      { params: { projectId: '6' } },
      { params: { projectId: '7' } },
      { params: { projectId: '8' } },
    ],
    fallback: false
  }
}
// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps({ params: { projectId }}) {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  const project = objectData.projects.filter((project) => project.id == projectId)[0];

  return {
    props: {
      project
    }
  }
}
