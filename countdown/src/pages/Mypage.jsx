import React from 'react'
import Header from '../components/Header'
import CountDown from '../components/CountDown'
import Footer from '../components/Footer'
import styled from 'styled-components';
import bgStars from '../images/bg-stars.svg'


const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
height: 100vh;
background-image: url(${bgStars});
`

function Mypage() {
    const now = new Date().getTime();
    const target = now + 14 * 24 * 60 * 60 * 1000;

  return (
    <Container style={{backgroundColor: 'hsl(235, 16%, 14%)', background: bgStars, backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <Header />
        <CountDown countDownMs={target}/>
        <Footer/>
    </Container>
  )
}

export default Mypage