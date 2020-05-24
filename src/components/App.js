import React from 'react'
import T from 'prop-types'
import goat from './goat.jpeg'
import cortex from './cortex.jpeg'
import styled, { createGlobalStyle } from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 800px;
  margin-top: 100px;
  justify-content: space-around;
`

const StyledImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
`

const SyllableContainer = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 100px;
  justify-content: space-around;
`

const Syllable = styled.div`
  width: 150px;
  height: 80px;
  font-size: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
`

const PlaceholderContainer = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

const PlaceholderBox = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Placeholder = styled.div`
  width: 120px;
  height: 80px;
  border-bottom: 5px solid black;
`

const source = ['ко', 'за', 'ко', 'ра']

export default function App() {
  return (
    <Container>
      <ImageContainer>
        <StyledImage alt="goat" src={goat} />
        <StyledImage alt="cortex" src={cortex} />
      </ImageContainer>

      <PlaceholderContainer>
        <PlaceholderBox>
          <Placeholder />
          <Placeholder />
        </PlaceholderBox>
        <PlaceholderBox>
          <Placeholder />
          <Placeholder />
        </PlaceholderBox>
      </PlaceholderContainer>

      <SyllableContainer>
        {source
          .sort(() => Math.random() - 0.5)
          .map((syllable) => (
            <Syllable key={syllable}>{syllable}</Syllable>
          ))}
      </SyllableContainer>
    </Container>
  )
}
