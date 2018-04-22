import { makeExecutableSchema } from "graphql-tools";

// Types
const typeDefs = `
  type Query {
    ping: String
  }
`;

// Resolvers
const resolvers = {
  Query: {
    ping: () => "pong"
  }
};

// Export schema
export default makeExecutableSchema({
  resolvers,
  typeDefs,
});
