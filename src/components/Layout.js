import { Link } from "gatsby"
import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    --padding: 16px;
    --border-radius: 16px;
  }
  body {
    color: #000000;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin:0;
    padding: 0px 100px 100px 100px;
  }
  main {
      padding: 0px 0;
  }
  nav {
    padding: 30px 0 0 0;
  }
  .gatsby-image-wrapper img.logo {
    left: -10px;
  }
  h1 {
      margin: 15px 0 60px 0;
      font-size: 20px;
      font-weight: bold;
      max-width: 420px;
  }
  h2 {
    margin: 16px 0 0 0;
    font-size: 16px;
    line-height:1.4;
    color: lightslategray;
  }
  p {
      margin-top:0;
      margin-bottom: 60px;
      color: darkslategrey;
  }
  a {
      color: black;
      text-decoration: none;
  }
  ul {
      list-style: none;
      margin-bottom: 100px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
      padding:0;
      li {
        margin-bottom: 20px;
        background-color: #e9ecef;
        padding: var(--padding);
        border-radius: var(--border-radius);        
        &:hover {
          background-color: #dee2e6;
          h2 {
            color: #000000;
          }
        }
        a {
          display: flex;
          flex-direction:column;
          align-items: center;
        }
        .thumbnail {
          background-color: white;
          width:100%;
          height: 75px;
          border-radius: var(--border-radius);
          box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15);
        }
        img {
          /* height: 270px; */
          /* width:100%; */
        }
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