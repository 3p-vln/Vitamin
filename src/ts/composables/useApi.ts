import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = 'https://www.mku-journal.online';

class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Auth
  async register(data: any) {
    return this.api.post('/auth/register', data);
  }

  async login(data: any) {
    return this.api.post('/auth/login', data);
  }

  async refreshToken(data: any) {
    return this.api.post('/auth/refresh-token', data);
  }

  async resetPassword(data: any) {
    return this.api.post('/auth/reset-password', data);
  }

  async checkResetToken(token: string) {
    return this.api.get(`/auth/check-reset-token?token=${token}`);
  }

  async setNewPassword(data: any) {
    return this.api.post('/auth/set-new-password', data);
  }

  // Catalog
  async getCatalogList() {
    return this.api.get('/catalog/all-list');
  }

  async getCatalogItem(id: string) {
    return this.api.get(`/catalog/${id}/info`);
  }

  async createOrder(data: any) {
    return this.api.post('/catalog/create-order', data);
  }

  async getRecommendations() {
    return this.api.get('/catalog/recommendations');
  }

  // Profile
  async getProfileInfo() {
    return this.api.get('/profile/info');
  }

  async getOrderHistory() {
    return this.api.get('/profile/order-history');
  }

  async updateProfile(data: any) {
    return this.api.put('/profile/update-profile', data);
  }

  async updateCardInfo(data: any) {
    return this.api.put('/profile/update-card-info', data);
  }

  async changePassword(data: any) {
    return this.api.put('/profile/change-password', data);
  }
}

export const useApi = new ApiService();
