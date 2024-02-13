interface SkillProps {
  color: string;
  skill: string;
  emoji: string;
}

const Skill: React.FC<SkillProps> = ({ color, skill, emoji }) => {
  return (
    <div
      className="skill"
      style={{ backgroundColor: color }}
    >
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
};

export default Skill;
