import React from 'react';

const SkillsList = ({data}) => {
	return (
    <section>
      <h1>{data.name}</h1>
      <ul>
        {data?.skills && data.skills?.edges && data.skills.edges.map(edge => (
          <li>{edge?.node?.name}</li>
        ))}
      </ul>
    </section>
  )
};

export default SkillsList;

