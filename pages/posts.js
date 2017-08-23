import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import 'isomorphic-fetch'
import Layout from '../layouts/Main'

export default class PostsPage extends React.Component {
  static async getInitialProps () {
    const res = await fetch('http://www.thatyou.cn/wp-json/wp/v2/posts')
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
        <ul>
          {
            this.props.data.map((item, index) => (
              <li key={index.toString()} className="post_item"><Link href={{ pathname: '/post', query: { id: item.id } }}><a>{ item.title.rendered }</a></Link></li>
            ))
          }
        </ul>
        <style jsx>{`
          .post_item {
            margin: 10px 0;
          }
          .post_item a {
            color: #444;
            text-decoration: none;
            font-family: '微软雅黑';
            
          }
          .post_item a:hover {
            color: #dd3333;
            text-decoration: underline;
          }
        `}</style>
      </Layout>
    )
  }
}
