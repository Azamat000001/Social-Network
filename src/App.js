import React from 'react';
import Nature from './Nature.jpg'
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Sittings from './Components/Sittings/Sittings'
import { Route, Routes } from 'react-router-dom'
import Spinner from './Components/Spinner/Spiner';
import { addPost } from './redux/store';



function App (props){
  


 
  return (
    <div className="app-wrapper">

      <Header />
      <Navbar />
      
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/Profile' element={ <Profile
                                                profilePage={ props.state.profilePage } 
                                                dispatch={ props.dispatch } 
                                           /> 
                                         }/>
          <Route path='/Dialogs' element={ <Dialogs 
                                                store={props.store}
                                                dispatch={ props.dispatch } 
                                           /> 
                                         }/>
          <Route path='/News' element={ <News/> }/>
          <Route path='/Music' element={ <Music/> }/>
          <Route path='/Sittings' element={ <Sittings/> }/>
          <Route path='/Spinner' element={ <Spinner/> } />
        </Routes>
      
      </div>
 

 

    </div>
  ); 

}

export default App;
