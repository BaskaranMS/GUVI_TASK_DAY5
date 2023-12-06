const resume = {
    "profile": {
      "name": "BASKARAN M S",
      "contact": {
        "email": "baskaran.ms.official@gmail.com",
        "phone": 6385881004,
        "address": "plot no 5, raja rajan nagar second street nanjikottai road",
        "city": "Thanjavur",
        "state": "Tamil Nadu",
        "country": "India",
        "postal code": 613006
      }
    },
    "education": [
      {
        "degree": "higher secondary",
        "school": "don bosco matric higher secondary school",
        "year": 2021
      },
      {
        "degree": "Bachelor of Engineering in Computer Science Engineering",
        "school": "parisutham Institute of technology and science",
        "year": 2025
      }
    ],
    "skills": [
      "MERN Stack Development",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "HTML",
      "CSS",
      "Git"
    ],
    "experience": [
      {
        "position": "sales boy in bakery",
        "year": "2020 - 2022"
      }
    ],
    "working-projects": {
      "title": "college Website",
      "description": "Developing a full-stack website using the MERN stack."
    },
    "languages": [
      "English (Fluent)",
      "Your Native Language (if different)"
    ],
    "extra-curricular-activities": {
      "discipline": "cricket",
      "representation": "district level",
      "teams": ["thanjavur district cricket association", "rvmcc", "pits college"]
    },
    "interest": [
      "cricket",
      "football",
      "music",
      "games"
    ],
    "hobby": "travelling"
  };
  
//iterating the json

//1.for-loop

for (let key in resume) {
  if (resume.hasOwnProperty(key)) {
    console.log(`${key}: ${JSON.stringify(resume[key])}`);
  }
}

//2.for...in loop

for (let key in resume) {
    if (resume.hasOwnProperty(key)) {
      console.log(`${key}: ${JSON.stringify(resume[key])}`);
    }
  }

  //3.for...of loop

  for (let education of resume.education) {
    console.log(`Degree: ${education.degree}, School: ${education.school}, Year: ${education.year}`);
  }
  
  for (let skill of resume.skills) {
    console.log(`Skill: ${skill}`);
  }
  
  for (let experience of resume.experience) {
    console.log(`Position: ${experience.position}, Year: ${experience.year}`);
  }
  
  for (let language of resume.languages) {
    console.log(`Language: ${language}`);
  }
  
  for (let team of resume.extraCurricularActivities.teams) {
    console.log(`Team: ${team}`);
  }
  
  for (let interest of resume.interest) {
    console.log(`Interest: ${interest}`);
  }

  
  //4.for...each loop

  resume.education.forEach(education => {
    console.log(`Degree: ${education.degree}, School: ${education.school}, Year: ${education.year}`);
  });
  
  resume.skills.forEach(skill => {
    console.log(`Skill: ${skill}`);
  });
  
  resume.experience.forEach(experience => {
    console.log(`Position: ${experience.position}, Year: ${experience.year}`);
  });
  
  resume.languages.forEach(language => {
    console.log(`Language: ${language}`);
  });
  
  resume.extra-curricular-activities.teams.forEach(team => {
    console.log(`Team: ${team}`);
  });
  
  resume.interest.forEach(interest => {
    console.log(`Interest: ${interest}`);
  });
  