import React from 'react';
import Skill from "../Skill";

const SkillsList = ({data}) => {

  console.log(data[0]);

	return (
    <section>
      <ul>
        {data?.skills && data.skills?.edges && data.skills.edges.map((edge) => (
          <React.Fragment key={edge.node.id}>
            <Skill skill={edge.node}/>
          </React.Fragment>
        ))}
      </ul>
    </section>
  )
};

export default SkillsList;

