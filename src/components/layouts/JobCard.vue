<template>
  <div class="bg-white rounded-lg shadow p-5 flex items-center gap-4 mb-4">
    <div class="bg-gray-200 rounded h-24 w-24"></div>
    <div class="flex-1">
      <h3 class="text-gray-500 text-sm font-semibold">Company Name</h3>
      <h2 class="text-lg font-bold text-gray-700">Senior Software Engineer</h2>
      <p class="text-gray-500 rounded border-2 border-gray-400 w-fit py-1 px-2 text-xs font-semibold">Full Time</p>
    </div>
    <div class="flex items-center self-end gap-5">
      <p class="text-gray-400 text-sm flex items-center"><span>
          <GlobeIcon class="mr-1 text-xs" />
        </span> New York</p>
      <p class="text-gray-400 text-sm flex items-center"><span>
          <ClockIcon class="mr-1 text-xs" />
        </span> 1 day ago</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import GlobeIcon from '../icons/GlobeIcon.vue';
import ClockIcon from '../icons/ClockIcon.vue';
</script>