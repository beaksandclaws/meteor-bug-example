import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema} from 'graphql-tools';
import merge from 'lodash/merge';

import ExampleSchema from '../../api/examples/Example.graphql';
import ExampleResolvers from '../../api/examples/resolvers.js';
// asdsd
const typeDefs = [
  ExampleSchema,
];

const resolvers = merge(
  ExampleResolvers
);

const schema = makeExecutableSchema({ typeDefs, resolvers });

createApolloServer({ schema });