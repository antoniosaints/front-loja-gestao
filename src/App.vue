<template>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
import { RouterView } from "vue-router";
const toast = useToast();

const show = () => {
    toast.add({ severity: 'success', summary: 'Info', detail: 'Message Content', life: 3000 });
};
</script>
