import React from 'react';
import {createFragmentContainer} from "react-relay";
import graphql from 'babel-plugin-relay/macro';

function Skill({skill}) {
  return (
    <>
      <li>{skill?.name}</li>
    </>
  );
}

export default createFragmentContainer(Skill, {
  skill: graphql`
      fragment Skill_skill on Skill {
          id
          name
      }
  `
})
