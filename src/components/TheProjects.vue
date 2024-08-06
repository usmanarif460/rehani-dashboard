<template>
    <div class="mt-4 flow-root">
        <div class="flex items-center justify-between">
            <h1 class="text-2xl font-medium">Rehani Listings</h1>
            <div class="w-5/12 flex items-center gap-5 justify-center">
                <div class="w-7/12 relative max-w-sm items-center">
                    <Input id="search" type="text" placeholder="Search Users" class="pl-10" />
                    <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                        <Search class="size-4 text-muted-foreground" />
                    </span>
                </div>
                <div class="w-4/12">
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a User" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem v-for="(val, index) in users" :value="val" :key="index">
                                    {{ val }}
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
        <div class="-mx-4 mt-5 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table class="min-w-full divide-y-2 divide-gray-300">
                    <thead>
                        <tr>
                            <th scope="col" class="px-2 py-3.5 text-left text-sm font-semibold text-gray-400 w-1/5">
                                Project Title</th>
                            <th scope="col" class="px-2 py-3.5 text-center text-sm font-semibold text-gray-400 w-1/5">
                                Project Owner</th>
                            <th scope="col" class="px-2 py-3.5 text-center text-sm font-semibold text-gray-400 w-1/5">
                                Project Details</th>
                            <th scope="col" class="px-2 py-3.5 text-center text-sm font-semibold text-gray-400 w-1/5">
                                Status</th>
                            <th scope="col" class="px-2 py-3.5 text-center text-sm font-semibold text-gray-400 w-1/5">
                                Action</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        <tr v-for="(n, index) in 5" :key="index">
                            <td class="px-2 py-6 text-sm text-black underline font-medium w-1/5 text-left">Hemmings way
                            </td>
                            <td class="px-2 py-6 text-sm text-gray-900 flex items-center justify-center gap-3 ">
                                <img src="/public/images/card-user.png" class="h-12 w-12 cursor-pointer rounded-full"
                                    alt="">
                                <div class="flex flex-col">
                                    <h1 class="font-medium text-black text-sm underline">John Doe</h1>
                                    <p class="text-neutral-400 text-sm">Agent</p>
                                </div>
                            </td>
                            <td class="px-2 py-6 text-sm text-neutral-400 w-1/5 text-center">Nill</td>
                            <td class="px-2 py-6 text-sm text-gray-900 w-1/5">
                                <div class="w-8/12 mx-auto">
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem v-for="(val, index) in users" :value="val" :key="index">
                                                    {{ val }}
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </td>
                            <td class="px-2 py-6 text-sm text-gray-900 w-1/5">
                                <div class="flex items-center justify-center">
                                    <TheButton button-text="Approve" class="mx-auto" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Input } from './ui/input';
import { Search } from 'lucide-vue-next'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import TheButton from './TheButton.vue';
const users = ['Project Listings', 'Agent Listings', 'Agency Listings']
</script>
