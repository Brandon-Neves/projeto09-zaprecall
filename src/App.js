import React, { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from './assets/css/GlobalStyle'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppContainer></AppContainer>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  background-color: #fb6b6b;
  padding-bottom: 190px;
`
