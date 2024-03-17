'use client';

// If used in Pages Router, is no need to add "use client"
import React from 'react';
import {Button , Col ,Row} from 'antd';
function openMenu(){
  alert('sx')
}
const Home = () => (
  <div className="App">
    <Row justify="space-between">
    <Col>resturan</Col>
    <Col onClick={openMenu}>menu</Col>
    </Row>
  </div>
);

export default Home;
