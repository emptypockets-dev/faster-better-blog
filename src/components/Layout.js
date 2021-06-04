import { Link } from "gatsby"
import React from "react"
import { createGlobalStyle } from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const GlobalStyle = createGlobalStyle`
  :root {
    --padding: 16px;
    --border-radius: 10px;
  }
  body {
    color: #000000;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin:0;
    padding: 0px 5vw 5vw 5vw;
    max-width: 1200px;
    margin: 0 auto;
  }
  main {
      padding: 0px 0;
  }
  nav {
    padding: 30px 0 0 0;
    margin-bottom: 60px;
    a {
      color: lightgray;
      &:hover {
        color: #000000;
      }
    }
  }
  .gatsby-image-wrapper img.logo {
    /* left: -10px; */
  }
  h1 {
      margin: 24px 0 60px 0;
      font-size:29px;
      font-weight: bold;
      max-width: 750px;
      color: lightslategrey;
      span {
        color: #000;
      }
  }
  h2 {
    margin: 0 0 0 0;
    font-size: 16px;
    line-height:1.4;
    color: #1a1a1a;
    padding: 0 16px 4px 16px;
  }
  p {
      margin-top:0;
      margin-bottom: 60px;
      color: darkslategrey;
      padding: 0 16px 16px 16px;
      font-size: 16px;
      line-height: 1.4;
  }
  a {
      color: black;
      text-decoration: none;
      height:100%;
      width:100%;
  }
  ul {
      list-style: none;
      margin-bottom: 100px;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 20px;
      padding:0;
      @media (min-width: 700px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;
      }
      @media (min-width: 900px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 30px;
      }
      @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 30px;
      }
      li {
        /* margin-bottom: 20px; */
        background-color: #e9ecef;
        
        border-radius: var(--border-radius);
        border-bottom: 1px solid lightgray;        
        &:hover {
          background-color: #dee2e6;
          .thumbnail {
            
          }
          h2 {
            color: #000000;
          }
          p {
            color: #000;
          }
        }
        a {
          display: flex;
          flex-direction:column;
          align-items: flex-start;
        }
        .thumbnail {
          background-color: white;
          border-radius: var(--border-radius);
          box-shadow: 0 5px 6px rgba(0, 0, 0, 0.3);
          transition: 0.17s all linear;
          height: 90px;
          margin: 20px;
        }
        img {
          border-radius: var(--border-radius);
        }
          p {
              margin-bottom:0;
              color: lightslategrey;
              font-size: 14px;
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
          <Link to="/">
              <StaticImage 
                imgClassName="logo"
                src="../images/ak-logo.png"
                alt="Logo - Andrey Kondratyuk"
                width={200}
              />
              </Link>
              {/* <Link to="/">Digital Garden</Link> */}
          </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>&copy; 2021</footer>
    </React.Fragment>
  )
}