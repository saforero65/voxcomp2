<template>
  <div>
    <chat-canvas v-if="mostrarsala"></chat-canvas>
    <barra-herramientas />
    <!-- <div class="informacion" id="informacionID" style=" z-index=100 , display=none">
            <button id="closebtn" @click="cerrar()" ><a>x</a></button>
            <BienvenidoPage/>
      </div> -->
    <!-- <button style="border:none; background-color: #D1D2F3" @click="mostrarinformacion()">
        VOXCOMPPP
      </button> -->

    <bienvenido-page
      v-if="mostrarModal"
      class="modal"
      @getValues="setValues"
    ></bienvenido-page>
    <!-- <MensajeReto/> -->
    <div class="background"></div>
    <escena-vox
      v-if="mostrarsala"
      :user="{ username, room, image }"
    ></escena-vox>
  </div>
</template>
<script>
import BarraHerramientas from "@/components/BarraHerramientas.vue";
import BienvenidoPage from "@/components/BienvenidoPage.vue";
import EscenaVox from "@/components/EscenaVox.vue";
import ChatCanvas from "@/components/ChatCanvas.vue";
// import MensajeReto from "@/components/MensajeReto.vue";
export default {
  data() {
    return {
      mostrarModal: true,
      mostrarsala: false,
      username: "",
      room: "",
      image: "",
    };
  },
  components: { BarraHerramientas, 
  BienvenidoPage, 
  EscenaVox, ChatCanvas, 
  // MensajeReto 
  },
  methods: {
    setValues(obj) {
      this.mostrarsala = obj.mostrarSala;
      this.mostrarModal = obj.mostrarModal;
      this.username = obj.username;
      this.image = obj.image;
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
