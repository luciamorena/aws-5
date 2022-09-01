import React,{useState,useEffect} from 'react'

function App() {
  const [valor,setValor] = useState(0)
  const [cor,setCor] = useState(null)
  const [tipo,setTipo] = useState('SISTEMA')

  const alterar = () => setValor((Math.random() * 10000000).toFixed())

  const colorir = () => {
    const cor = '#' + Math.floor(Math.random() * 12345678).toString(16)
    setCor(cor)
  }

  useEffect(() => alterar(),[])

  return (
    <div className='container' style={{ background: cor }}>
      <div className="box" onClick={() => {
        alterar();
        colorir();
      }}>
        <h1>{tipo}</h1>
        <h2>{valor}</h2>
      </div>
    </div>
  )
}

export default App