import {Link} from 'gatsby';
import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {StaticImage} from 'gatsby-plugin-image';

const GlobalStyle = createGlobalStyle`
  :root {
    --padding: 16px;
    --border-radius: 10px;
  }
  html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
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
    padding: 40px 0 0 0;
    margin-bottom: 30px;
    > a > div {
      position: relative;
      left: -10px;
    }
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
      margin: 0px 0 0px 0;
      font-size:27px;
      font-weight: bold;
      max-width: 700px;
      color: lightslategrey;
      span {
        color: #000;
      }
      + h2 {
        color: lightslategray;
        padding: 0;
        margin-top: 16px;
        font-weight: normal;
        font-size: 0.8rem;
        text-transform: uppercase;
        span {
          font-size: 0.7rem;
          padding: 0.3rem;
          border-radius: 5px;
          display: inline-block;
          margin-right: 0.5rem;
          color: white;
          line-height:1;
          position: relative;
          top: -2px;
          &.hubspot {
            background-color: #eb5e28;
          }
          &.procreate {
            background-color: #f27f34;
          }
          &.react {
            background-color: #f9a03f;
          }
          &.gatsby {
            background-color: #f6b049;
          }
          &.html {
            background-color: #f3c053;
          }
          &.scss {
            background-color: #a1c349;
          }
          &.webpack {
            background-color: #94b33d;
          }
          &.babel {
            background-color: #87a330;
          }
          &.javascript {
            background-color: #799431;
          }
          &.random {
            background-color: #6a8532;
          }
        }
      }
  }
  
  h2 {
    margin: 0 0 0 0;
    font-size: 18px;
    line-height:1.4;
    color: #000;
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
      margin-top: 70px;
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
      li {
        background-color: #e9ecef;
        border-radius: var(--border-radius);
        border: 1px solid rgba(0,0,0,0);
        transition: 0.17s all linear;
        &:hover {
          li {
            transition: 0.17s all linear;
          }
          background-color: #f8f9fa;
          border: 1px solid lightgrey;
          h2 {
            color: #000000;
          }
          p {
            color: #000;
            transition: 0.17s all linear;
          }
        }
        a {
          display: flex;
          flex-direction:column;
          align-items: flex-start;
        }
        p {
            margin-bottom:0;
            color: lightslategrey;
            font-size: 14px;
            transition: 0.17s all linear;
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
`;
export default function Layout({children}) {
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
              width={220}
            />
          </Link>
          {/* <Link to="/">Digital Garden</Link> */}
        </nav>
      </header>
      <main>{children}</main>
      <footer>&copy; 2021</footer>
    </React.Fragment>
  );
}
