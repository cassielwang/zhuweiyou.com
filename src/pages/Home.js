import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  height: 100%;
  background: #505050 url(${require('../assets/map.svg')}) no-repeat center;
  background-size: 200% auto;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Body = styled.div`
  color: #fff;
  text-transform: uppercase;
  text-align: center;
`

const Links = styled.p`
  padding-top: 20px;
`

const Link = styled.a`
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
    <Body>
      <h1>zhu wei you</h1>
      <Links>
        <Link href='https://github.com/zhuweiyou' target='_blank' rel='noopener noreferrer'>github</Link>
      </Links>
    </Body>
  </Wrap>
)
