<template>
  <div>
    <b-alert variant="success" show dismissible>{{ message }}</b-alert>
    <br />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: ["message"],
};
</script>
