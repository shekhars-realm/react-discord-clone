import React from 'react';
import './App.css';
import Sidebar from './Sidebar'
import Chat from './Chat'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser)

  return (
    <div className="app">
     {
       user ? (
      <>
        <Sidebar/>
        <Chat/>
      </>
       ) : <h2>Log in please</h2>
     }
    </div>
  );
}

export default App;
