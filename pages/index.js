import Head from 'next/head'
import Layout from '../layouts/Main'

export default () => (
  <Layout>
    <Head>
        <title>My Blog</title>
    </Head>
    <h1>Welcome to next.js!</h1>
    <style jsx>{`
        h1 {
            color: #dd3333;
        }
    `}</style>
  </Layout>
)
