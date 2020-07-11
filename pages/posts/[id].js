import { useState } from "react"
import Head from "next/head"
import Layout from "../../components/layout"
import { getAllPostIds, getPostData } from "../../lib/posts"
import Date from "../../components/date"

export default function Post ( { postData } ) {

  const [ state, setState ] = useState( 0 );
  const textAreaData = e => setState( e.target.value )

  return (
    <Layout>
      <Head>
        <title>{ postData.title }</title>
      </Head>
      { postData.title }
      <br />
      { postData.id }
      <br />
      { postData.date }
      <br />
      <div dangerouslySetInnerHTML={ { __html: postData.contentHtml } }></div>
      <textarea cols="30" rows="10" onChange={ textAreaData } />
      <p dangerouslySetInnerHTML={ { __html: state } }></p>
      { state }
    </Layout>
  )
}

export async function getStaticPaths () {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ( { params } ) {
  const postData = await getPostData( params.id )
  return {
    props: {
      postData
    }
  }
}
