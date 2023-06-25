import type { NextPage } from 'next'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import Container from '../components/container'
import markdownStyles from '../components/markdown-styles.module.css'
import { CMS_NAME } from '../../lib/constants'

const markdownString = `
# TypeScript + Next.js + Tailwind CSS + Markdown
## ここにブログ記事を表示したい
### やり方を教えてください

test test test
`;

const Note: NextPage = () => {
    return (
      <Layout>
        <Head>
          <title>{ CMS_NAME }</title>
          <meta name="description" content="endotaishi.com" />
          <link rel="icon" href="/assets/endotaishi.png" />
        </Head>
        <Container>
            <div className={markdownStyles['markdown']}>
                <ReactMarkdown>{markdownString}</ReactMarkdown>
            </div>
        </Container>
      </Layout>
    )
  }
  
  export default Note
  