import React from 'react'
import fbIcon from '../images/icon-facebook.svg'
import pintresIcon from '../images/icon-pinterest.svg'
import igIcon from '../images/icon-instagram.svg'

import { styled } from 'styled-components'


const FooterContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;


`
const Footer = () => {
  return (
    <FooterContainer className='footer' >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px'}}>
      <img src={fbIcon}  alt="" />
      <img src={pintresIcon}  alt="" />
      <img src={igIcon}  alt="" />
      </div>

    </FooterContainer>
    
  )
}

export default Footer