import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import Nav from 'components/Nav'

export default ({ children, title = 'This is the default title' }) => (
  <div className="container">
    <Head>
      <title>{ title }</title>
    </Head>
    <Header className="myHeader"></Header>

    <main className="main">
      { children }
    </main>

    <Footer className="myFooter"></Footer>
    <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .main {
          margin: 0 auto;
          flex: 1;
          width: 100%;
          max-width: 1200px;
          height: 100%;
          background: #f8f8f8;
        }
        .myFooter {

        }
    `}</style>
  </div>
)