<template>
  <div id="app">
      <div class="informacion" id="informacionID" style=" z-index=100 , display=none">
            <button id="closebtn" @click="cerrar()" ><a>x</a></button>
            <BienvenidoPage/>
      </div>
      <button style="border:none; background-color: #D1D2F3" @click="mostrarinformacion()">
        VOXCOMPPP
      </button>
      <router-view />
    </div>
</template>
<script>
  import BienvenidoPage from '@/components/BienvenidoPage.vue'

  export default {
    components: {
        BienvenidoPage,
    },
    methods: {
      mostrarinformacion(){
          var x = document.getElementById("informacionID");
          x.style.display="block";
          x.style.zIndex=100;
      },
      cerrar(){
          var x = document.getElementById("informacionID");
           x.style.display="none";
      }

    }
  }
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: black;
}
.informacion{
  display: none;
  position: absolute;
}
#closebtn{
  background-color: transparent;
  border: none;
  font-family: 'Nunito';
  font-size: 3vw;
  color: whitesmoke;
  /* align-items: flex-end; */
}

</style>
