<template>
  <div>
    <div class="row" id="message-area">
      <div class="large-8 columns small-centered">
        <h2>Chat Sala</h2>
        <div class="chat-wrap">
          <div class="top">
            <h5 class="room-title"></h5>
          </div>
          <div id="messages"></div>
          <form id="message-form">
            <div class="input-group">
              <input
                type="text"
                placeholder="Type message here"
                class="input-group-field"
                name="message"
                id="message"
              />
              <div class="input-group-button">
                <input type="submit" value="Send" />
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
};
</script>
<style scoped>
#message-area {
  padding-top: 60px;
  display: none;
  position: absolute;
}

#message-area h2 {
  text-align: center;
  font-family: "Pattaya", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #fff;
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
  width: 100%;
  background: #f8f8f8;
  color: #282828;
  padding: 0 20px;
  border: none;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  text-transform: uppercase;
}

#message-form input[type="submit"]:hover {
  color: #f44336;
  font-weight: 700;
}

#message-form input[type="text"] {
  border: none;
  box-shadow: none;
  border-radius: 0;
  background: #f8f8f8;
}

#message-form .input-group {
  margin-bottom: 0;
}
</style>
