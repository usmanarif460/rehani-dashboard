<template>
    <Menu as="div" class="relative inline-block">
        <div>
            <MenuButton class="flex items-center gap-2 rounded-full border border-stone-300 px-3 py-1.5">
                <svg class="block h-6 w-6 text-stone-300" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <img src="/public/images/card-user.png" class="h-6 w-6 cursor-pointer rounded-full" alt="" />
            </MenuButton>
        </div>

        <TransitionChild enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <MenuItems class="absolute right-0 z-50 mt-2 rounded-md bg-white px-6 py-4 shadow-md w-[10rem]">
                <!-- :class="isUserLoggedIn ? 'w-[35rem]' : 'w-[10rem]'" -->
                <!-- <div class="flex items-center border-b">
                    <div v-if="getLoggedInUserData.first_name || getLoggedInUserData.email"
                        class="flex w-full flex-col border-stone-300 py-4">
                        <h1 class="text-base font-semibold">
                            {{ getLoggedInUserData.first_name || getLoggedInUserData.company_name }}
                        </h1>
                        <h1 class="mt-1 block text-xs font-normal text-[#787878]">{{ getLoggedInUserData.email }}</h1>
                    </div>
                    <div>
                        <h1 class="text-base font-normal text-[#A7A7A7]">{{ getLoggedInUserData.user_role }}</h1>
                    </div>
                </div> -->
                <div class="mt-3 flex justify-between gap-2">

                    <div class="flex flex-col gap-4">
                        <div class="flex flex-col gap-2">
                            <h1 class="mb-2 text-xl">Settings</h1>
                            <a class="block text-base text-gray-700">
                                Profile
                            </a>
                            <a class="block text-base text-gray-700">
                                My Rehani
                            </a>
                            <a class="block cursor-pointer text-base text-red-700" @click="logoutUser"> Logout
                            </a>
                        </div>
                        <div class="flex flex-col gap-2">
                            <a class="block text-base text-gray-700" to="/login">Sign In </a>
                            <a class="block text-base text-gray-700" to="/signup"> Sign Up </a>
                            <a class="block text-base text-gray-700" to="/">About Us </a>
                            <a class="block text-base text-gray-700" to="/"> News Room</a>
                        </div>
                    </div>
                </div>
            </MenuItems>
        </TransitionChild>
    </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, TransitionChild } from '@headlessui/vue';



</script>
