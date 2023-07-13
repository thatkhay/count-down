import React from 'react'
import styled from 'styled-components';


const Head = styled.h1`

text-transform: uppercase;
color: white;
letter-spacing: 9px


`
function Header() {
  return (
    <Head style={{ marginTop: '6rem' }}>
        we're launching soon
    </Head>
  )
}

export default Header