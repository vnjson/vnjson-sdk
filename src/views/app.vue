<template>
<div id="app">
  <top_menu></top_menu>

  <aside_menu></aside_menu>
<div class="content">


  <h3>error loger</h3>
  <h3>Ctx loger</h3>
  <h3>postload</h3>
</div>


</div>
</template>


<script>
import top_menu from './top_menu.vue';
import aside_menu from './aside_menu.vue';
export default {

  name: 'app',
  components: {
    top_menu,
    aside_menu
  },
  data (){
    return {

    }
  },
  created() {

  },
  mounted (){
  },
  methods: {

  }
}


</script>
