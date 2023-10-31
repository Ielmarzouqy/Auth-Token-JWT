const Role = require('../models/roleModel');

const getRoles = async (req, res) => {
  console.log('rolllee');
  try {
    const roles = await Role.find();

    res.status(200).json(roles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
module.exports = getRoles;
