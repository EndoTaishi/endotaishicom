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
        <div className="text-center mb-8">
          <Image src="/../public/assets/endotaishi.png" width={200} height={200}/>
        </div>
      </Container>
    </Layout>
  )
}

export default Home
