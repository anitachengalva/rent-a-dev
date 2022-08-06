import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import 'semantic-ui-css/semantic.min.css';
import Homepage from "./components/homepage";
// import Modal from './components/modal';
import Login from './components/login';
import './App.css';
import './index.css'

// GraphQL endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Login></Login>

        {/* <Modal></Modal> */}
        {/* <Homepage></Homepage> */}
      </div>
    </ApolloProvider>
  );
}

export default App;
