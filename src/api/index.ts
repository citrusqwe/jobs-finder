import axios from 'axios';
import { CategoriesResponse, Category, Job, JobsResponse } from '@/types';
import qs from 'qs';
const instace = axios.create({
  baseURL: 'https://remotive.com/api',
});

type queryParams = {
  limit?: number;
  category?: string;
  company_name?: string;
  search?: string;
};

const jobsAPI = () => ({
  async getRemoteJobs(
    query: queryParams
  ): Promise<{ jobs: Job[]; 'job-count': number }> {
    try {
      const queryStrings = qs.stringify(query);
      const { data }: JobsResponse = await instace.get(
        `/remote-jobs?${queryStrings}`
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
