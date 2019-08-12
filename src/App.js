import React, { useState, useEffect } from 'react';
import './App.css'
import MostraVoltas from './MostraVoltas'
import MostraTempo from './MostraTempo'
import Button from './Button'

function App() {
  const [numVoltas, setNumVoltas] = useState(1)
  const [rodando, setRodando] = useState(false)
  const [tempo, setTempo] = useState(0)

  useEffect(() => {
    let timer = null
    if (rodando) {
      timer = setInterval(() => {
        setTempo(anterior => anterior + 1)
      }, 1000)
    }
    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [rodando])

  const toggleRodando = () => {
    setRodando(!rodando)
  }


  const incrementar = () => {
    setNumVoltas(numVoltas + 1)
  }
  const decrementar = () => {
    if (numVoltas > 0) {
      setNumVoltas(numVoltas - 1)
    }
  }

  const reseta = () => {
    setNumVoltas(0)
    setTempo(0)
  }

  return (
    <div className="App">
      <MostraVoltas voltas={numVoltas} />
      <Button className="maior" texto='+' onClick={incrementar} />
      <Button className="maior" texto='-' onClick={decrementar} />
      {
        numVoltas > 0 &&
        <MostraTempo tempo={Math.round(tempo / numVoltas)} />
      }
      <Button onClick={toggleRodando} texto={ rodando ? "Pausar" : "Iniciar"} />
      <Button onClick={reseta} texto='Reiniciar' />
    </div>
  );
}

export default App;
