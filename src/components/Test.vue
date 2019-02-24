<template>
   <div id="container">
     <h2>Typing Spree Game</h2>
      <input v-focus type="text" id="container" v-model="value">
      <p>{{ value }}</p>
      <h3>Ecosystem</h3>
    <ul>
      <li  ><a v-rand href="#" target="_blank" rel="noopener">vue-router</a></li>
      <li><a v-rand href="#" target="_blank" rel="noopener">vuex</a></li>
      <li><a v-rand href="#" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a v-rand href="#" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a v-rand href="#" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
   </div>

</template>

<script>
export default {
   name: 'Test',
  props: {
     value: ''
  },
  
  directives: {
  // directive 1
  focus: {
    // directive definition
    inserted: function (el) {
      el.focus()
    }
  },
  rand: {
    // directive definition
    bind(el){
      el.style.color = "#" + Math.random().toString().slice(2,8)
    }
  }
}

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  font-size: 25px;
}
a {
  color: #42b983;
}
input {
  font-size: 18px;
  width: 20%;
  padding: 10px 18px;
  margin: 8px 0;
  box-sizing: border-box;
}
</style>
