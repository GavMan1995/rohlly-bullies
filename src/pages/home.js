import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class Home extends Component {
  render () {
    const { data } = this.props
    console.log(data)
    if (!data.loading) {
      return (
        <div>
          {data.allPuppieses.map((puppy) => {
            return (
              <div>
                <img src={puppy.puppyimage[0].url} />
                <p>{puppy.puppyprice}</p>
                <p>{puppy.puppydescription}</p>
              </div>
            )
          })}
        </div>
      )
    }

    return <div>Loading</div>
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

export default graphql(allAuthors)(Home)
