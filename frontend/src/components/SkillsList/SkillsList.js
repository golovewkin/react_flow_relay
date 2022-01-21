import React from 'react';

const SkillsList = ({data}) => {
	return (
    <section>
      <ul>
        {data?.skills && data.skills?.edges && data.skills.edges.map((edge, i) => (
          <React.Fragment key={edge.node.id}>
            <Skill skill={edge.node}/>
          </React.Fragment>
        ))}
      </ul>
    </section>
  )
};

export default SkillsList;

