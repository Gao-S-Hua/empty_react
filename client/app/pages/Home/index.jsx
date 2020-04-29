import React from 'react';
import { Button } from 'antd';
import ajax from 'Api/ajax';

const Home = function () {
  const handleClick = () => {
    ajax.get('/api/user').then(console.log).catch(console.log);
  }
  return (
    <div>
      <Button onClick = {handleClick}> Click </Button>
      This is Home
    </div>
  )
}

export default Home;
