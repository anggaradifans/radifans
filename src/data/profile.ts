// Profile data — single source of truth
const startDate = new Date('2019-08-01');
const yearsExp = Math.floor((new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25));

export const profile = {
  name: 'Angga Radifan Sumarna',
  title: 'Senior Software Engineer',
  roles: ['Frontend', 'Backend', 'Full Stack'],
  bio: [
    `Senior Software Engineer passionate about building impactful digital solutions that solve real-world problems. With ${yearsExp}+ years of experience across fintech, healthcare, and e-commerce domains, I specialize in creating full-stack applications that prioritize performance, user experience, and scalability.`,
    'Key achievements include developing a modern marketplace platform with advanced search and real-time features, and creating an innovative personal finance tracker that seamlessly integrates Telegram bots with Supabase. Experienced in leading technical implementations using React, Node.js, Java, and cloud technologies.',
    'Always exploring emerging technologies and gaming industry trends to bring creative solutions to complex challenges.',
  ],
  cv: '/documents/Angga-Radifan-Sumarna-CV.pdf',
  linkedin: 'https://www.linkedin.com/in/anggaradifans/',
  github: 'https://github.com/anggaradifans',
  email: 'anggaradifans@gmail.com',
  site: 'https://radifans.my.id',
};
