import "./App.css";
import React from "react";
import fetchGraphQL from "./helpers/fetchGraphQL";

function App() {

  // When the component mounts we'll fetch a repository name
  React.useEffect( () => {
    let isMounted = true;
    
    const loadData = async () => {
      try {
        let isMounted = true;
        const response = await fetchGraphQL(`
          query RepositoryNameQuery {
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
          }
        `);
        if (!isMounted) {
          return;
        }
        console.log(response);
      } catch (e) {
        console.error(e);
      }
    }
    loadData()

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="App">
      <header># To Do</header>
    </div>
  );
}

export default App;
