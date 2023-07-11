import React from 'react'
import Header from '../components/Header'
import CountDown from '../components/CountDown'
import Footer from '../components/Footer'
import styled from 'styled-components';



const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
height: 100vh;
background-color: gray;
`

function Mypage() {
    const now = new Date().getTime();
    const target = now + 14 * 24 * 60 * 60 * 1000;

  return (
    <Container>
        <Header />
        <CountDown countDownMs={target}/>
        <Footer/>
    </Container>
  )
}

export default Mypage