import React from 'react'
import Insert from './Pages/Insert'
import {Routes, Route} from "react-router-dom";
import Update from './Pages/Update';
import Delete from './Pages/Delete';
import Display from './Pages/Display';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Insert />}/>
        <Route path='/update' element={<Update />}/>
        <Route path='/delete' element={<Delete />}/>
        <Route path='/display' element={<Display />}/>
      </Routes>
    </div>
  )
}

export default App
