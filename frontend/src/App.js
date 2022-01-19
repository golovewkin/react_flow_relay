import React from 'react';
import './App.css';
import "./App.css";
import {loadQuery, RelayEnvironmentProvider} from 'react-relay/hooks';
import RelayEnvironment from './relay/RelayEnvironment';
import Loader from "./components/Loader";
import SkillsList from "./components/SkillsList/SkillsList";
import {usePreloadedQuery} from "react-relay";
import graphql from "babel-plugin-relay/macro";
const { Suspense } = React;

const query = graphql`
    query AppQuery {
        frontEnd {
            id
            name
            skills {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
        }
        backEnd {
            id
            name
            skills {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
        }
    }
`;

const preloadedQuery = loadQuery(RelayEnvironment, query, {});

function App() {
  const { frontEnd, backEnd } = usePreloadedQuery(query, preloadedQuery);
  return (
    <div className="App">
      <header>Skills list</header>
      <section className='App__skills-wrapper'>
        <SkillsList data={frontEnd}/>
        <SkillsList data={backEnd}/>
      </section>
    </div>
  );
}

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
