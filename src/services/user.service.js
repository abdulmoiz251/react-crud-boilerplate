import http from "../utilities/http-common";

const route = '/users'

class UserService {
  getAll() {
    return http.get(route);
  }

  get(id) {
    return http.get(`${route}/${id}`);
  }

  create(data) {
    return http.post(route, data);
  }

  update(id, data) {
    return http.put(`${route}/${id}`, data);
  }

  delete(id) {
    return http.delete(`${route}/${id}`);
  }
}

export default new UserService();