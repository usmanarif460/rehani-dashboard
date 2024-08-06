<!-- eslint-disable vue/no-v-html -->
<template>
    <div class="w-full lg:px-0" :class="tabsMaxWidth">
        <TabGroup :default-index="selectedIndex">
            <TabList class="z-30 mx-auto flex items-center justify-between space-x-1" :class="fixTabs">
                <div class="relative flex w-full items-center px-3 lg:px-0" :class="filterContainer">
                    <div :class="tabsStyle" class="scrollbar-hide overflow-auto">
                        <Tab v-for="tab in tabsList" :key="tab" v-slot="{ selected }" as="template">
                            <button
                                class="flex cursor-pointer items-center gap-2 px-4 text-xs font-medium outline-none md:text-sm lg:text-base"
                                :class="[selected ? isActive : ` ${notActive}`]">
                                <span v-if="tab.icon" v-html="tab.icon"></span>
                                <span> {{ tab?.name }}</span>
                            </button>
                        </Tab>
                    </div>

                    <component :is="headingForTabs" v-if="headingForTabs"></component>
                </div>
            </TabList>
            <TabPanels v-for="componentName in componentsList" :key="componentName" class="w-full" :class="tabsPanel">
                <TabPanel>
                    <component :is="componentName"></component>
                </TabPanel>
            </TabPanels>
        </TabGroup>
        <slot />
    </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
defineProps({
    tabsList: {
        type: Array,
        default: () => [],
    },
    componentsList: {
        type: Array,
        default: () => [],
    },
    headingForTabs: {
        type: Object,
        default: () => { },
    },
    tabsStyle: {
        type: String,
        default: '',
    },
    isActive: {
        type: String,
        default: '',
    },
    notActive: {
        type: String,
        default: '',
    },
    fixTabs: {
        type: String,
        default: '',
    },
    tabsPanel: {
        type: String,
        default: '',
    },
    filterContainer: {
        type: String,
        default: 'justify-center',
    },
    tabsMaxWidth: {
        type: String,
        default: '',
    },


    isHomepage: {
        type: Boolean,
        default: null,
    },

    selectedIndex: {
        type: Number,
        default: 0,
    },
});

</script>
<style lang="css">
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>
