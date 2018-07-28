<template>
  <div>
    <h1>{{ demo }}</h1>
    <h1>{{ demo2 }}</h1>
  </div>
</template>

<script>
import { join } from 'lodash';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    demo() {
      // var array = [1];
      // return concat(array, 2, [3], [[4]]);
      return '456';
    },
    demo2() {
      return join(['a', 'b', 'c'], '~');
      // return '123';
    },
  }
}
</script>
