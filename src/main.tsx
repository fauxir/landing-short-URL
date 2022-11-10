import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App  from './App'
//import createStore from 'landing-short-url/src/redux/store.ts'
import './index.css'

//const store = createStore()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //<Provider store={store}> 
  <React.Fragment>
    <App />
  </React.Fragment>

  //</Provider>
)
