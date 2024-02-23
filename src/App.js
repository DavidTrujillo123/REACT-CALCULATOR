import './App.css';
import Button from './components/Button'
import Display from './components/Display'
import ButtonClear from './components/ButtonClear'
import Logo from './components/Logo'
import { useState } from 'react'


function App() {

  const [input, setInput] = useState('');
  const [operation, setOperation] = useState('');

  const addInput = value =>{
    setInput(input+value);
  }

  const  calculateResult = (operator, numA, numB) =>{
    if(operator == '+'){
      return numA + numB
    }
    else if (operator == '-'){
      return numA - numB
    }
    else if (operator == '*'){
      return numA * numB
    }
    else if (operator == '/'){
      return numA / numB
    }
  }

  const setResult = () =>{
    try{
      let expresion = input;
      let partes = expresion.match(/([\d.]+)([+\-\/*])([\d.]+)/);
      let operator = partes[2];
      let numA = parseFloat(partes[1]);
      let numB = parseFloat(partes[3]);
      let result = calculateResult(operator, numA, numB)
      setOperation(partes[0]);
      setInput(result);
    }
    catch(e){
      setOperation('');
      setInput('');
    }
  }

  return (
    <div className="App">
      <Logo title='Calculadora'/>
      <div className='main-container'>
        <Display 
          input={input}
          operation={operation}
        />
        <div className='row'>
          <Button eventClick = {addInput}>1</Button>
          <Button eventClick = {addInput}>2</Button>
          <Button eventClick = {addInput}>3</Button>
          <Button eventClick = {addInput}>+</Button>
        </div>
        <div className='row'>
          <Button eventClick = {addInput}>4</Button>
          <Button eventClick = {addInput}>5</Button>
          <Button eventClick = {addInput}>6</Button>
          <Button eventClick = {addInput}>-</Button>
        </div>
        <div className='row'>
          <Button eventClick = {addInput}>7</Button>
          <Button eventClick = {addInput}>8</Button>
          <Button eventClick = {addInput}>9</Button>
          <Button eventClick = {addInput}>*</Button>
        </div>
        <div className='row'>
          <Button eventClick = {setResult}>=</Button>
          <Button eventClick = {addInput}>0</Button>
          <Button eventClick = {addInput}>.</Button>
          <Button eventClick = {addInput}>/</Button>
        </div>
        <div className='row'>
          <ButtonClear 
            eventClick={
              ()=>{ 
                setInput('');
                setOperation('');
              } 
            }
          >
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
