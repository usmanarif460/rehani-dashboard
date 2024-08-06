<template>
  <div class="font-sans  w-full">
    <HomePageNavbar :tabs="homepageTabs" @tab-selected="handleTabSelected" :join-our-network="joinOurNetwork" />
    <component :is="currentComponent" class="mt-44 max-w-7xl   mx-auto"></component>
  </div>
</template>

<script setup>
import { ref, computed, defineAsyncComponent } from 'vue';
import { homepageTabs } from '../constants';
import HomePageNavbar from '@/components/Homepage/HomePageNavbar.vue';
const TheUsers = defineAsyncComponent(() => import('@/components/TheUsers.vue'));
const TheProperties = defineAsyncComponent(() => import('@/components/TheProperties.vue'));
const TheProjects = defineAsyncComponent(() => import('@/components/TheProjects.vue'));
const TheApplications = defineAsyncComponent(() => import('@/components/TheApplications.vue'));
const TheNotifcations = defineAsyncComponent(() => import('@/components/TheNotifications.vue'));
const joinOurNetwork = defineAsyncComponent(() => import('@/components/TheJoinOurNetworkButton.vue'));

// Define a ref to hold the current tab name
const currentTab = ref(homepageTabs[0]?.name);

// Map the tab names to the components
const components = {
  Users: TheUsers,
  Projects: TheProjects,
  Properties: TheProperties,
  Applications: TheApplications,
  Notifications: TheNotifcations
};

// Compute the current component based on the selected tab
const currentComponent = computed(() => components[currentTab.value]);

// Handle the tab-selected event
const handleTabSelected = (tabName) => {
  currentTab.value = tabName;
};
</script>

<style>
.navbar {
  box-shadow: 0px 4px 12px rgba(146, 146, 146, 0.07);
}
</style>
