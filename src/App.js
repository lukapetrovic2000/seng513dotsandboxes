import './App.css';
import React, { Component } from 'react';
import { HashRouter, Routes, Route,} from 'react-router-dom'
import Landing from './pages/Landing';
import Game from './pages/Game'
import PostGame from './pages/PostGame'
import Layout from './pages/Layout';

class App extends Component {

    render() {
      return (
        <HashRouter> 
          <Routes>
            <Route path='/' element={<Layout />}> 
              <Route index element={<Landing />} />
              <Route path='play' element={<Game />} />
              <Route path='postgame' element={<PostGame/>} />
            </Route>
          </Routes>
        </HashRouter>
      )
    }
}


export default App;