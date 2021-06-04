import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: block;
  img {
      max-width:100%;
  }
`

export default function Img({src, alt}) {
    console.log('props', src, alt)
        return(
            <Container>
                <img src={src} alt={alt} />
            </Container>
        )
}