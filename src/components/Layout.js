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
      margin: 0px 0 60px 0;
      font-size:27px;
      font-weight: bold;
      max-width: 700px;
      color: lightslategrey;
      span {
        color: #000;
      }
  }
  h2 {
    margin: 0 0 0 0;
    font-size: 16px;
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
      /* @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 30px;
      } */
      li {
        /* margin-bottom: 20px; */
        background-color: #e9ecef;
        border-radius: var(--border-radius);
        border: 1px solid rgba(0,0,0,0);
        /* border-bottom: 1px solid lightgray;  
               */
        transition: 0.17s all linear;
        &:hover {

          li {
            /* box-shadow: 10px 0px 10px rgba(0, 0, 0, 1)!important; */
            transition: 0.17s all linear;

          }

          a > div {
            
            /* box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px; */
          }
          /* box-shadow: 0!important; */
          /* background-image: url(data:image/png;base64,  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); */
          background-color: #f8f9fa;
          border: 1px solid lightgrey;
          .thumbnail {
            
          }
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
