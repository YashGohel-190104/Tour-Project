import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom';
import Home from '../Pages/Home';
import Tours from '../Pages/Tours';
import TourDetails from '../Pages/TourDetails';
import Login from '../Pages/Login'
import Register from '../Pages/Register';
import SearchResultList from '../Pages/SearchResultList';

const Routers = () => {
  return(
    <Routes>
        <Route path='/' element= {<Navigate to='/home'/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/tours' element={<Tours/>}></Route>
        <Route path='/tours/:id' element={<TourDetails/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/tours/search' element={<SearchResultList/>}></Route>
    </Routes>
  )
  
}

export default Routers;