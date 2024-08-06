<template>
    <div class="mx-auto mb-10 mt-36 w-full max-w-custom rounded-2xl bg-white p-8 shadow-2xl md:w-9/12">
        <FormKit type="form" label="Next step" :actions="false" @submit="onSubmit">
            <div class="mt-4 flex items-center justify-between">
                <h1 class="text-lg font-medium md:text-3xl">Create Property Listing</h1>
                <p class="text-base">Step 4 of 5</p>
            </div>
            <h2 class="mt-5 flex items-center gap-2 text-2xl font-medium">
                Deal Room
                <p class="text-sm font-normal">(Optional)</p>
            </h2>
            <div>
                <div class="relative flex flex-col rounded border border-dashed border-gray-400 p-4 text-gray-400">
                    <div ref="dnd"
                        class="relative flex cursor-pointer flex-col rounded border border-dashed border-gray-200 text-gray-400">
                        <div class="flex flex-col items-center justify-center gap-3 py-4 text-center">
                            <svg width="32" height="34" viewBox="0 0 32 34" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21.1866 0H2.44028C1.78013 0.0159156 1.15354 0.268448 0.696672 0.702724C0.239802 1.137 -0.0104356 1.71793 0.000333742 2.31929V31.6807C-0.0104356 32.2821 0.239802 32.863 0.696672 33.2973C1.15354 33.7316 1.78013 33.9841 2.44028 34H29.5597C30.2199 33.9841 30.8465 33.7316 31.3033 33.2973C31.7602 32.863 32.0104 32.2821 31.9997 31.6807V9.61714L21.1866 0ZM19.9999 10.9286V2.23429L29.733 10.9286H19.9999Z"
                                    fill="#9E9E9E" />
                            </svg>
                            <span class="text-center font-medium text-gray-600">
                                Drop your deal room files here. <br />
                                <div class="flex items-center py-4">
                                    <div class="h-px flex-grow bg-gray-400"></div>
                                    <span class="flex-shrink px-4 text-base font-light text-gray-500">or</span>
                                    <div class="h-px flex-grow bg-gray-400"></div>
                                </div>
                                <span
                                    class="flex flex-col items-center justify-center rounded-full bg-primary px-4 py-2 text-black">
                                    <label for="files" class="cursor-pointer">Browse files</label>
                                    <input id="files" class="hidden w-full" multiple type="file"
                                        accept=".png,.jpg,.jpeg,.pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                        @change="handleFileUpload" />
                                </span>
                            </span>
                        </div>
                    </div>
                    <div class="grid w-full grid-cols-3 gap-4 md:grid-cols-8">
                        <div v-for="(document, index) in uploadedDocuments" :key="document.name">
                            <div class="relative flex cursor-move select-none flex-col items-center overflow-hidden rounded border bg-gray-100 text-center"
                                :data-index="index">
                                <p class="px-3 py-2">{{ document?.name }}</p>
                                <button class="absolute right-0 top-0 z-50 rounded-bl bg-white p-1 focus:outline-none"
                                    type="button" @click="remove(index)">
                                    <svg class="h-4 w-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-8 rounded-md bg-zinc-50 p-6">
                    <div class="sm:flex sm:items-center">
                        <div class="sm:flex-auto">
                            <h1 class="text-base font-semibold leading-6 text-gray-900">Uploaded Documents</h1>
                        </div>
                    </div>
                    <div class="mt-4 flow-root">
                        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <table class="min-w-full divide-y divide-gray-300">
                                    <thead>
                                        <tr>
                                            <th scope="col"
                                                class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                                Filename
                                            </th>
                                            <th scope="col"
                                                class="px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Category</th>
                                            <th scope="col"
                                                class="px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Permission</th>
                                            <th scope="col"
                                                class="px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Cost for update
                                            </th>
                                            <th scope="col"
                                                class="px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Request Verification
                                            </th>
                                            <th scope="col"
                                                class="px-2 py-3.5 text-left text-sm font-semibold text-gray-900">Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(field, index) in additionalData" :key="index">
                                            <td class="py-2 pl-4 pr-3 text-sm text-black sm:pl-0">{{
            uploadedDocuments[index]?.name }}</td>
                                            <td class="px-2 py-2 text-sm font-medium text-gray-900">
                                                <FormKit :id="index + ''" v-model:model-value="field.category"
                                                    type="select">
                                                    <option v-for="el in categoryOptions" :key="el" :value="el">
                                                        {{ el }}
                                                    </option>
                                                </FormKit>
                                            </td>
                                            <td class="px-2 py-2 text-sm text-gray-900">
                                                <FormKit v-model="field.permission" type="select">
                                                    <option v-for="el in permissionOptions" :key="el" :value="el">
                                                        {{ el }}
                                                    </option>
                                                </FormKit>
                                            </td>
                                            <td class="px-2 py-2 text-sm text-gray-500">
                                                <FormKit v-model:model-value="field.cost" type="number" min="0"
                                                    placeholder="e.g.$10" />
                                            </td>
                                            <td class="px-2 py-2 text-sm text-gray-500">
                                                <div class="ml-12">
                                                    <FormKit v-model:model-value="field.verification" type="checkbox" />
                                                </div>
                                            </td>
                                            <td class="px-2 text-sm text-gray-500">
                                                <div class="flex items-center justify-start">
                                                    <svg width="19" height="14" viewBox="0 0 19 14" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.1136 6.21584C18.5434 6.75825 18.5434 7.4905 18.1136 8.03203C16.7595 9.73711 13.5109 13.2479 9.71813 13.2479C5.92535 13.2479 2.67673 9.73711 1.32269 8.03203C1.11354 7.77231 1 7.45281 1 7.12394C1 6.79506 1.11354 6.47556 1.32269 6.21584C2.67673 4.51076 5.92535 1 9.71813 1C13.5109 1 16.7595 4.51076 18.1136 6.21584V6.21584Z"
                                                            stroke="#8D8D8D" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path
                                                            d="M9.71834 9.7486C11.221 9.7486 12.4391 8.57355 12.4391 7.12406C12.4391 5.67456 11.221 4.49951 9.71834 4.49951C8.2157 4.49951 6.99756 5.67456 6.99756 7.12406C6.99756 8.57355 8.2157 9.7486 9.71834 9.7486Z"
                                                            stroke="#8D8D8D" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                    </svg>
                                                    <TheCrossIcon class="cursor-pointer" @click="remove(index)" />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-5 mt-5 flex items-start justify-between">
                <TheButton :button-text="'Skip'" @click="emits('skipStep')" />
                <TheNextButton @click="onSubmit" />
            </div>
        </FormKit>
    </div>
</template>

<script setup>
const emits = defineEmits(['skipStep']);
const uploadedDocuments = reactive([]);
const additionalData = reactive([]);
const handleFileUpload = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
        uploadedDocuments.push(files[i]);
        additionalData.push({
            category: '',
            permission: 'Free View',
            cost: '',
            verification: false,
            deal_room: true,
        });
    }
};
const remove = (index) => {
    additionalData.splice(index, 1);
    uploadedDocuments.splice(index, 1);
};
const categoryOptions = [
    'Title Deed',
    'Land Sruvey',
    'Zoning Documents',
    'Regulatory Documents',
    'Internal Procedures and Reporting',
    'Financials',
    'Survey and Zoning Documents',
    'Construction documents',
    'Outstanding Litigation',
];
const permissionOptions = ['Free View', 'Downloadable', 'Restricted View'];
</script>
