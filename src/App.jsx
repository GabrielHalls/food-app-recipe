import Food from './components/Food'
import { useState } from 'react'

import './App.css'

function App() {
  const [input, setIput] = useState("")
  const [cod, setCod] = useState([])

  const YOUR_APP_ID = "0c72a8e2"
  const YOUR_APP_KEY = "afd2600c75b5c05f9d59b8f3e4bfa3b2"

  let handleSubmit = (event) => {
    event.preventDefault()
    setIput("")

    fetch(`https://api.edamam.com/search?q=${input}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`)
      .then((ress) => ress.json())
      .then((data) => {
        setCod(data.hits)

      })


  }
  console.log(cod)
  return (
    <div className='App'>

      <div className='pesquisa'>
        <h1>Food App</h1>

        <form onSubmit={handleSubmit}>
          <input className='input' onChange={(e) => setIput(e.target.value)} type="text" value={input} />
          <button type='submit'>Submit</button>
        </form>


      </div>
      <div className='container'>
        {
          cod.map((lanche) => (
            <Food
              name={lanche.recipe.label}
              img={lanche.recipe.image}
              calorias={Math.floor(lanche.recipe.calories)} />


          ))
        }
      </div>

    </div>


  )
}

export default App


/* PROJETO EM CONSTRUÇÃO */