const axios = require('axios')

const getAll = async (pageNumber, sort) => {
  const sortTitle = sort.toLowerCase();

  try {
    const response = await axios.get(`https://api.themoviedb.org/4/list/28?page=${pageNumber}&api_key=${process.env.API_KEY}&sort_by=title.${sortTitle}`);
    return response.data.results;
  } catch (error) {
    throw error
  }

};

module.exports = getAll;