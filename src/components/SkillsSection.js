

function SkillsSection() {
    const skillCategories = [
      {
        title: "Programming Languages",
        skills: ["Python", "JavaScript", "C++"],
      },
      {
        title: "Web Development",
        skills: ["React", "Node.js", "Next.js", "Tailwind CSS", "HTML/CSS"],
      },
      {
        title: "Databases",
        skills: ["MySQL", "MongoDB"],
      },
    ];
  
    return (
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow">
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
export default SkillsSection;