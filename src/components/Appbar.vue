<template>
    <v-app-bar
        color="blue darken-4"
        height="65px"
    >
        <v-toolbar-title
            style="color: white;"
        >
        {{ name }}</v-toolbar-title>
    </v-app-bar>
</template>

<script setup lang="ts">

import { ref } from "vue"

const props = defineProps<{
    name:String
}>()

</script>