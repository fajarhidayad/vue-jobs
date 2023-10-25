<template>
  <section class="rounded-xl bg-gray-100 py-10 px-5 mb-8">
    <div class="bg-white rounded p-2 flex justify-between gap-2 items-center max-w-2xl mx-auto">
      <label for="title" class="ml-2">
        <BriefcaseIcon />
      </label>
      <input name="title" v-model="title" class="bg-transparent flex-1 focus:outline-0"
        placeholder="Title, companies, expertise or benefits" />
      <button class="bg-blue-500 text-white px-8 py-3 rounded">Search</button>
    </div>
  </section>

  <section class="grid grid-cols-3 gap-5">
    <div class="col-span-1 bg-white rounded-lg shadow p-5 border self-start">
      <h2 class="text-lg font-bold mb-4 text-gray-700">Job Type</h2>
      <ul class="mb-7">
        <li class="mb-2 text-gray-700">
          <label for="fulltime" class="flex">
            <input type="checkbox" name="fulltime" id="fulltime" class="mr-2" />
            <p>Full Time</p>
          </label>
        </li>
      </ul>
      <h2 class="text-lg font-bold mb-4 text-gray-700">Location</h2>
      <div>
        <div class="bg-white rounded border mb-4 py-3 px-2 flex items-center">
          <GlobeIcon class="text-gray-500 mr-2" />
          <input class="focus:outline-none text-sm flex-1" placeholder="City, state, zip code or country" />
        </div>
        <div class="mb-2 text-gray-700">
          <label for="london" class="flex">
            <input type="radio" id="london" name="location" class="mr-2" value="london" />
            <p>London</p>
          </label>
          <label for="newyork" class="flex">
            <input type="radio" id="newyork" name="location" class="mr-2" value="newyork" />
            <p>New York</p>
          </label>
          <label for="amsterdam" class="flex">
            <input type="radio" id="amsterdam" name="location" class="mr-2" value="amsterdam" />
            <p>Amsterdam</p>
          </label>
        </div>
      </div>
    </div>

    <div class="col-span-2">
      <JobCard v-for="job in jobs" :key="job.id" />
    </div>
  </section>
</template>

<script setup lang="ts">
import BriefcaseIcon from '../components/icons/BriefcaseIcon.vue';
import GlobeIcon from '@/components/icons/GlobeIcon.vue';
import JobCard from '@/components/layouts/JobCard.vue';
import { ref } from 'vue';

const title = ref('');
const jobs = ref([
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
])
</script>