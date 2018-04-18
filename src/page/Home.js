import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  height: 100vh;
  background: #505050 url(${require('../static/map.svg')}) no-repeat center;
  background-size: 200% auto;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Box = styled.div`
  color: #fff;
  text-transform: uppercase;
  text-align: center;
`

const List = styled.p`
  padding-top: 20px;
`

const Item = styled.a`
  margin: 0 10px;
  color: inherit;
  font-size: 14px;
  text-decoration: none;
  border-bottom: 1px solid #fff;
  
  &:hover,
  &:active {
    opacity: 0.8;
  }
`

export default () => (
  <Wrap>
    <Box>
      <h1>zhu wei you</h1>
      <List>
        <Item href='https://github.com/zhuweiyou' target='_blank' rel='noopener noreferrer'>github</Item>
      </List>
    </Box>
  </Wrap>
)
