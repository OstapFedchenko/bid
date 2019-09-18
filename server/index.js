const { ApolloServer } = require('apollo-server');

const typeDefs = require('./shema');
const resolvers = require('./resolvers');

const MarketProvider = require('./datasources/providers/market');
const ToolProvider = require('./datasources/providers/tool');
const InvestProfileProvider = require('./datasources/providers/investProfile');
const StrategyProvider = require('./datasources/providers/strategy');
const AuthorProvider = require('./datasources/providers/author');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    toolApi: new ToolProvider(),
    marketApi: new MarketProvider(),
    investProfileApi: new InvestProfileProvider(),
    strategyApi: new StrategyProvider(),
    authorApi: new AuthorProvider()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
