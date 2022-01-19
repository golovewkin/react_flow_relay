import React, {useState} from 'react';
import './App.css';
import "./App.css";
import {loadQuery, RelayEnvironmentProvider} from 'react-relay/hooks';
import RelayEnvironment from './relay/RelayEnvironment';
import Loader from "./components/Loader";
import SkillsList from "./components/SkillsList/SkillsList";
import {useMutation, usePreloadedQuery} from "react-relay";
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

const mutation = graphql`
    mutation AppSkillMutation($skillName: String!, $areaId: ID!) {
        introduceSkill(input: { skillName: $skillName, areaId: $areaId }) {
            skill {
                name
            }
        }
    }
`;

const preloadedQuery = loadQuery(RelayEnvironment, query, {});

function App() {
  const [popupState, setPopupState] = useState({open: false, areaId: ''});
  const { frontEnd, backEnd } = usePreloadedQuery(query, preloadedQuery);
  // TODO isInFlight use
  const [commit] = useMutation(mutation);

  const onSuccess = (skillName, areaId) => {
    commit({
      variables: {
        skillName,
        areaId,
      },
      onCompleted(data) {
        // TODO: how to update list???? refetch
        console.log(data);
        setPopupState({open: false, areaId: ''});
      },
      onError(error){
        console.log(error);
        alert('something went wrong...')
      }
    });
  };

  return (
    <div className="App">
      <AddSkillPopup
        open={popupState.open}
        onSuccess={(areaName) => onSuccess(areaName, popupState.areaId)}
        onClose={() => setPopupState({open: false, areaId: ''})}/>
      <h1>Skills list</h1>
      <img className='App__mock' src={mockImg} alt=""/>
      <section className='App__skills-wrapper'>
        <section>
          <h1>
            <span>{frontEnd.name} </span>
            <button className='App__button' onClick={() => setPopupState({open: true, areaId: frontEnd.id})}>+</button>
          </h1>
          <SkillsList data={frontEnd}/>
        </section>
        <section>
          <h1>
            <span>{backEnd.name}</span>
            <button className='App__button' onClick={() => setPopupState({open: true, areaId: backEnd.id})}>+</button></h1>
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
