import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home () {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <section className={ utilStyles.headingMd }>
        <p>こんにちはjs太郎です</p>
        <p><a href="https://github.com/masashi49">js太郎のGithub</a>
        </p>
        <Link href="/posts/first-post"><a>first-page</a></Link>
        次は<a href="https://qiita.com/thesugar/items/01896c1faa8241e6b1bc">ここから</a>スタートです
      </section>
    </Layout>
  )
}
