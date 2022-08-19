import React, { useState } from 'react'
import './App.css'
import { RadioButton } from '@idealo/ids-react'
import styled from 'styled-components'

const Wrapper = styled.p`
  padding: 100px;
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
    </div>
  )
}

export default App
