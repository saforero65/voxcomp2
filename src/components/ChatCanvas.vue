<template>
  <div>
    <div id="chat" class="chat">
      <span>Chat</span>
      <img src="../assets/enviar-mensaje.png" alt="flecha" />
    </div>
    <div class="row" id="message-area">
      <div class="">
        <h2>
          Chat Sala <img id="cerrar" src="../assets/Salir.png" alt="salir" />
        </h2>
        <div class="chat-wrap">
          <div class="top">
            <h5 class="room-title"></h5>
          </div>
          <div id="messages"></div>
          <form id="message-form">
            <div class="input-group">
              <div class="input-group-button">
                <input
                  type="text"
                  placeholder="Envia un mensaje"
                  class="input-group-field form__field"
                  name="message"
                  id="message"
                />
                <input class="botonenviar" type="submit" value=" " />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    document.getElementById("chat").addEventListener("click", (e) => {
      console.log("entro");
      e.preventDefault();
      document.getElementById("message-area").style.transform =
        "translateX(0px)";
    });

    document.getElementById("cerrar").addEventListener("click", (e) => {
      console.log("entro");
      e.preventDefault();
      document.getElementById("message-area").style.transform =
        "translateX(-500px)";
    });
  },
};
</script>
<style scoped>
.chat {
  /* width: 5rem; */
  position: absolute;
  color: white;
  height: fit-content;
  top: -50vh;
  bottom: 0;
  margin: auto;
  transform: translateX(-5px);
}
.chat span {
  padding: 0.4rem 1rem;
  border: 3px solid transparent;
  border-image: linear-gradient(to bottom, #002efd 0%, #59d53a 100%) 1;
}
.chat img {
  width: 1rem;
  margin-left: 0.5rem;
}
.input-group-button {
  display: flex;
  align-items: center;
  margin: 0.5rem;
}

#message-area {
  position: fixed;
  border: 2px solid transparent;
  border-radius: 10px;
  background: white;
  background-clip: padding-box;
  padding: 2px;
  height: fit-content;
  top: 0;
  bottom: 0;
  margin: auto;
  left: -4px;
  transition: 1s;
  transform: translateX(-500px);
}
#message-area::after {
  position: absolute;
  top: -4px;
  bottom: -4px;
  left: -4px;
  right: -4px;
  background: linear-gradient(#009cff, #24ff00);
  content: "";
  z-index: -1;
  border-radius: 10px;
}
#message-area div {
  background: #000;
  color: #f5f5f5;
  padding: 0 !important;
}
.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: #fff;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}
.form__field::placeholder {
  color: white;
  font-size: 1rem;
}
.form__field:placeholder-shown ~ .form__label {
  font-size: 1.3rem;
  cursor: text;
  top: 20px;
}

#message-area h2 {
  text-align: center;
  font-family: "Pattaya", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #f5f5f5;
  background: rgb(0, 25, 49);
  padding: 0 !important;
  margin: 0 !important;
  margin-right: 4rem;
}
#message-area h2 img {
  position: relative;
  width: 1rem;
  margin-left: 4rem;
}
#message-area .top {
  background: #f8f8f8;
}

#message-area .top h5 {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  margin-bottom: 0;
}

#message-area .chat-wrap {
  background: white;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  width: 100%;
}

#messages {
  overflow-y: auto;
  overflow-x: hidden;
  height: 400px;
  padding: 5px 10px;
}

#messages::-webkit-scrollbar-track {
  background-color: #f5f5f5;
}

#messages::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}

#messages::-webkit-scrollbar-thumb {
  background-color: #f44336;
}

.wrap-msg {
  padding: 6px 10px 7px;
  border-radius: 0 10px 10px 10px;
  background: #f8f8f8;
  margin: 8px 5px;
  margin-left: 10px;
}

#message-form input[type="submit"] {
  width: 2rem;
  background: #f8f8f8;
  color: #282828;
  /* padding: 0 20px; */
  border: none;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  text-transform: uppercase;
  background: url(../assets/enviar-mensaje.png) no-repeat;
  background-size: contain;
  margin-left: 2rem;
}

#message-form input[type="submit"]:hover {
  color: #f44336;
  font-weight: 700;
}

#message-form .input-group {
  margin-bottom: 0;
}
</style>
