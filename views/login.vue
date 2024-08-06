<template>
    <main class="flex items-center max-w-7xl mx-auto justify-center md:h-screen md:overflow-y-hidden">
        <div
            class="mx-auto flex w-full max-w-custom flex-col items-center justify-between gap-8 p-8 md:flex-row xl:p-0">
            <div class="w-full rounded-lg bg-white sm:mx-auto ">
                <div class="flex w-full items-center justify-center md:justify-center">
                    <TheLogo />
                </div>
                <form type="form">
                    <div class="mt-8 w-6/12 mx-auto  overflow-hidden rounded-lg lg:w-auto">
                        <div class="mt-4 w-6/12 mx-auto flex flex-col gap-4">
                            <div>
                                <div class="pb-1 text-xs font-normal text-zinc-600">Email<span
                                        class="required-field"></span></div>
                                <Input id="email" type="email" placeholder="Enter Email" v-model="email" />
                            </div>
                            <div>
                                <div class="pb-1 text-xs font-normal text-zinc-600">Password<span
                                        class="required-field"></span></div>
                                <Input id="password" type="password" placeholder="Enter Password" v-model="password" />
                            </div>
                        </div>
                        <div class="my-6 flex items-center justify-center">
                            <TheButton :button-text="'Login'" :loading="showLoader" type="submit" />

                        </div>


                    </div>

                </form>
            </div>

        </div>
    </main>
</template>

<script setup>
import TheLogo from './components/TheLogo.vue';
import TheButton from '@/components/TheButton.vue';
import { Input } from '../src/components/ui/input';

import { ref } from 'vue';
import { Section } from 'lucide-vue-next';

const showLoader = ref(false);
const email = ref('');
const password = ref('');
// async function onSubmit() {
//     try {
//         showLoader.value = true;
//         const isSuccessFull = await useUsersStore.checkIfAgencyExists(email.value);
//         if (isSuccessFull) {
//             userAlreadyExists.value = true;
//         } else {
//             userAlreadyExists.value = false;
//             const isSuccessFull = await useUsersStore.login(email.value, password.value);
//             if (isSuccessFull) {
//                 const router = useRouter();
//                 router.push('/');
//             }
//         }
//     } catch (e) {
//         console.log(e);
//     } finally {
//         showLoader.value = false;
//     }
// }
</script>
<style scoped>
.required-field::after {
    content: '*';
    color: red;
    margin-left: 2px;
}
</style>