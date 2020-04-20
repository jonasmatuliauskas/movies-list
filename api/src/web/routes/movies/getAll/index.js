const models = require('../../../../models');

const start = async (req, res) => {
  const { pageNumber, sort } = req.query;
  
  try {
    const movies = await models.movies.getAll(pageNumber, sort);
  
    res.status(200).json( movies );
  } catch (e) {
    throw e
  }
};

module.exports = start;
