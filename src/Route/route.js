import React, { Component } from 'react'
import { Routes,route } from 'react-router-dom';
import { settingHomePage,settingloginpage,settingregisterpage } from '../setting'

export default function ClassRouter () {
    return (
      <Routes>
      <route path="/" element={<settingHomePage/>}/>
    <route path="/login" element={<settingloginpage/>}/>
    <route path="/register" element={<settingregisterpage/>}/>
      </Routes>
    );
  }
