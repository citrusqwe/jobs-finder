import axios from 'axios';
import { CategoriesResponse, Category, Job, JobsResponse } from '@/types';
const instace = axios.create({
  baseURL: 'https://remotive.com/api',
});

const jobsAPI = () => ({
  async getRemoteJobs(limit = 10): Promise<{ jobs: Job[] }> {
    try {
      const { data }: JobsResponse = await instace.get(
        `/remote-jobs?limit=${limit}`
      );
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  async getCategories(): Promise<{ jobs: Category[] }> {
    try {
      const { data }: CategoriesResponse = await instace.get(
        `/remote-jobs/categories`
      );
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
});

export default jobsAPI;
