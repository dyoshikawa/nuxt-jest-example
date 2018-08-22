<template>
  <div>
    <b-input
      v-model="text"
    />
    <b-button
      @click="$emit('new-task-text', text)"
    >
      New Task
    </b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  }
};
</script>
