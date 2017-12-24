import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import Home from './pages/home'

import { Header } from './styles/components/header'

class App extends Component {
  render () {
    console.log(this.props.data)
    return (
      <div className='App'>
        <Header>
          <p>Hello</p>
        </Header>

        <Router>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export const allAuthors = gql`
  query allPuppies {
    allPuppieses(orderBy: id_ASC) {
      id
      puppyimage{
        url
      }
      puppyprice
      puppydescription
      puppysold
      puppyonhold
    }
  }
`

export default graphql(allAuthors)(App)
