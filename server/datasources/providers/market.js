const { RESTDataSource } = require('apollo-datasource-rest');
const marketReducer = require('../reducers/market');

class MarketProvider extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8081/api/';
  }

  async getMarkets(){
    const response = await this.get('markets');

    return response.response.map(item => marketReducer(item));
  }
}

module.exports = MarketProvider;

