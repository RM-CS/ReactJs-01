import './App.css'
import Card from './components/Card'

function App() {
  let myObj={
    username : "Perry",
    email: "perry@gmail.com"
  }

  return (
    <>
      <h2 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind and Props with Testimonial</h2>
      <Card username="Alex" someObje={myObj} img="./src/assets/pexels-andrea-piacquadio-3775156.jpg" /> <br />
      <Card username="Ron" img="./src/assets/pexels-pixabay-220453.jpg" />

    </>
  )
}

export default App
