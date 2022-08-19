import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { RadioButton } from '@idealo/ids-react'
import styled from 'styled-components'

const Wrapper = styled.p`
  display: flex;
  flex-direction: column;

  & > div {
    margin-bottom: 10px;
  }
`

type ButtonGroup = {
  [key: string]: boolean
}

const buttonGroup: ButtonGroup = {
  red: false,
  yellow: false,
  green: false
}

function App() {
  const [select, setSelected] = useState(buttonGroup)

  const handleChange = (buttonName: string) => {
    setSelected({ ...buttonGroup, [buttonName]: true })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Wrapper>
          {Object.keys(buttonGroup).map((buttonName) => (
            <RadioButton
              name={buttonName}
              id={buttonName}
              key={buttonName}
              checked={select[buttonName]}
              onChange={() => handleChange(buttonName)}
              label={buttonName}
            />
          ))}
        </Wrapper>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
