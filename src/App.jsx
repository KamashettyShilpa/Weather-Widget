import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoLists from './components/TodoLists'
import { store } from './app/store'
import { Provider } from 'react-redux'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <TodoLists/>
    </Provider>
   
  )
}

export default App
