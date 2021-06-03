import { Link } from "gatsby"
import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    color: #000000;
    font-family: Helvetica, sans-serif;
    margin:0;
    padding: 50px 100px 100px 100px;
  }
  main {
      padding: 50px 0;
  }
  h1 {
      margin:0 0 8px 0;
      font-size: 32px;
      font-weight: 100;
  }
  p {
      margin-top:0;
      margin-bottom: 60px;
      color: darkslategrey;
  }
  a {
      color: black;
      text-decoration: none;
      &:hover {
          text-decoration: underline;
      }
  }
  ul {
      list-style: none;
      li {
        margin-bottom: 20px;
          p {
              margin-bottom:0;
              color: black;
          }
      }
  }
  footer {
      color: lightgray;
  }
  pre {
      padding: 20px;
      border-radius: 8px;
      font-size: 16px;
      line-height: 24px;
  }
`
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <header>
          <nav>
              <Link to="/">Home</Link>
          </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>&copy; 2021</footer>
    </React.Fragment>
  )
}