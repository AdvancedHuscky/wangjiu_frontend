<template>
    <div>
        <span @click="jump({a:1})"></span>
    </div>
</template>
<script>
export default{
  methods: {
    jump(p) {
      this.$router.push({ path: '/search/', query: { a: 0, b: p } });
    },
  },
};
</script>
