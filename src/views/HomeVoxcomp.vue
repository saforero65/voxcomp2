<template>
  <div>
    <barra-herramientas />
    <bienvenido-page
      v-if="mostrarModal"
      class="modal"
      @getValues="setValues"
    ></bienvenido-page>
    <div class="background"></div>
    <escena-vox v-if="mostrarsala" :user="{ username, room }"></escena-vox>
  </div>
</template>
<script>
import BarraHerramientas from "@/components/BarraHerramientas.vue";
import BienvenidoPage from "@/components/BienvenidoPage.vue";
import EscenaVox from "@/components/EscenaVox.vue";
export default {
  data() {
    return {
      mostrarModal: true,
      mostrarsala: false,
      username: "",
      room: "",
    };
  },
  components: { BarraHerramientas, BienvenidoPage, EscenaVox },
  methods: {
    setValues(obj) {
      this.mostrarsala = obj.mostrarSala;
      this.mostrarModal = obj.mostrarModal;
      this.username = obj.username;
      this.room = obj.room;
      console.log("entro a setValues");
      document.querySelector(".background").style.display = "none";
      // console.log(this.username, this.room);
    },
  },
};
</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
  background-color: black;
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
.modal {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
}
.background {
  background: black;
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
  position: fixed;
  z-index: 0;
}
</style>
