import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const url = process.env.REACT_APP_API_URL || 'http://localhost:4000';
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: ''
  });
  const handleChange = (key) => (e) => {
    setLoginInfo({...loginInfo, [key] : e.target.value});
  };
  const handleLogin = () => {
    console.log(loginInfo)
    axios.post(`${url}/login`, loginInfo, {
      headers : {
        "Content-type" : 'application/json'
      },
      withCredentials : true
    })
    .then((res) => {
      console.log(res);
    });
  };
  const handleCheck = () => {
    axios.get(`${url}/check`, {
      withCredentials : true,
      headers : {
        'Content-type' : 'application/json'
      }
    })
    .then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <center>
        <h1>로그인</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <span>아이디</span>
            <input
              type='text'
              onChange={handleChange('username')}
            />
          </div>
          <div>
            <span>비밀번호</span>
            <input
              type='password'
              onChange={handleChange('password')}
            />
          </div>
          <button className='btn' type='submit' onClick={handleLogin}>
            로그인
          </button>
        </form>
          <button className='btn' onClick={handleCheck}>
            쿠키 확인
          </button>
      </center>
    </div>
  );
}

export default App;
