import React from 'react';

const SkillsList = ({data}) => {
	return (
    <section>
      <ul>
        {data?.skills && data.skills?.edges && data.skills.edges.map(edge => (
          <li key={edge.node.id}>{edge?.node?.name}</li>
        ))}
      </ul>
    </section>
  )
};

export default SkillsList;

