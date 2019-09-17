const { gql } = require('apollo-server');

const typeDefs = gql`
  type Tool {
    id: Int!
    name: String!
  }
  
  type Market {
    id: Int!
    name: String!
  }
  
  type InvestProfile {
    id: Int!
    name: String!
    description: String!
  }
  
  type Author {
    id: Int!
    firstName: String!
    lastName: String!
    middleName: String
    company: String
    position: String
    photoBase64: String
    photoFormat: String!
    email: String!
    infoHtml: String!
  }
  
  type Currency {
    id: String!
    name: String!
  }
  
  type Duration {
    id: Int!
    name: String!
    Days: Int!
  }
  
  type Benchmark {
    id: Int!
    name: String!
  }
  
  type Service {
    id: Int!
    name: String!
  }
  
  type StrategyPosition {
    strategyId: ID!
    symbol: String!
    name: String!
    entryTime: String!
    avgPrice: Float!
    weight: Float!
  }
  
  type StrategyPL {
    strategyId: String!
    historyJson: String!
  }
  
  type HistoryPoint {
    t: Float!
    v: Float!
  }
  
  type Range {
    start: Float
    end: Float
  }
  
  type Strategy {
    id: ID!
    # authorId: Int!
    author: Author
    name: String!
    tag: String!
    infoHtml: String!
    descriptionHtml: String
    pictureFormat: String!
    pictureBase64: String
    toolDrawndown: Float!
    # currencyId: String!
    currency: Currency
    # minInvestProfileId: Int!
    minInvestProfile: InvestProfile
    subscriptionThreshold: Float!
    estimatedDrawdown: Float!
    estimatedProfit: Float!
    # durationId: Int!
    duration: Duration
    actualDrawdown: Float!
    actualProfit: Float!
    open: Boolean!
    leverage: Float!
    maxPositionWeight: Float!
    maxIndustryWeight: Float!
    isAlgostrategy: Boolean!
    cpacity: Float
    recommended: Boolean!
    benchmarkComparison: Float
    minInvestCalculation: Float
    # benchmarkId: Int!
    benchmark: Benchmark
    startDate: String
    showUnauthorizedWeights: Boolean!
    services: [Service]
    markets: [Market]
    tools: [Tool]
    positions: [StrategyPosition]
    # pLHistory: [StrategyPL]
    history: [HistoryPoint]
    subscriptionThresholdRange: Range
    pnLRange: Range
    dDRange: Range
  }
  
  input AuthorProposal {
    id: Int
    name: String!
    description: String!
    phone: String!
    email: String!
  }
  
  input AuthorInput {
    accept: Boolean!
    author: AuthorProposal
  }

  type Mutation {
    addAuthor(input: AuthorInput!): Int
  }

  type Query {
    tools: [Tool],
    markets: [Market],
    investProfiles: [InvestProfile],
    authors: [Author],
    author(id: Int!): Author,
    strategies: [Strategy],
    strategy(id: String!): Strategy,
    recommendedStrategies: [Strategy],
    topStrategies(limit: Int): [Strategy]
  }
`;

module.exports = typeDefs;
