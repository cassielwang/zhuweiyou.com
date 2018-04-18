import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Home from './page/Home'

export default () => (
  <BrowserRouter>
    <Route path='/' component={Home} />
  </BrowserRouter>
)
