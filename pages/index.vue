<template>
  <b-container>
    Hello
    <new-task />
    <b-card />
  </b-container>
</template>

<script>
import NewTask from "~/components/NewTask.vue";

export default {
  components: {
    NewTask
  }
};
</script>

