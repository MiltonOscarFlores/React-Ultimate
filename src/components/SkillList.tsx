import Skill from "./Skill";

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill
        skill="Maximum Physical Condition"
        emoji="💪🏋️‍♂️🔥"
        color="#3b3b3b" // Azul Oscuro
      />
      <Skill
        skill="Master Martial Artist"
        emoji="🥋👊🏆"
        color="#47476b" // Gris Oscuro
      />
      <Skill
        skill="Weapons Master"
        emoji="🗡️🔫🏹"
        color="#323146" // Azul Medianoche
      />
      <Skill
        skill="Expert Marksman"
        emoji="🎯🔫🏹"
        color="#20244b" // Azul Marino
      />
      <Skill
        skill="Advanced Intellect"
        emoji="🧠💡📚"
        color="#1c1d36" // Azul Oscuro
      />
      <Skill
        skill="Espionage"
        emoji="🕵️‍♂️🔍🌐"
        color="#34375f" // Gris Oscuro
      />
      <Skill
        skill="Strong Will"
        emoji="💪🤔🏋️‍♂️"
        color="#202355" // Azul Oscuro
      />
    </div>
  );
};

export default SkillList;
