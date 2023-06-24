import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'
import { CMS_NAME } from '../../lib/constants'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{ CMS_NAME }</title>
        <meta name="description" content="endotaishi.com" />
        <link rel="icon" href="/assets/endotaishi.png" />
      </Head>
      <Container>
        <Image 
        className="text-center mb-8"
        src="/../public/assets/endotaishi.png" 
        alt="endotaishi" 
        width={200} 
        height={200} />
      </Container>
    </Layout>
  )
}

export default Home
