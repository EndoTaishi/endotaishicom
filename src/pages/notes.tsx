import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
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
            <div className='text-sm mb-4 leading-none'>
                <Link legacyBehavior href='/notes/note'>
                    <a className="leading-none">思考法について</a>
                </Link>
            </div>
            <div className='text-sm mb-4 leading-none'>
                <Link legacyBehavior href='/notes/note2'>
                    <a className="leading-none">信頼性</a>
                </Link>
            </div>

        </Container>
      </Layout>
    )
  }
  
  export default Note
  
