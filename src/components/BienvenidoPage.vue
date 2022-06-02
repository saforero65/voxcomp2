<template>
  <!-- <div class="todo"> -->
  <div class="cont" id="contid">
    <div id="login">
      <div class="log">
        <h1>Antes de empezar...</h1>
        <p>
          Crea un nombre de usuario o regístrate con google para poder crear o
          entrar a una sala.
        </p>
        <div class="logicons">
          <input
            type="text"
            name="username"
            class="input2"
            placeholder="Enter your username"
            v-model="username"
          />
          <p>o</p>
          <button class="btn3" @click="login()">
            <a v-if="user"> ✓ </a>
            <a v-else id="loginfo">
              <img src="../assets/google.png" alt="logoGoogle" id="googlebtn" />
              Ingresar
            </a>
          </button>
        </div>
        <button class="btn1" @click="Continuar()">
          <a>Continuar</a>
        </button>
      </div>
    </div>
    <div id="bienv" style="display: none">
      <div class="bienvenido">
        <h1>BIENVENIDO A VOXCOMP</h1>
        <p>
          Este es un juego en el que podrás comprender aspectos básicos de la
          computación gráfica al mismo tiempo que te diviertes.
        </p>

        <div class="botones">
          <button :disabled="username === ''" class="btn1" @click="NuevaSala()">
            <a>Crear</a>
          </button>
          <button
            :disabled="username === ''"
            class="btn1"
            @click="UnirseSala()"
          >
            <a>Unirse</a>
          </button>
          <button class="btn2" @click="Instruc()"><a>Instrucciones</a></button>
        </div>
      </div>
    </div>
    <div id="crearS" style="display: none">
      <div class="sala">
        <h1>NUEVA SALA</h1>
        <p>Ingresa el nombre se la sala</p>
        <input type="text" class="input" v-model="room" />
        <div class="botones2">
          <button class="btn1" @click="Atras()"><a>Atrás</a></button>
          <button
            :disabled="room === ''"
            class="btn1"
            id="botonCrear"
            @click="sendToDad()"
          >
            <a>CREAR</a>
          </button>
        </div>
      </div>
    </div>
    <div id="unirse" style="display: none">
      <div class="sala">
        <h1>UNIRSE A UNA SALA</h1>
        <p>Ingresa el nombre se la sala</p>
        <input v-model="room" type="text" class="input" />
        <div class="botones2">
          <button class="btn1" @click="Atras()"><a>Atrás</a></button>
          <button :disabled="room === ''" class="btn1" @click="sendToDad()">
            <a>CREAR</a>
          </button>
        </div>
      </div>
    </div>
    <div id="instruc" style="display: none">
      <div class="inst">
        <h1>INSTRUCCIONES</h1>
        <p>
          Este es un juego en el que podrás comprender aspectos básicos de la
          computación gráfica al mismo tiempo que te diviertes. Este es un juego
          en el que podrás comprender aspectos básicos de la computación gráfica
          al mismo tiempo que te diviertes. Este es un juego en el que podrás
          comprender aspectos básicos de la computación gráfica al mismo tiempo
          que te diviertes.
        </p>
        <button class="btn1" @click="Atras()"><a>Atrás</a></button>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<style scoped>
