import { createStore } from 'vuex';
import jobsAPI from '../api';
import { Category, Job } from '../types';

export type State = {
  limit: number;
  jobs: Job[];
  jobsCount: number;
  jobsStatus: string;
  categories: Category[];
  job: Job;
};

const state: State = {
  limit: 10,
  jobs: [],
  jobsCount: 0,
  jobsStatus: 'idle',
  categories: [],
  job: {
    id: 0,
    url: '',
    title: '',
    company_name: '',
    company_logo: '',
    category: '',
    job_type: '',
    publication_date: '',
    candidate_required_location: '',
    salary: '',
    description: '',
  },
};

const store = createStore({
  state,
  mutations: {
    setJobs(state, payload: Job[]) {
      state.jobs = payload;
    },
    setJobsCount(state, payload: number) {
      state.jobsCount = payload;
    },
    setJobsStatus(state, payload: string) {
      state.jobsStatus = payload;
    },
    setCategories(state, payload: Category[]) {
      state.categories = payload;
    },
    setJob(state, payload: Job) {
      state.job = payload;
    },
  },
  actions: {
    async getJobs({ commit }, payload) {
      commit('setJobsStatus', 'loading');
      const data = await jobsAPI().getRemoteJobs(payload);
      commit('setJobs', data.jobs);
      commit('setJobsCount', data['job-count']);
      commit('setJobsStatus', 'idle');
    },
    async getCategories({ commit }) {
      const { jobs } = await jobsAPI().getCategories();
      commit('setCategories', jobs);
    },
  },
});

export default store;
