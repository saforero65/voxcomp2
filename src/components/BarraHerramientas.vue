<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Ingenieria Multimedia</router-link></li>
        <li>
          <a class="info" href="#">Información</a>
          <font-awesome-icon class="icon" icon="fa-solid fa-hat-wizard" />
          <font-awesome-icon class="icon" icon="fa-solid fa-gear" />
          <font-awesome-icon
            v-if="expandir"
            @click="launchFullScreen()"
            class="icon"
            icon="fa-solid fa-expand"
          />
          <font-awesome-icon
            v-else
            @click="cancelFullScreen()"
            class="icon"
            icon="fa-solid fa-minimize"
          />
          <font-awesome-icon class="icon" icon="fa-solid fa-volume-high" />
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "BarraHerammientas",
  data() {
    return {
      expandir: true,
    };
  },
  methods: {
    launchFullScreen() {
      let element = document.documentElement;
      if (element.requestFullScreen) {
        element.requestFullScreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
      }
      this.expandir = false;
    },
    // Lanza en pantalla completa en navegadores que lo soporten
    cancelFullScreen() {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
      this.expandir = true;
    },
  },
};
</script>
<style scoped>
ul {
  position: absolute;
  bottom: 0;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  font-size: 1.4rem;
  width: 98%;
  font-family: "Exo 2", sans-serif;
}
li:nth-child(1) {
  margin-left: 1rem;
  font-weight: 600;
}
li:nth-child(2) {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.4rem;
  /* width: 98%; */
}
.info {
  font-size: 1rem;
  font-weight: bold;

  margin-right: 1rem;
  transition-duration: 0.2s;
}
.icon {
  margin: 1rem 0.5rem;
  cursor: pointer;
  transition-duration: 0.2s;
}
.icon:hover,
.info:hover {
  transform: scale(1.1);
}
</style>
