import { createStore } from 'vuex';
import jobsAPI from '../api';
import { Category, Job } from '../types';

export type State = {
  limit: number;
  jobs: Job[];
  jobsStatus: string;
  categories: Category[];
  job: Job;
};

const state: State = {
  limit: 10,
  jobs: [],
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
      const { jobs } = await jobsAPI().getRemoteJobs(payload);
      commit('setJobs', jobs);
      commit('setJobsStatus', 'idle');
    },
    async getCategories({ commit }) {
      const { jobs } = await jobsAPI().getCategories();
      commit('setCategories', jobs);
    },
  },
});

export default store;
