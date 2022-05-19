import { AxiosResponse } from 'axios';

export type Job = {
  id: number;
  url: string;
  title: string;
  company_name: string;
  company_logo: string;
  category: string;
  job_type: string;
  publication_date: string;
  candidate_required_location: string;
  salary: string;
  description: string;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
};

export interface JobsResponse extends AxiosResponse {
  data: { jobs: Job[]; 'job-count': number };
}
export interface CategoriesResponse extends AxiosResponse {
  data: { jobs: Category[]; 'job-count': number };
}
