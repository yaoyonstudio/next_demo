import Router from 'next/router'
import Link from 'next/link'

const menus = [
    {'id': 1, 'title': 'Home', 'link': '/'},
    {'id': 2, 'title': 'Post', 'link': '/posts'},
    {'id': 3, 'title': 'Test', 'link': '/test'}
]

console.log(Router)
let current = '/'
Router.onRouteChangeStart = (url) => {
    current = url
}


export default () => (
  <nav>
    <ul>
        {
            menus.map((menu, index) => (
                <li key={index}><Link href={menu.link} prefetch><a className={current == menu.link ? 'active' : ''}>{menu.title}</a></Link></li>
            ))
        }
    </ul>
    <style jsx>{`
        nav {
            width: 100%;
            height: 36px;
            background: #386cb5;
            padding: 0 10px;
        }
        ul {

        }
        li {
            display: inline-block;
            height: 36px;
            line-height: 36px;
            color: #ffffff;
        }
        a {
            display: block;
            height: 36px;
            line-height: 36px;
            width: 72px;
            color: #ffffff;
            text-align: center;
            text-decoration: none;
            font-family: '微软雅黑';
        }
        a:hover {
            background: #dd3333;
        }
        .active {
            background: #dd3333;
        }
    `}</style>
  </nav>
)
