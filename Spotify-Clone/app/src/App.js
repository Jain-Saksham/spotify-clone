import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './login';
import DashBoard from './DashBoard';

const code=new URLSearchParams(window.location.search).get('code')

function App() {
  return code ? <DashBoard code={code} /> :<Login />
}

export default App;
