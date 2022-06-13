<template>
  <div id="app">
      <section>
        <router-view>
        <HomeView />
        <Sucess />
        </router-view>
      </section>
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

@media screen and (max-width: 600px) {
body {
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Nunito", Arial, Helvetica, sans-serif;
    color: #222222;
}

section{
  margin-top: 0px;
  display: flex;
  left: 16px;
  right: 16px;
  top: 16px;
  bottom: 16px;
}
}

</style>
