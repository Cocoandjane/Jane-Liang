import Head from 'next/head'

function IndexPage() {
  return (
    <div>
      <Head>
      <title>Jane Liang - Full-stack Web Developer</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" type="image/x-ion" href="/favicon1.svg" className='rounded-lg'/>
      </Head>
    </div>
  )
}

export default IndexPage