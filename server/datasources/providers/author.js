const { RESTDataSource } = require('apollo-datasource-rest');
const authorReducer = require('../reducers/author');

class AuthorProvider extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8081/api/';
  }

  willSendRequest(request) {
    request.headers.set('Content-Type', 'application/json');

    console.log(request)
  }

  async getAuthors(){
    const response = await this.get('authors');

    return response.response.map(item => authorReducer(item));
  }

  async getAuthor(id){
    const response = await this.get(`authors/${id}`);

    return authorReducer(response.response);
  }

  async addAuthor({input}){

    const data = JSON.stringify(input);
    const response = await this.post(`authors/request`,data );

    console.log(response);
  }

}

module.exports = AuthorProvider;

