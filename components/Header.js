import Nav from './Nav'

export default () => (
  <header>
    <h1>My Blog</h1>
    <Nav></Nav>
    <style jsx>{`
        header {
            width: 100%;
            
            background: #233B5D;
        }
        h1 {
            height: 72px;
            line-height: 72px;
            padding: 0 10px;
            color: #ffffff;
        }
    `}</style>
  </header>
)
