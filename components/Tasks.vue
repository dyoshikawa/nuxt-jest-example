<template>
  <div>
    <b-card
      v-for="task in tasks"
      :key="task"
    >
      {{ task }}
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
};
</script>
