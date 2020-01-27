import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Table, Container, Row, Col } from 'reactstrap'

export default function UserProfile() {

  let userId = localStorage.getItem("userId");

  const GET_USER = gql`
    query GetUser($id: ID!) {
      getUser(id: $id){
          name
          email
          phone
          department
      }
    }
  `;

  return(
    <Query query={GET_USER} variables={{ id: userId}}>
      {({ loading, data }) => !loading && (
        <Container>
            <Row style={{height: "15vh", backgroundColor: "#99ccff"}}>
              <Col style={{paddingTop:"5vh", fontSize:"24pt", color:"#ffffff", textAlign:"center"}}>Getting started with GraphQL</Col>
            </Row>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
                <tr key={data.getUser.id} >
                  <td>{data.getUser.name}</td>
                  <td>{data.getUser.email}</td>
                  <td>{data.getUser.phone}</td>
                  <td>{data.getUser.department}</td>
                </tr>
            </tbody>
          </Table>
        </Container>
      )}
    </Query>
  )
}
