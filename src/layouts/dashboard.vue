<template>
  <div class="tw-min-h-screen">
    <Header/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "DashboardLayout",
});
</script>

<script lang="ts" setup>
import Header from "@components/base/Header.vue";
</script>

<style scoped></style>
