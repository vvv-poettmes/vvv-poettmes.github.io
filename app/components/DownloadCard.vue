<template>
    <div
        class="bg-blue-50 ring-1 ring-blue-300 rounded px-5 py-4 flex justify-between items-start justify-between transition"
    >
        <div class="self-center">
            <h2 class="text-lg font-medium">{{ title }}</h2>
            <p class="text-sm text-gray-500 mt-1">{{ description }}</p>
        </div>
        <a
            :href="file"
            download
            target="_blank"
            class="sm:mt-0 inline-block bg-blue-200 text-blue-500 px-6 py-1 rounded text-sm font-medium hover:bg-blue-200 transition"
        >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"
                ></path>
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12 14.25L12 4.75"
                ></path>
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M8.75 10.75L12 14.25L15.25 10.75"
                ></path>
            </svg>
        </a>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    file: String,
    description: String,
});
</script>
