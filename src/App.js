import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Sittings from './Components/Sittings/Sittings'
import { Route, Routes } from 'react-router-dom'
import Spinner from './Components/Spinner/Spiner';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';




function App (){
  


 
  return (
    <div className="app-wrapper">

      <Header />
      <Navbar />
      
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/Profile' element={ <Profile /> }/>
          <Route path='/Dialogs' element={ <DialogsContainer /> }/>
          <Route path='/News' element={ <News/> }/>
          <Route path='/Music' element={ <Music/> }/>
          <Route path='/Sittings' element={ <Sittings/> }/>
          <Route path='/Spinner' element={ <Spinner/> } />
          <Route path='/Users' element={ <UsersContainer/> }/>
        </Routes>
      </div>
 
    </div>
  ); 

}

export default App;
