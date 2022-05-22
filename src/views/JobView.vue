<template>
  <div class="flex">
    <section class="mb-16 pt-4 pl-8 md:pl-16 pr-8 w-full md:w-3/5 lg:w-3/4">
      <!-- <div class="back">
        Back to&nbsp;<router-link href="/">Remote jobs</router-link>&nbsp; &gt;
        &nbsp;
        <router-link href="/software-dev"> {{ job.category }} </router-link>
      </div> -->
      <h1 class="h1 hidden md:block">
        {{ job.title }}
      </h1>
      <div class="mt-8" v-html="job.description"></div>
      <div class="mt-8">
        <h2 class="text-xl mb-3">About The Company</h2>
        <div class="bg-pale-silver mt-2 p-4 rounded-xl">
          <div class="flex">
            <div class="flex-shrink-0 px-2">
              <img
                class="bg-white inline-block w-16 h-16 rounded-full"
                :alt="job.company_name"
                :src="job.company_logo"
              />
            </div>
            <div class="flex flex-col w-full">
              <a
                class="remotive-url"
                style="width: fit-content"
                href="https://remotive.com/remote-companies/spline-120092"
              >
                <h2 class="text-2xl font-bold underline mb-0">
                  {{ job.company_name }}
                </h2>
              </a>
              <!-- <span class="remotive-text-smaller w-2/3"
                >A 3d design tool for the web</span
              > -->
            </div>
          </div>
          <!-- <div class="mt-4 quotediv">
            <p>
              🌈 We are building a multi-dimensional design tool intended to
              create 3d content for the web. We want to make 3d easy and allow
              more people to explore the creative possibilities that a third
              dimension adds.<br /><br />✏️ We love design, computer graphics,
              and making visual tools for solving problems.
            </p>
          </div> -->
        </div>
      </div>
      <div class="my-8">
        <span class="h2 remotive-text-bigger mb-2">Similar Remote Jobs</span>
        <div class="mt-2">
          <ul style="list-style-type: none">
            <li>
              <div class="flex items-center p-2 bg-champange-pink rounded-3xl">
                <div class="flex-shrink-0 px-2">
                  <img
                    class="bg-white inline-block w-8 h-8 rounded-full"
                    alt=""
                    width="32"
                    height="32"
                    src="https://remotive.com/web/image/hr.job/971842/logo/64x64"
                  />
                </div>
                <div>
                  <div class="leading-6 mb-1">
                    <a
                      data-prevent="true"
                      class="remotive-url-visit block md:flex"
                      href="/remote-jobs/software-dev/senior-ios-engineer-ar-3d-metal-971842"
                    >
                      <span class="font-bold"
                        >Senior iOS Engineer (AR/3D/Metal)</span
                      >
                      <span
                        style="margin: 0 0.25rem"
                        class="font-bold hidden md:block"
                        >•</span
                      >
                      <span class="font-bold hidden md:block">Spline</span>
                      <span class="block md:hidden">Spline</span>
                    </a>
                  </div>
                  <div class="inline-flex items-center text-xs uppercase">
                    <span class="uppercase flex px-1 mr-1">
                      <img
                        src="@/assets/worldwide.svg"
                        alt="worldwide"
                        class="h-4 w-4"
                      />
                      Worldwide
                    </span>

                    <span
                      class="uppercase p-1 border border-chocolate rounded-3xl"
                    >
                      <a
                        class=""
                        data-prevent="true"
                        href="/remote-jobs/software-dev"
                        >Software Development</a
                      >
                    </span>
                  </div>
                </div>
                <div
                  class="hidden sm:flex items-center justify-between w-auto"
                  style="margin-left: auto"
                >
                  <span
                    class="h2 remotive-tag-pink remotive-text-default-color text-xs mr-2"
                    >Featured</span
                  >
                </div>
                <a
                  job-source="job_list_landing"
                  onclick="processApplyClick(this)"
                  role="button"
                  class="job-tile-apply hidden remotive-btn-chocolate mr-2 ml-auto sm:ml-0"
                  job-id="971842"
                >
                  Apply
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <div></div>
  </div>
  <div
    class="hidden md:pt-16 p-6 md:items-start md:justify-between md:flex-wrap md:flex md:content-left"
    id="footer-mobile"
  >
    <div class="mb-4">
      <a href="/" class="block mb-2 font-bold leading-5 uppercase">Remotive </a>
      <ul class="text-sm font-light" style="list-style-type: none">
        <li>
          <a href="https://blog.remotive.com/"> Blog </a>
        </li>
        <li>
          <a href="https://support.remotive.com/en/category/l3ahqd/"> Press </a>
        </li>
        <li>
          <a href="/assets"> Assets </a>
        </li>
        <li>
          <a href="https://support.remotive.com/en/article/ycrtby/">
            Sponsorship
          </a>
        </li>
        <li>
          <a href="/tools"> Remote Tools </a>
        </li>
        <li>
          <a href="/manifesto"> About Remotive </a>
        </li>
        <li>
          <a href="/community"> Remote Community </a>
        </li>
        <li>
          <a href="https://github.com/remotive-io/remote-jobs-api">
            Remotive Jobs API
          </a>
        </li>
        <li>
          <a
            href="https://github.com/remotive-io/remote-jobs-feed"
            style="display: flex"
          >
            Remotive Jobs RSS Feeds
            <div class="rss-symbol"></div>
          </a>
        </li>
      </ul>
    </div>
    <div class="mb-4">
      <span class="block mb-2 font-bold leading-5 uppercase"
        >Remote Work Tips
      </span>
      <ul class="text-sm text-light" style="list-style-type: none">
        <li>
          <a href="/remote-companies"> See all remote companies </a>
        </li>
        <li>
          <a href="/hire"> Hiring Remotely </a>
        </li>
        <li>
          <a href="/success-stories"> Remote Success Stories </a>
        </li>
        <li>
          <a href="/salaries"> Developer Salaries </a>
        </li>
        <li>
          <a href="https://support.remotive.com/en/article/17b70cx/">
            Remote Jobs Listing Template
          </a>
        </li>
        <li>
          <a href="https://support.remotive.com/en/article/1xarot3/">
            Remote Job Posting Rules
          </a>
        </li>
      </ul>
    </div>
    <div class="mb-4">
      <span class="block mb-2 font-bold leading-5 uppercase"
        >Remote Jobs News
      </span>
      <ul class="text-sm text-light" style="list-style-type: none">
        <li>
          <a href="https://blog.remotive.com"> Blog </a>
        </li>
        <li>
          <a href="/guides"> Guides </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="external noopener noreferrer"
            href="https://twitter.com/remotiveio"
          >
            Twitter
          </a>
        </li>
        <li>
          <a href="/webinar"> Webinar </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="external noopener noreferrer"
            href="https://www.linkedin.com/groups/8222112/"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://support.remotive.com/en/article/14sjtsn/">
            Frequently Asked Questions
          </a>
        </li>
      </ul>
    </div>
    <div class="mb-4">
      <span class="block mb-2 font-bold leading-5 uppercase">Remote Jobs </span>
      <ul class="text-sm text-light" style="list-style-type: none">
        <li>
          <a href="/remote-jobs"> Find Remote Jobs </a>
        </li>
        <li>
          <a href="/job/post/new"> Post Remote Jobs </a>
        </li>
        <li>
          <a href="/remote-jobs/software-dev">
            Remote Software Developer Job
          </a>
        </li>
        <li>
          <a href="/remote-jobs/devops"> Remote DevOps &amp; Sysadmin jobs </a>
        </li>
        <li>
          <a href="/remote-jobs/marketing"> Remote Marketing Jobs </a>
        </li>
        <li>
          <a href="/remote-jobs/data"> Remote Data Jobs </a>
        </li>
        <li>
          <a href="/remote-jobs/sales"> Remote Sales Jobs </a>
        </li>
        <li>
          <a href="/remote-jobs/business">
            Remote Business &amp; Management Jobs
          </a>
        </li>
        <li>
          <a href="/remote-jobs/customer-support">
            Remote Customer Service Jobs
          </a>
        </li>
        <li>
          <a href="/remote-jobs/design"> Remote Design Jobs </a>
        </li>
        <li>
          <a href="/remote-jobs/product"> Remote Product Jobs </a>
        </li>
        <li>
          <a href="/remote-teaching-jobs"> Remote Teaching Jobs </a>
        </li>
        <li>
          <a href="/remote-jobs/qa"> Remote QA Jobs </a>
        </li>
        <li>
          <a href="/remote-jobs/hr"> Remote HR &amp; People Jobs </a>
        </li>
        <li>
          <a href="/remote-jobs/finance-legal">
            Remote Finance &amp; Legal Jobs
          </a>
        </li>
        <li>
          <a href="/remote-jobs/writing"> Remote Copywriting Jobs </a>
        </li>
        <li>
          <a href="/remote-medical-jobs"> Remote Medical/Health Jobs </a>
        </li>
        <li>
          <a href="/remote-full-time-jobs"> Remote Full time Jobs </a>
        </li>
        <li>
          <a href="/remote-internship-jobs"> Remote Internships </a>
        </li>
        <li>
          <a href="/remote-freelance-jobs"> Remote Freelance Jobs </a>
        </li>
      </ul>
    </div>
    <div class="mb-4">
      <span class="block mb-2 font-bold leading-5 uppercase">Skills </span>
      <ul class="text-sm text-light" style="list-style-type: none">
        <li>
          <a href="/remote-javascript-jobs"> Remote javascript Jobs </a>
        </li>
        <li>
          <a href="/remote-python-jobs"> Remote python Jobs </a>
        </li>
        <li>
          <a href="/remote-java-jobs"> Remote Java Jobs </a>
        </li>
        <li>
          <a href="/remote-product-management-jobs">
            Remote Product management jobs
          </a>
        </li>
        <li>
          <a href="/remote-saas-jobs"> Remote SaaS Jobs </a>
        </li>
        <li>
          <a href="/remote-php-jobs"> Remote php Jobs </a>
        </li>
        <li>
          <a href="/remote-react-jobs"> Remote react Jobs </a>
        </li>
        <li>
          <a href="/remote-sql-jobs"> Remote sql Jobs </a>
        </li>
        <li>
          <a href="/remote-aws-jobs"> Remote AWS Jobs </a>
        </li>
        <li>
          <a href="/remote-linux-jobs"> Remote linux Jobs </a>
        </li>
        <li>
          <a href="/all-tags-index"> All job tags </a>
        </li>
        <li>
          <a href="/all-remote-companies-index"> All companies index </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import { Job } from '@/types';
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'JobView',
  computed: {
    job(): Job {
      return store.state.job;
    },
  },
});
</script>

<style></style>
