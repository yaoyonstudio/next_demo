import Head from 'next/head'
import Layout from '../layouts/Main'

export default () => (
  <Layout>
    <Head>
        <title>My Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>Welcome to next.js!</h1>
    <p style={{ color: '#0a8acd' }}>hi there</p>
    <img src="/static/img/headpic.jpg" />
    <div className="test">
        <p>TEST</p>
    </div>
    <style jsx>{`
        h1 {
            color: #dd3333;
        }
    `}</style>
    <style global jsx>{`
        body {
            background: #eee;
        }
    `}</style>
  </Layout>
)
