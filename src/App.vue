<template>
  <div id="app">
    <!-- <div class="informacion" id="informacionID" style=" z-index=100 , display=none">
            <button id="closebtn" @click="cerrar()" ><a>x</a></button>
            <BienvenidoPage/>
      </div>
      <button style="border:none; background-color: #D1D2F3" @click="mostrarinformacion()">
        VOXCOMPPP
      </button> -->
    <router-view />
  </div>
</template>
<script>
// import BienvenidoPage from "@/components/BienvenidoPage.vue";
export default {
  components: {
    // BienvenidoPage,
  },
  methods: {
    mostrarinformacion() {
      var x = document.getElementById("informacionID");
      x.style.display = "block";
      x.style.zIndex = 100;
    },
    cerrar() {
      var x = document.getElementById("informacionID");
      x.style.display = "none";
    },
  },
  mounted() {},
};
</script>

<style>
.imgPerfilGoogle:hover span {
  visibility: visible !important;
}
@import url("https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  margin: 0;
  padding: 0;
  background-color: black;
  background-image: url("./assets/Modelo-8.png");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: 62%;
  overflow-x: none;
}
.informacion {
  display: none;
  position: absolute;
}
#closebtn {
  background-color: transparent;
  border: none;
  font-family: "Nunito";
  font-size: 3vw;
  color: whitesmoke;
  /* align-items: flex-end; */
}
</style>
