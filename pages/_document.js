import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

import stylesheet from 'static/css/style.scss'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
     <html>
       <Head>
         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
       </Head>
       <body className="custom_class">
         {this.props.customValue}
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}