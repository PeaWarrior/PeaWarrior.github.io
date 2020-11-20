import React from "react"
import StyledSkillsSection from "./Skills.styled"
import { Languages, Frontend, Backend, Database, Utilities } from "../../constants"

const Skills = () => {
  
  const renderData = (data) => {
    return data.map(skill => (
      <div key={skill.id}>
        {skill.icon}
        <p>
          {skill.name}
        </p>
      </div>
    ))
  }

  return (
    <StyledSkillsSection id="skills">
      <h4>SKILLS</h4>
      <div>
        <div>
          <h3>Languages</h3>
          {renderData(Languages)}
        </div>
        <div>
          <h3>Backend</h3>
          {renderData(Backend)}
        </div>
        <div>
          <h3>Database</h3>
          {renderData(Database)}
        </div>
        <div>
          <h3>Frontend</h3>
          {renderData(Frontend)}
        </div>
        <div>
          <h3>Utilities</h3>
          {renderData(Utilities)}
        </div>
      </div>
    </StyledSkillsSection>
  )
}

export default Skills
