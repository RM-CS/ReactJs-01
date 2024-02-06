import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>This is Custom function</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href : 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }
const anotherUsername = "Reactjs-01"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click to visit ',
    anotherUsername

)

const anotherElement = (
  <a href="https://google.com" target="_blank">visti google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(  
  reactElement
)
