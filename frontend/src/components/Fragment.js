import React from 'react';
const {graphql, useFragment} = require('react-relay');

export function FragmentComponent(props) {
  const data = useFragment(
    graphql`
        fragment Fragment on Skill {
            name
        }
    `,
    props.skill,
  );

  return (
    <>
      <h1>{data.name}</h1>
    </>
  );
}
