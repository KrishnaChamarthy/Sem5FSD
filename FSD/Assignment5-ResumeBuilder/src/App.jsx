import React from 'react'
import Title from './components/title'
import Main from './components/Main'
import { Routes, Route } from 'react-router-dom';
import Build from './components/Build';

const App = () => {
  return (
    <div className='app'>
      <Title />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/build' element={<Build />} />
      </Routes>

      
    </div>
  )
}

export default App