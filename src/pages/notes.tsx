import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'
import { CMS_NAME } from '../../lib/constants'

const Note: NextPage = () => {
    return (
      <Layout>
        <Head>
          <title>{ CMS_NAME }</title>
          <meta name="description" content="endotaishi.com" />
          <link rel="icon" href="/assets/endotaishi.png" />
        </Head>
        <Container>
            <div>
                <p>Coming Soon...</p>
            </div>
        </Container>
      </Layout>
    )
  }
  
  export default Note
  