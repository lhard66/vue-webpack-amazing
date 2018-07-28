<template>
  <div class="hello">
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
      var array = [1];
      // return concat(array, 2, [3], [[4]]);
      return '456';
    },
    demo2() {
      return join(['a', 'b', 'c'], '~');
      // return '123';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
