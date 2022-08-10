import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Search } from './features/search/Search';
import { GifList } from './features/gifList/GifList';

function App() {
  return (
    <>
      <Search />
      <GifList />
    </>
  );
}

export default App;
