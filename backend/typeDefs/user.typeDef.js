const userTypeDef = `#graphql
  type User{
    _id: ID!
    username: String!
    name: String!
    password: String!
    profilePicture: String
    gender: String!

  }

  type Query{
    users: [User!]
    authUser: User
    user(userId: ID!) : User
  }

  type Mutation {
    signUp(input: SignUpInput!) : User
    logIn(input: LogInInput!) : User
    logOut: LogOutResponse
  }

  input SignUpInput {
    username: String!
    name: String!
    pasword: String!
    gender: String!
  }

  input LogInInput {
    username: String!
    pasword: String!
  }

  type LogOutResponse {
    message: String!
  }

`;

export default userTypeDef;