.cont {
  position: relative;
  padding: 1vw;
  display: block;
  width: 54vw;
  height: 26vw;
  text-align: center;

  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 25px;
  /* padding: 5%; */
}
.cont::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 25px;
  padding: 3px; /* control the border thickness */
  background: linear-gradient(
    90deg,
    rgb(217, 255, 0),
    red,
    #f0f,
    blueviolet,
    blue,
    aqua,
    #0f0,
    rgb(217, 255, 0)
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.bienvenido {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3% 5%;
  /* border: 2px solid greenyellow; */
}
.sala {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto auto;
  padding: 6% 5%;
  /* border: 2px solid greenyellow; */
}
.log {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* border: solid 2px aqua; */
  padding: 4% 5%;
  /* height: 100%;
  width: 85%; */
  margin: auto auto;
}
.inst {
  padding: 0 5%;
}
.botones {
  max-width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 2%;
  /* border: 2px solid blueviolet; */
}
.botones2 {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  /* border: 2px solid blueviolet; */
}
.logicons {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-top: 1vw;
  width: 100%;
  /* border: 2px solid salmon; */
}
.btn1 {
  position: relative;
  min-width: 15vw;
  height: 4.5vw;
  display: inline-block;
  padding: 1vw;
  color: #fff;
  background-color: black;
  border-radius: 50px;
  border: 3px solid transparent;
}
.btn1::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50px;
  padding: 3px;
  background: linear-gradient(90deg, rgb(0, 145, 255), #0f0);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
.btn2 {
  /* position: relative; */
  /* margin: 5px; */
  width: 20vw;
  /* min-width: 170px; */
  height: 3.5vw;
  display: inline-block;
  /* padding: 2%; */
  color: #fff;
  background-color: black;
  border-radius: 50px;
  border: 3px solid gainsboro;
  margin: 1vw;
  margin-bottom: 0;
}
.btn3 {
  /* position: relative; */
  /* margin: 5px; */
  width: 15vw;
  /* min-width: 170px; */
  height: 3.5vw;
  display: inline-block;
  /* padding: 2%; */
  color: #fff;
  background-color: black;
  border-radius: 50px;
  border: 3px solid gainsboro;
  /* margin: 5%; */
}
.input {
  width: 80%;
  height: 4vw;
  display: inline-block;
  padding: 0 2%;
  color: #fff;
  background-color: black;
  border-radius: 50px;
  border: 3px solid gainsboro;
  /* margin: 10%; */
  margin-bottom: 2vw;
  font-family: "Nunito";
  font-size: 1.5vw;
  letter-spacing: 0.3vw;
  text-align: center;
}
.input2 {
  width: 23vw;
  height: 3vw;
  display: inline-block;
  padding: 0 2%;
  color: #fff;
  background-color: black;
  border-radius: 50px;
  border: 3px solid gainsboro;
  /* margin: 10%; */
  margin-bottom: 5%;
  font-family: "Nunito";
  font-size: 1.5vw;
  letter-spacing: 0.3vw;
  text-align: center;
}
.cont h1 {
  font-family: "Oswald";
  font-size: 2.5vw;
  letter-spacing: 1vw;
  font-weight: bolder;
  /* border: 2px solid fuchsia; */
}
.cont p {
  font-family: "Nunito";
  font-size: 1.2vw;
  letter-spacing: 0.3vw;
  font-weight: bold;
  text-align: left;
  color: whitesmoke;
}
.cont a {
  font-family: "Nunito";
  font-size: 1.5vw;
  letter-spacing: 0.3vw;
  font-weight: bold;
  text-align: left;
}
#loginfo {
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: solid 2px slateblue; */
}
#googlebtn {
  height: 3vh;
  align-self: center;
  margin-right: 7px;
}
</style>

<script>
// import { io } from "socket.io-client";

export default {
  data() {
    return {
      isLogin: false,
      user: null,
      room: "",
      username: "",
      clients: new Object(),
    };
  },
  methods: {
    async login() {
      const googleUser = await this.$gAuth.signIn();
      this.user = googleUser.getBasicProfile();
      this.username = this.user.getName();
      this.image = this.user.getImageUrl();
      console.log(this.user);
    },
    NuevaSala() {
      var x = document.getElementById("bienv");
      var y = document.getElementById("crearS");
      var z = document.getElementById("unirse");
      var w = document.getElementById("instruc");
      // var v = document.getElementById("login");

      x.style.display = "none";
      y.style.display = "block";
      z.style.display = "none";
      w.style.display = "none";
      // v.style.display = "none";
    },
    UnirseSala() {
      var x = document.getElementById("bienv");
      var y = document.getElementById("crearS");
      var z = document.getElementById("unirse");
      var w = document.getElementById("instruc");
      // var v = document.getElementById("login");

      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "block";
      w.style.display = "none";
      // v.style.display = "none";
    },
    Instruc() {
      var x = document.getElementById("bienv");
      var y = document.getElementById("crearS");
      var z = document.getElementById("unirse");
      var w = document.getElementById("instruc");
      // var v = document.getElementById("login");

      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "none";
      w.style.display = "block";
      // v.style.display = "none";
    },
    Atras() {
      var x = document.getElementById("bienv");
      var y = document.getElementById("crearS");
      var z = document.getElementById("unirse");
      var w = document.getElementById("instruc");
      // var v = document.getElementById("login");

      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
      w.style.display = "none";
      // v.style.display = "none";
    },
    Continuar() {
      var x = document.getElementById("bienv");
      var y = document.getElementById("crearS");
      var z = document.getElementById("unirse");
      var w = document.getElementById("instruc");
      var v = document.getElementById("login");

      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
      w.style.display = "none";
      v.style.display = "none";

      // this.loginbool = true;
      // console.log(this.loginbool);
    },
    sendToDad() {
      this.$emit("getValues", {
        username: this.username,
        room: this.room,
        mostrarSala: true,
        mostrarModal: false,
        image: this.image,
      });
      console.log("enviado");
    },
  },
  created() {
    // this.socket = io("http://localhost:8080/");
    // console.log(this.loginbool);
  },
  mounted() {
    // this.sendToDad();
    // console.log("enviado");
  },
};
</script>
