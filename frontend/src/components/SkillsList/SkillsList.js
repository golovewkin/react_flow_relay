import React from 'react';
import FragmentComponent from "../Fragment";

const SkillsList = ({data}) => {
	return (
    <section>
      <ul>
        {data?.skills && data.skills?.edges && data.skills.edges.map(edge => (
          <>
            <li key={edge.node.id}>{edge?.node?.id}</li>
            <FragmentComponent skill={edge.node}/>
          </>
        ))}
      </ul>
    </section>
  )
};

export default SkillsList;

