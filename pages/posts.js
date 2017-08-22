import React from 'react'
import Head from 'next/head'
import 'isomorphic-fetch'

export default class PostsPage extends React.Component {
  static async getInitialProps () {
    const res = await fetch('http://localhost:8080/posts')
    const json = await res.json()
    return {
      data: json
    }
  }

  render () {
    let listItems = ''
    if (this.props.data && this.props.data.length) {
      listItems = this.props.data.map((item, index) =>
        <li key={index.toString()}>{ item.title }</li>
      )
    }
    return (
      <div>
        <Head>
          <title>Posts</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <h1>Posts</h1>
        <ul>{ listItems }</ul>
        <style jsx>{`
          div {
            background: #ddd;
          }
          h1 {
            color: #dd3333;
          }
        `}</style>
      </div>
    )
  }
}
