const startDate = new Date('2019-08-01');
const yearsExp = Math.floor((new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25));

export const profile = {
  name: 'Angga Radifan Sumarna',
  title: 'Senior Software Engineer',
  roles: ['Frontend', 'Backend', 'Full Stack'],
  bio: [
    `I build full-stack products across fintech, healthcare, and commerce, with ${yearsExp}+ years spent turning product requirements into reliable interfaces, APIs, and deployment paths.`,
    'My recent work spans marketplace search flows, Telegram-based finance logging, Supabase integrations, and production dashboards in React, Node.js, Java, and TypeScript.',
    'The through-line is practical engineering with a playful interface sensibility: systems that hold up, screens that feel considered, and code that teams can keep extending.',
  ],
  cv: '/documents/Angga-Radifan-Sumarna-CV.pdf',
  linkedin: 'https://www.linkedin.com/in/anggaradifans/',
  github: 'https://github.com/anggaradifans',
  email: 'anggaradifans@gmail.com',
  site: 'https://radifans.my.id',
};
