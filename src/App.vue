<template>
  <div id="app">
    <nav>
      <section>
        <HomeView />
      </section>
    </nav>
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue'

import Sucess from './views/Sucess.vue'

  export default{
    components: {
      HomeView,
      Sucess
    }
  }
  
</script>

<style>
body {
  background: #ECEEF2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Nunito", Arial, Helvetica, sans-serif;
  color: #222222;
}

section{
  align-items: center;
  flex-direction: column;
  width: 617px;
  height: 763px;
  background: #FFFFFF;
  border-radius: 20px;
  margin-top: 50px;
}

</style>
