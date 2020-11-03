import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { selectUser } from './features/userSlice';
import Imessage from './Imessage'

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      {user ? <Imessage /> : <h2>You need to login</h2>}
    </div>
  );
}

export default App;
