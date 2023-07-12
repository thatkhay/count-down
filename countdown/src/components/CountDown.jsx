import React, { useEffect, useState } from 'react';
import {getRemainingTsMl} from '../CountDownUtils'
import { styled } from 'styled-components';


const defaultTime =  {
seconds: '00',
minutes: '00',
hours: '00',
days: '00'
}

const Card = styled.div`
border-radius: 1rem;
background-color: hsl(236, 21%, 26%);
height: 8rem;
display: flex;
align-items: center;
justify-content: center;
width: 8rem;
color: hsl(345, 95%, 68%);
font-size: 4rem;
`
 
const CountDown = ({countDownMs}) => {
  const [timeRemaining, setTimeRemaining] = useState(defaultTime);

  useEffect(() => {
    const interval = setInterval(() => {
        updateTime(countDownMs)
}, 1000);
return () => clearInterval(interval)
  }, [countDownMs])
  
  function updateTime(countdown) {
   setTimeRemaining(getRemainingTsMl(countdown));  
    
  }

  

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' , gap: '1rem' }}>
          <div style={{}}> <Card><span style={{  }}>{timeRemaining.days} </span></Card> <span style={{ color: 'hsl(237, 18%, 59%)', textTransform: 'capitalize' }}>days </span>  </div>
          <div style={{}}> <Card><span style={{  }}> {timeRemaining.hours}</span></Card> <span style={{ color: 'hsl(237, 18%, 59%)', textTransform: 'capitalize' }}> hours</span> </div>
          <div style={{}}><Card> <span style={{  }}>{timeRemaining.minutes} </span></Card> <span style={{ color: 'hsl(237, 18%, 59%)', textTransform: 'capitalize' }}>minutes </span> </div>
          <div style={{}}> <Card><span style={{  }}> {timeRemaining.seconds} </span></Card> <span style={{ color: 'hsl(237, 18%, 59%)', textTransform: 'capitalize' }}> seconds</span>  </div>
        </div>
  );
};

export default CountDown;
