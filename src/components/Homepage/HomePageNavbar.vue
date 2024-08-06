<template>
    <div>
        <div class="fixed left-0 top-0 z-50 w-screen shadow-md md:w-full" :class="navbarStyling">
            <nav class="relative mx-auto flex w-full  items-center justify-between gap-2 py-3 md:w-10/12 ">

                <TheLogo />
                <div class="hidden space-x-4 md:flex items-center justify-center basis-4/12">
                    <div v-for="(tab, index) in tabs" :key="index"
                        class="flex w-full cursor-pointer items-center justify-center space-x-2 px-4 py-1 transition duration-300 ease-in-out"
                        :class="{
            ' rounded-tl-xl border-b-2 border-primary px-4 py-3 text-black': activeTab === tab.name,
            'items-center justify-center px-4 py-3 text-neutral-400 outline-none': activeTab !== tab.name,
        }" @click="activateTab(tab.name)">
                        <span class="text-lg" v-html="tab.icon"></span>
                        <span class="text-sm">{{ tab?.name }}</span>
                    </div>
                </div>
                <div class="hidden items-center gap-2 md:flex">
                    <!-- <NotificationsDropDown /> -->
                    <NewHamburgerDropDown class="hidden sm:block" />
                </div>
            </nav>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import TheLogo from '../TheLogo.vue';
import NewHamburgerDropDown from '../NewHamburgerDropDown.vue';
const props = defineProps({
    joinOurNetwork: {
        type: Object,
        default: () => { },
    },
    navbarStyling: {
        type: String,
        default: '',
    },
    maxWidth: {
        type: String,
        default: '',
    },
    tabs: {
        type: Array,
        default: () => [],
    },
});
const emits = defineEmits(['tab-selected']);
const activeTab = ref(props.tabs[0]?.name);
// Method to activate a tab
const activateTab = (tabName) => {
    activeTab.value = tabName;
    emits('tab-selected', activeTab.value);
};
</script>

<style scoped>
.scrollable-content {
    width: 300px;
    height: 300px;
    overflow: auto;
}

.scrollable-content::-webkit-scrollbar {
    width: 19px;
}

.scrollable-content::-webkit-scrollbar-thumb {
    height: 25%;
    background-color: rgb(240, 196, 70);
    border-radius: 6px;
}

.scrollable-content::-webkit-scrollbar-track {
    background-color: #f0f0f0;
}

.scrollable-content {
    scrollbar-width: thin;
    scrollbar-color: rgb(240, 196, 70);
}
</style>
