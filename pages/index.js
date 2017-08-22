import Head from 'next/head'

export default () => (
  <div>
    <Head>
        <title>My Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>Welcome to next.js!</h1>
    <p style={{ color: '#0a8acd' }}>hi there</p>
    <img src="/static/img/headpic.jpg" />
    <style jsx>{`
        div {
            background: #ddd;
        }
        h1 {
            color: #dd3333;
        }
    `}</style>
    <style global jsx>{`
        body {
            background: #eee;
        }
    `}</style>
  </div>
)
