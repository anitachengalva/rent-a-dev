const db = require('../config/connection');
const { Skill } = require('../models');

db.once('open', async () => {

  await Skill.deleteMany();

  const skills = await Skill.insertMany([
    { skills: 'HTML' },
    { skills: 'CSS' },
    { skills: 'JavaScript' },
    { skills: 'React' },
    { skills: 'GraphQL' },
    { skills: 'Node' }
  ]);

  console.log('Sucessfully seeded skills');

  process.exit();
});
