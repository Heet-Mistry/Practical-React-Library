import React from 'react';
import CountUp from 'react-countup'
import './App.css'


function Countupdemo() {
  return <div className='App' style={{ alignItems:'center' , justifyContent:'center'}}>
      <h1>
      <CountUp end={4000} />
      <br />
      <CountUp end={500} duration={5}/>
      <br />
      <CountUp start={500} end={1000} duration={4} prefix='$' decimals={2}/>
      <br />
      <CountUp start={500} end={1000} duration={4} suffix='Rs' decimals={2}/>
      </h1>
  </div>;
}

export default Countupdemo;
