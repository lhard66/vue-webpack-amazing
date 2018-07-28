<template>
  <div>
    <!-- <span>name: {{outPerson.name}}</span> -->
    <span>---</span>
    <!-- <span>age: {{outPerson.age}}</span> -->
    <hr>
    <model-demo v-model="outPerson"></model-demo>
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
      outPerson: {
        name: 'jim',
        age: 18,
      },
      // outPerson: null,
    }
  },
  mounted() {
    setTimeout(() => {
      // 模拟异步请求数据p
      const p = {
        name: 'lucy',
        age: 22,
      };
      this.outPerson.name = p.name;
      this.outPerson.age = p.age;
      console.log('over');
    }, 2000);
  },
  methods: {
    confirm() {
      // 复制一份outPerson复本，改变复本的name，防止outPerson的name改变。
      let newPerson = Object.assign({}, this.outPerson);
      newPerson.name = 'ltq';
      console.log(newPerson);
    },
  }
}
</script>
