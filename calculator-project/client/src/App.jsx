import { useState } from 'react';
import './App.css';

function App()
{
  const [display,setDisplay]=useState('');
  const [firstnumber,setFirstnumber]=useState('');
  const [operator,setOperator]=useState('');

  return(
    <div className="App">
      <h3>Calculator</h3>
      
        <input type="text" className="display" value={display}readOnly/>
      
      <div className="numbers">
      
        <button onClick={()=>setDisplay('')}>AC</button>
        <button onClick={()=>setDisplay(display.slice(0,-1))}>DEL</button>
        <button onClick={()=>{
        setFirstnumber(Number(display));
        setOperator('%');
        setDisplay('');
        }}>%</button>
        <button onClick={()=>{
          setFirstnumber(Number(display));
          setOperator('/');
          setDisplay('');
          }}>/</button>
        
        <button onClick={()=>setDisplay(display+'7')}>7</button>
        <button onClick={()=>setDisplay(display+'8')}>8</button>
        <button onClick={()=>setDisplay(display+'9')}>9</button>
        <button onClick={()=>{
          setFirstnumber(Number(display));
          setOperator('*');
          setDisplay('');
        }}>*</button>
        
        <button onClick={()=>setDisplay(display+'4')}>4</button>
        <button onClick={()=>setDisplay(display+'5')}>5</button>
        <button onClick={()=>setDisplay(display+'6')}>6</button>
        <button onClick={()=>{
          setFirstnumber(Number(display));
          setOperator('-');
          setDisplay('');
        }}>-</button>
        
        <button onClick={()=>setDisplay(display+'1')}>1</button>
        <button onClick={()=>setDisplay(display+'2')}>2</button>
        <button onClick={()=>setDisplay(display+'3')}>3</button>
        <button onClick={()=>{
          setFirstnumber(Number(display));
          setOperator('+');
          setDisplay('');
        }}>+</button>
        
        <button onClick={()=>setDisplay(display.slice(0,-1))}>+-</button>
        <button onClick={()=>setDisplay(display+'0')}>0</button>
        <button onClick={()=>setDisplay(display+'.')}>.</button>
        <button className="equal" onClick={()=>{
          const secondnumber=Number(display);
          let result;
          if(operator==='+')
          {
            result=firstnumber+secondnumber;
          }
          else if(operator==='-')
          {
            result=firstnumber-secondnumber;
          }
          else if(operator==='*')
          {
            result=firstnumber*secondnumber;
          }
          else if(operator==='/')
          {
            result=firstnumber/secondnumber;
          }
          else if(operator==='%')
          {
            result=firstnumber%secondnumber;
          }
          setDisplay(String(result));
        }}>=</button>
      
     </div>
    </div>
  )
}

export default App;