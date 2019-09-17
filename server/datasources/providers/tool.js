const { RESTDataSource } = require('apollo-datasource-rest');
const toolReducer = require('../reducers/tool');

class ToolProvider extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8081/api/';
  }

  async getTools(){
    const response = await this.get('tools');

    return response.response.map(item => toolReducer(item));
  }
}

module.exports = ToolProvider;

