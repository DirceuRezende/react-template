import http from '@/config/http';

const service = {
  async getAll(): Promise<string> {
    return http.get('/');
  }
};

export default service;
