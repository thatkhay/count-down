import React, { useEffect, useState } from 'react';
import {getRemainingTsMl} from '../CountDownUtils'

const defaultTime =  {
seconds: '00',
minutes: '00',
hours: '00',
days: '00'
}
 
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
    <div>
          <div>{timeRemaining.days} days</div>
          <div>{timeRemaining.hours} hours</div>
          <div>{timeRemaining.minutes} minutes</div>
          <div>{timeRemaining.seconds} seconds</div>
        </div>
  );
};

export default CountDown;
