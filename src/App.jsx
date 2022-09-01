import React,{useState,useEffect} from 'react'

function App() {
  const [valor,setValor] = useState(0)

  const alterar = () => setValor((Math.random() * 10000000).toFixed())

  useEffect(() => alterar(),[])

  return (
    <>
      <div className="container" onClick={alterar}>
        <h1>SISTEMA</h1>
        <h2>{valor}</h2>
      </div>
    </>
  )
}

export default App