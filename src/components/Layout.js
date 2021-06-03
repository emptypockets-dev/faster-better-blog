import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    color: #000000;
    font-family: Arial, Helvetica, sans-serif;
    margin:0;
    padding: 100px;
  }
  h1 {
      margin:0;
  }
  p {
      margin-bottom: 40px;
      color: darkslategrey;
  }
  ul {
      li {
          p {
              margin-bottom:0;
              color: black;
          }
      }
  }
`
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  )
}