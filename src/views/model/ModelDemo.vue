<template>
  <div>
    <span>{{person.name}}</span>
    <input type="text" v-model="person.age"/>
  </div>
</template>

<script>
export default {
  name: 'example',
  props: {
    value: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      person: {
        name: '',
        age: '888',
      },
    }
  },
  mounted() {
    this.setPerson(this.value);
  },
  methods: {
    setPerson(p) {
      // 做一层判断，防止传入null时报错
      if (p) {
        // 确保value和person指向不同的内容地址
        this.person = p;
      }
    },
  },
  watch: {
    person: {
      handler(val, oldVal) {
        // console.log(val);
        this.$emit('input', val);
      },
      deep: true,
    },
  },
}
</script>
