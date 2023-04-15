import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Endo Taishi</title>
        <meta name="description" content="endotaishi.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <div className="text-center mb-8">
            <Image
              src="/assets/endotaishi.png"
              alt="hoge"
              width={200}
              height={200}
            />
      </div>

      <div className="w-3/4 m-auto leading-7 text-center index">
            <p>
              遠藤大志です。
            </p>
            <p>
              早稲田大学人間科学研究科に所属しています。
            </p>
            <p>
              ふとしたことを
              <a
                href="https://twitter.com/endotaishi_"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              で、
            </p>
            <p>
              つまらないことを
              <a
                href="https://note.com/en_tai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                note
              </a>
              に書いています。
            </p>
            <p>
              趣味はバスケ、釣りです。早稲田大学の
              <a
                href="https://instagram.com/raybackwaseda"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rayback
              </a>
              というサークルで幹事長を務めていました。
            </p>
            <h3>学歴</h3>
            <dl>
              <dt>2022/04</dt>
              <dd>早稲田大学人間科学研究科 入学</dd>
            </dl>
            <dl>
              <dt>2022/03</dt>
              <dd>早稲田大学人間科学部 卒業</dd>
            </dl>
            <dl>
              <dt>2019/04</dt>
              <dd>早稲田大学人間科学部 入学</dd>
            </dl>

            <h3>経歴</h3>
            <dl>
              <dt>2022/02~</dt>
              <dd>合同会社草草カンパニー 設立</dd>
            </dl>
            <dl>
              <dt>2021/02~</dt>
              <dd>株式会社アングラーズ ジョイン</dd>
            </dl>
          </div>
      </main>
    </div>

    
  )
}

export default Home
