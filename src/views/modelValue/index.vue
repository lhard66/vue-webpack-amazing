<template>
  <div>
    <span>num: {{num}}</span>
    <hr>
    <model-demo v-model.number="num"></model-demo>
    <button @click="confirm">改变</button>
  </div>
</template>

<script>
import ModelDemo from './ModelDemo.vue';

export default {
  name: 'use-example',
  components: {
    ModelDemo,
  },
  data() {
    // 设置person初始值
    return {
      num: 8
    }
  },
  mounted() {
    setTimeout(() => {
      // 模拟异步请求数据p
      this.num = 10;
      console.log('over');
    }, 2000);
  },
  methods: {
    confirm() {
      // 复制一份outPerson复本，改变复本的name，防止outPerson的name改变。
      let newNum = num;
      console.log(newNum);
    },
  }
}
</script>
