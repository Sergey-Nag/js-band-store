export default class QueryApi {
  URL = 'https://js-band-store-api.glitch.me';

  static instance = null;

  static getInstance() {
    QueryApi.instance = QueryApi.instance ?? new QueryApi();

    return QueryApi.instance;
  }

  constructor() {
    this.token = null;
  }

  async query(method, path, data) {
    let response = null;

    try {
      const request = await fetch(this.URL + path, {
        method,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
      });

      response = {
        ok: request.ok,
        data: await request.json(),
      };
    } catch (error) {
      console.log(error);
    }

    return response;
  }

  setToken(token) {
    this.token = token;
  }

  async signin(username) {
    const request = await this.query('POST', '/signin', {
      username,
    });

    return request;
  }
}
