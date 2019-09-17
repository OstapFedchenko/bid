const { RESTDataSource } = require('apollo-datasource-rest');
const strategyReducer = require('../reducers/strategy');

class StrategyProvider extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8081/api/';
  }

  async getStrategies(){
    const response = await this.get('strategies');

    return response.response.map(item => strategyReducer(item));
  }

  async getStrategy(id){
    const response = await this.get(`strategies/${id}`);

    return strategyReducer(response.response);
  }

  async getRecommendedStrategies(id){
    const response = await this.get(`strategies/recommended`);

    return response.response.map(item => strategyReducer(item));
  }

  async getTopStrategies(limit){
    const response = await this.get(`strategies/top/${limit}`);

    return response.response.map(item => strategyReducer(item));
  }
}

module.exports = StrategyProvider;

