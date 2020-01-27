import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Table, Container, Row, Col } from 'reactstrap';
import {navigate} from 'hookrouter';

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      department
    }
  }
`;

export default function UserList() {

  return(
    <Query query={GET_USERS}>
      {({ loading, data }) => !loading && (
        <Container>
          <Row style={{height: "15vh", backgroundColor: "#99ccff"}}>
            <Col style={{paddingTop:"5vh", fontSize:"24pt", color:"#ffffff", textAlign:"center"}}>Getting started with GraphQL</Col>
          </Row>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {data.users.map(user => (
                <tr key={user.id} onClick={()=> {localStorage.setItem("userId", user.id); navigate('/userProfile')}}>
                  <td>{user.name}</td>
                  <td>{user.department}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      )}
    </Query>
  )
}
