const db = require('../config/connection');
const { User, Requests } = require('../models');
const userSeeds = require('./userSeeds.json');
const requestSeeds = require('./requestSeeds.json');

db.once('open', async () => {
  try {
    await Requests.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < requestSeeds.length; i++) {
      const { _id, requestSender } = await Requests.create(requestSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: requestSender },
        {
          $addToSet: {
            Request: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Successfully seeded');
  process.exit(0);
});
