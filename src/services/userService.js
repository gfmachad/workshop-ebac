import httpRequest from '../infrastructure/httpRequest';

class UserService {
  constructor() {
    this.api = httpRequest('https://api.github.com/');
  }

  async getUserProfile(userLogin) {
    const result = await this.api.get(`users/${userLogin}`);

    console.log(result.data.id);

    return result.data;
  }
}

export default UserService;
