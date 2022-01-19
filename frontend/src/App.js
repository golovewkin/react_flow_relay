import React, {useState} from 'react';
import './App.css';
import "./App.css";
import {loadQuery, RelayEnvironmentProvider} from 'react-relay/hooks';
import RelayEnvironment from './relay/RelayEnvironment';
import Loader from "./components/Loader";
import SkillsList from "./components/SkillsList/SkillsList";
import {usePreloadedQuery} from "react-relay";
import graphql from "babel-plugin-relay/macro";
import mockImg from './assets/mock.png'
import AddSkillPopup from "./components/AddSkillPopup/AddSkillPopup";

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
  const [openPopup, setOpenPopup] = useState(false);
  const { frontEnd, backEnd } = usePreloadedQuery(query, preloadedQuery);

  const onSuccess = (state) => {
  	try {
      console.log(state);
      console.log('TODO mutation');
      setOpenPopup(false)
  	} catch (e) {
  		console.log(e);
  	}
  };

  return (
    <div className="App">
      <AddSkillPopup open={openPopup} onSuccess={onSuccess} onClose={() => setOpenPopup(false)}/>
      <h1>Skills list</h1>
      <img className='App__mock' src={mockImg} alt=""/>
      <section className='App__skills-wrapper'>
        <section>
          <h1>{frontEnd.name} <button className='App__button' onClick={() => setOpenPopup(true)}>+</button></h1>
          <SkillsList data={frontEnd}/>
        </section>
        <section>
          <h1>{backEnd.name} <button className='App__button' onClick={() => setOpenPopup(true)}>+</button></h1>
          <SkillsList data={backEnd}/>
        </section>
      </section>
    </div>
  );
}

function AppRoot() {
  const { Suspense } = React;
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
