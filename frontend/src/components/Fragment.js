import React from 'react';
const {graphql} = require('react-relay');

export const fragment = graphql`
    fragment Fragment_data on Skill {
        name
    }
`;

export default function FragmentComponent({data}) {
  return (
    <>
      <h1>{data.name}</h1>
    </>
  );
}
