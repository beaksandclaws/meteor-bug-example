import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withApollo } from 'react-apollo';

const App = () => {
  return (
    <div>
      An example of *.graphql files caching.
    </div>
  );
};

const examplesQuery = gql`
  query {
    examples {
      _id
      name
    }
  }
`;

export default (withApollo(App));