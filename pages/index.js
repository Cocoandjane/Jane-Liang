import { Head, Nav, CTA, Header, About, Contact, Services, Projects, Footer} from '../components'


export default function Home({projects}) {

  return (
    <>
    <Nav/>
    <CTA/>
    <div style={{marginTop:"3rem"}}></div>
    <Head/>
    <Header/>
    <About/>
    <Projects projects={projects}/>
    <Services/>
    <Contact/>
    <Footer/>
    </>
  )
}

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const projects = JSON.parse(jsonData).projects;
  return {
    props: {
      projects
    }
  }
}
