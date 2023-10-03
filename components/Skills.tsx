interface SkillsProps {
    texto: string;
  }

const Skills = ({ texto } : SkillsProps) => {
  return (
    <div className="flex items-center mb-2">
      <div className="mr-4">
        <img src="/images/Skills.svg" alt="Skills" className="w-3 h-3" />
      </div>
      <div className=' text-sm text-slate-500'>{texto}</div>
    </div>
  );
};

export {Skills};