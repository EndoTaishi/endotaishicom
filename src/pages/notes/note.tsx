import fs from 'fs';
import path from 'path';
import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/layout';
import Container from '../../components/container';
import markdownStyles from '../../components/markdown-styles.module.css';
import { CMS_NAME } from '../../../lib/constants';

interface Props {
  markdownString: string;
}

const Note: NextPage<Props> = ({ markdownString }) => {
  return (
    <Layout>
      <Head>
        <title>{CMS_NAME}</title>
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

export const getStaticProps: GetStaticProps = async () => {
  const fullPath = path.join(process.cwd(), 'src/posts', `way-to-think.md`);
  const markdownString = fs.readFileSync(fullPath, 'utf8');

  return {
    props: {
      markdownString,
    },
  };
}

export default Note;
