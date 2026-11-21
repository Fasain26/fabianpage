export const skillGroups = [
  { title: 'Technical Skills', items: ['Python', 'PostgreSQL', 'MySQL', 'Power-BI', 'Tableau', 'Ms Office', 'Machine Learning', 'IoT', 'Linux', 'Statistical Analysis', 'Artificial Inteligence', 'React JS'] },
  { title: 'Soft Skills', items: ['Communication', 'Teaching & Mentoring', 'Collaboration', 'Problem Solving'] },
  { title: 'Languages', items: ['Indonesian (Native)', 'English (Professional Working Proficiency)', 'Arabic (Limited Working Proficiency)'] },
];
export const skills = skillGroups[0].items;

export const experience = [
  {
    title: 'Coding Instructor',
    company: 'PT Generasi Kode Cerdas (KodeKiddo)',
    period: 'Feb 2025 - Feb 2026',
    points: [
      'Taught coding and STEM concepts to students using interactive and project-based learning approaches to enhance logical thinking and creativity',
      'Collaborated with fellow instructors to develop engaging lesson plans and ensure an effective and enjoyable learning experience for students.',
    ],
  },
];

export const projects = [
  {
    title: 'CUSTOMER CHURN PREDICTION SYSTEM',
    description:
      'Built an end-to-end churn prediction pipeline analyzing 7,000+ telecom customer records to identify at-risk customers before they leave.',
    image: '/images/Churn Analysis.jpeg',
    links: [
      { label: 'Source Code', url: 'https://github.com/Fasain26/telco-churn-analysis' },
      { label: 'Live App', url: 'https://telco-churn-analysis-098.streamlit.app/' },
    ],
  },
  {
    title: 'CUSTOMER SEGMENTATION ANALYSIS (RFM + K-MEANS)',
    description:
      'End-to-end RFM segmentation of 5,856 retail customers using PostgreSQL window functions, validated with K-Means (Python) and presented via a Tableau dashboard and React landing page.',
    image: '/images/RFM.jpeg',
    links: [{ label: 'Source Code', url: 'https://github.com/Fasain26/RFM-segmentation-project.git' },
            { label: 'Tableau Public', url: 'https://public.tableau.com/app/profile/fabiano.intama/viz/1_17905767398310/CustomerSegmentationAnalysisOnlineRetailIIRFM?publish=yes' },
    ],
  },
  {
    title: 'IOT TEMPERATURE MONITORING SYSTEM',
    description:
      'Built a real-time temperature monitoring device using ESP32 and a DS18B20 sensor, displaying live readings on an OLED screen, programmed in C++ (Arduino framework).',
    image: '/images/IoT.jpeg',
    links: [{ label: 'Source Code', url: 'https://github.com/Fasain26/Salary-YearsOfExperience.git' }],
  },
];

export const contactLinks = [
  { label: 'Email Me', url: 'mailto:fabianos.intama@binus.ac.id' },
  { label: 'GitHub', url: 'https://github.com/Fasain26/' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/fabiano-salmaen-intama/' },
  { label: 'Instagram', url: 'https://www.instagram.com/fabiano.salman?igsh=M2tkN21qcTQwd3Jm' },
];

export const education = {
  school: 'Binus University, Jakarta',
  degree: 'Computer Science',
  focus: 'Concentration in Database',
  period: 'Graduating December 2026',
};

export const tech = ['Python', 'SQL', 'Power BI', 'Machine Learning', 'Streamlit', 'ESP32', 'C++', 'React', 'Blockchain', 'Statistics'];

export const certifications = [
  { title: 'Bootcamp Data Analytics', issuer: 'RevoU', year: '2023', url: 'https://drive.google.com/file/d/1Pg6tP9YaVtfB7Le03hNo0cP-dTlYb1Om/view' },
  { title: 'Data Analytics Workshop: Tableau, KNIME, and Python', issuer: 'Patria&Co', year: '2024', url: 'https://drive.google.com/file/d/1WF1hW8AnGh-XxcWIePms7PEc2cpJOtVL/view?usp=sharing' },
  { title: 'SQL Course: Learn SQL from Beginner to Advanced', issuer: 'Udemy', year: '2026', url: 'https://www.udemy.com/certificate/UC-837813e0-d080-46cd-bcc6-28bb73f4f20e/'},
];
