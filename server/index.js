let express = require('express');
let { graphqlHTTP } = require('express-graphql');
let { buildSchema } = require('graphql');

let schema = buildSchema(`
  type Query {
    hello: String
    bay: String
  }
`);

// The root provides a resolver function for each API endpoint
let root = {
  hello: () => {
    return 'Hello world!';
  },
  bay: () => {
    return 'sdalfhslkdhflakjshdfljkasdf';
  },
};

let app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000);
