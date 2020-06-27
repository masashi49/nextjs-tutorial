import HEAD from "next/head"
import Link from "next/link"
import Layout from "../../components/layout"
import Base from "../../components/base"

export default function FirstPost () {
  return (
    <Layout>
      <HEAD>
        <title>たま</title>
      </HEAD>
      <Base>
        <h1 className="logo">first Posaaaat</h1>
      </Base>
      <Link href={ { pathname: '/', query: { name: 'test' } } }><a>indexへ</a></Link>
      <Link href="/" ><img src="/test.png" alt="Vercel Logo" className="logo" /></Link>
    </Layout>
  )



}
