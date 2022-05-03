import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  Icon,
  User,
  UserGreeting,
  UserName,
  HighlightCards
} from './styles'

export function Dashboard(){

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo 
              source={{uri: 'https://avatars.githubusercontent.com/u/51133142?v=4'}}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Pietro Gonçalves </UserName>
            </User>
          </UserInfo>
          <Icon name="power"/>
        </UserWrapper>
      </Header>

      <HighlightCards 

      >
        <HighlightCard title='Entradas' type='up' amount='R$ 5.000' lastTransaction='Última entrada dia 13 de abril' /> 
        <HighlightCard title='Saidas' type='down' amount='R$ 2.000' lastTransaction='Última saida dia 13 de abril' /> 
        <HighlightCard title='Total' type='total' amount='R$ 3.000' lastTransaction='01 á 16 de abril' /> 
      </HighlightCards> 
    </Container>
  )
}

