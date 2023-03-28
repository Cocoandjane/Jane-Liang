import Head from 'next/head'
import GoogleAnalytics from './GoogleAnalytics'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Jane Liang - Full-stack Web Developer</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" type="image/x-ion" href="/logo2.svg" className='rounded-lg' />
      </Head>
      <GoogleAnalytics />
    </div>
  )
}

export default IndexPage