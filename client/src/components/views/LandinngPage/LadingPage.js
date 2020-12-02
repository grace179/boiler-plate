import axios from 'axios';
import React from 'react';

function LandingPage(props) {

  const onClickHandler = () => {
    axios.get('/api/users/logout')
      .then(response => {
        console.log(response.data);
        if(response.data.success){
          props.history.push('/login');
        }else{
          alert('로그아웃이 실패했습니다.');
        }
      })
  }
  return (
    <div>
      시작화면
      <button onClick={onClickHandler}>Logout</button>
    </div>
  )
}

export default LandingPage;
