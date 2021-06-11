import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {
  const[data,updateData]=useState([]);
  function parentCallBack(data){
    updateData(data);
  }
  return (
    <div>
      <Dashboard childData={parentCallBack} ></Dashboard>
      <Footer data={data}></Footer>
    </div>
    
  );
}

export default App;
