import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { getSortedPostsData } from "../lib/posts"
import testswr from '../lib/swr'

export async function getStaticProps () { //getStaticPropsはサーバサイドでのみ 実行される
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home ( { allPostsData } ) {

  console.log( testswr() );

  return (
    <Layout home homs>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <section className={ utilStyles.headingMd }>
        <p>お名前</p>
        <p><a href="https://github.com/masashi49">js太郎のGithub</a>
        </p>
        次は<a href="https://qiita.com/thesugar/items/01896c1faa8241e6b1bc#%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AA%E3%83%B3%E3%82%B0%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B-tips">ここから</a>スタートです
      </section>
      <section className={ `${ utilStyles.headingMd } ${ utilStyles.padding1px }` }>
        <h2 className={ utilStyles.headingLg }>Blog</h2>
        <ul className={ utilStyles.list }>
          { allPostsData.map( ( { id, date, title } ) => (
            <li className={ utilStyles.listItem } key={ id }>
              <Link href={ `/posts/${ id }` }><a>{ title }</a></Link>
              <br />
            </li>
          ) ) }
        </ul>
      </section>
    </Layout>
  )
}
