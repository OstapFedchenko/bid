const resolvers = {
  Query: {
    tools: (_, __, { dataSources }) => dataSources.toolApi.getTools(),
    markets: (_, __, { dataSources }) => dataSources.marketApi.getMarkets(),
    investProfiles: (_, __, { dataSources }) => dataSources.investProfileApi.getInvestProfile(),
    authors: (_, __, { dataSources }) => dataSources.authorApi.getAuthors(),
    author: (_, { id }, { dataSources }) => dataSources.authorApi.getAuthor(id),
    strategies: (_, __, { dataSources }) => dataSources.strategyApi.getStrategies(),
    strategy: (_, { id }, { dataSources }) => dataSources.strategyApi.getStrategy(id),
    recommendedStrategies: (_, __, { dataSources }) => dataSources.strategyApi.getRecommendedStrategies(),
    topStrategies: (_, { limit = 6 }, { dataSources }) => dataSources.strategyApi.getTopStrategies(limit)
  },
  Mutation: {
    addAuthor: (_, input, { dataSources }) => dataSources.authorApi.addAuthor(input)
  }
};

module.exports = resolvers;
