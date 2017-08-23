import React from 'react'
import Head from 'next/head'
import 'isomorphic-fetch'
import Layout from '../layouts/Main'

export default class PostsPage extends React.Component {
  static async getInitialProps ({ query }) {
    const res = await fetch('http://www.thatyou.cn/wp-json/wp/v2/posts/' + query.id)
    const json = await res.json()
    return {
      data: json
    }
  }

  render () {
    return (
      <Layout>
        <Head>
          <title>Posts</title>
        </Head>
        <div className="content">
          <header className="post_header">
            <h2 className="post_title">{this.props.data.title.rendered}</h2>
            <p className="post_date">{this.props.data.date}</p>
          </header>
          <div dangerouslySetInnerHTML={{__html: this.props.data.content.rendered }} />
        </div>
        <style jsx>{`
          div.content {
            padding: 20px;
          }
          .post_header {
            margin: 40px auto;
            text-align: center;
          }
          .post_title {
            color: #dd3333;
          }
          .post_date {
            margin: 10px auto;
            color: #aaa;
          }
        `}</style>
      </Layout>
    )
  }
}
