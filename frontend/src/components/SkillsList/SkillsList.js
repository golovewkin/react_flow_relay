import React from 'react';
import Skill from "../Skill";

const SkillsList = ({data}) => {
	return (
    <section>
      <ul>
        {data?.skills && data.skills?.edges && data.skills.edges.map(edge => (
          <>
            <Skill skill={edge.node}/>
          </>
        ))}
      </ul>
    </section>
  )
};

export default SkillsList;

