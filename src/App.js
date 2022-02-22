import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';


function App() {

  const [users,setUsers] =useState(['cuqvcugwuwcue','hcwvgcuevew']);
  
  useEffect(()=>{
 fetch('http://127.0.0.1:8000/users/',
 {'method': 'GET',
 'mode':'cors',
headers:{
  'Content-Type': 'application/jason',
  'Authorization': 'Token f5661b40439c47359889b405ffdd05bf632e0b7f',
  'Access-Control-Allow-Origin': 'http://localhost:3000',
  'Access-Control-Allow-Credentials': true,
  'mode': 'no-cors'
}
})
.then(resp=>resp.json())
.then(resp=>setUsers(resp))
.catch(error=>console.log(error))
},[])


  return (
    <div className="App">
    <h1>wuhvusb ib wdb </h1>
    {users.map(user=>{
      return <h2>{user.email}</h2>
    })}
    </div>
  );
}

export default App;
