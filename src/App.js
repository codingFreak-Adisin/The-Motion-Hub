import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import SimpleBottomNavigation from './components/MainNav';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';
import Reality from './Pages/Reality/Reality';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="App">

    <Container>
      <Switch>
        <Route path='/' component={Trending} exact/>
        <Route path='/movies' component={Movies}/>
        <Route path='/series' component={Series}/>
        <Route path='/search' component={Search}/>
        <Route path='/reality' component={Reality}/>
      </Switch>
      </Container>
    </div>

    <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;

