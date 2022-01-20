import React from 'react';
import {createFragmentContainer} from "react-relay";
const {graphql} = require('react-relay');

function Skill({data}) {
  return (
    <>
      <h1>{data.name}</h1>
    </>
  );
}

export default createFragmentContainer(Skill, graphql`
    fragment Skill_skill on Skill {
        name
    }
`)
