import React from "react";
import ReactDOM from "react-dom";
import App from "./API/app";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  defaultDataIdFromObject,
  gql,
} from "@apollo/client";

import { CookiesProvider } from "react-cookie";
import { setContext } from "@apollo/client/link/context";
import { GETCURRENTUSER } from "../src/API/graphql/Query";
import { persistCache } from "apollo3-cache-persist";

const httpLink = createHttpLink({
  uri: "http://localhost:3030/",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = window.sessionStorage.getItem("token")
    ? window.sessionStorage.getItem("token")
    : "";
  // return the headers to the context so httpLink can read them

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
// const cache = new InMemoryCache({
//   dataIdFromObject: (object) => {
//     switch (object.__typename) {
//       // User is whatever type "me" query resolves to
//       case "User":
//         return object.name;
//       default:
//         return object.id || object._id;
//     }
//   },
// });
// Set up cache persistence.
// persistCache({
//   cache,
//   storage: window.localStorage,
// });

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <ApolloProvider client={client}>{<App />}</ApolloProvider>
    </CookiesProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
