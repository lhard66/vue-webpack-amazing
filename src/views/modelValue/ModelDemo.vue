<template>
  <div>
    <input type="text" v-model="num"/>
  </div>
</template>

<script>
export default {
  name: 'example',
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      num: '',
    }
  },
  mounted() {
    this.setNum(this.value);
  },
  methods: {
    setNum(n) {
      // 做一层判断，防止传入null时报错
      if (n) {
        // 确保value和person指向不同的内容地址
        this.num = n;
      }
    },
  },
  watch: {
    value(val, oldVal) {
      this.setNum(val);
    },
    num(val, oldVal) {
      this.$emit('input', val);
    },
  },
}
</script>
