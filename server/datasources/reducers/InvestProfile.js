const investProfileReducer = investProfile => {

  return {
    id: investProfile.id,
    name: investProfile.name,
    description: investProfile.description
  }
};

module.exports = investProfileReducer;
