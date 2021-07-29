// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook: 
        removeBook(bookId: !): User
    }

    User {
        _id: ID
        username: String
        email: String
        bookCount: 
        savedBooks: [Book]
    }

    Book {
        bookId: 
        authors: 
        description: String
        title: 
        image: 
        link: 
    }

    Auth {
        token: ID
        user: User
    }
`;

// export the typeDefs
module.exports = typeDefs;