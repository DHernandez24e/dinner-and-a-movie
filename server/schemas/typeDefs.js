// import the gql tagged template function
const { gql } = require('apollo-server-express');


// User, Thought, Reaction, Query, Mutation, and Auth queries
const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    friends: [User]
  }

  type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addReaction(thoughtId: ID!, reactionBody: String!): Thought
    addFriend(friendId: ID!): User
  }

  type Auth {
    token: ID!
    user: User
  }
`;


// placeeholders

    // type Movie {
    //   movieId: ID
    //   authors:[String]
    //   description: String
    //   title: String
    //   image: String
    //   link: String
    // }
    // input savedMovie {
    //   movieId: String
    //   title: String
    //   authors: [String]
    //   description: String
    //   image: String
    //   link: String
    // }


// export the typeDefs
module.exports = typeDefs;


