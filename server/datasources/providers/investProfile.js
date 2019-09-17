const { RESTDataSource } = require('apollo-datasource-rest');
const investProfileReducer = require('../reducers/investProfile');

class InvestProfileProvider extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8081/api/';
  }

  async getInvestProfile(){
    const response = await this.get('investprofile');

    return response.response.map(item => investProfileReducer(item));
  }
}

module.exports = InvestProfileProvider;

