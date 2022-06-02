<template>
  <div>
    <!-- <span>{{ user }}</span> -->
    <!-- <barra-herramientas /> -->

    <ul id="users"></ul>

    <!-- <br /> -->
    <!-- <img src="../assets/Participante.png" alt="" /> -->
    <button
      class="menu"
      type="button"
      id="mbtn"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
    >
      <img id="logomenu" src="../assets/Menu.png" alt="Menú" />
    </button>
    <div class="top">
      <p>.......</p>
      <div class="logo" @click="reload()">
        <img src="../assets/Voxcomp-8.png" alt="voxcomp logo" />
      </div>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <MenuJuego />
      </div>
    </div>

    <h2 id="title_room"></h2>
    <div class="menuchiki">
      <div class="contmc">
        <img
          src="../assets/Agregar.png"
          alt="AgregarObjeto"
          id="crearbtn"
          @click="crear()"
        />
        <img
          src="../assets/Quitar.png"
          alt="QuitarObjeto"
          id="destroybtn"
          @click="destruir()"
        />

        <input
          id="colorpicker"
          v-model="color"
          type="color"
          @input="CambioColor()"
        />
        <!-- <img src="../assets/descargar.jpg" alt="Descargar" @click="exportSceneObject()"> -->
        <img
          src="../assets/Descargar.png"
          alt="Descargar"
          @click="exportSceneObject()"
        />
        <div class="dropdown">
          <button
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
          >
            <img src="../assets/Formas.png" alt="CambiarForma" />
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" @click="cubo()">Cubo</a></li>
            <li><a class="dropdown-item" @click="cono()">Cono</a></li>
            <li><a class="dropdown-item" @click="cilin()">Cilindro</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import ButtonCounter from "./ButtonCounter.vue";
// import BarraHerramientas from "../components/BarraHerramientas.vue";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import { io } from "socket.io-client";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import MenuJuego from "./MenuJuego.vue";
// import { fas } from "@fortawesome/free-solid-svg-icons";

// import { saveAs } from 'file-saver';
// import * as CSG from 'csg';

export default {
  props: ["user"],
  data() {
    return {
      estaNombre: false,
      objectsActualizar: [],
      users: [],
      usersImages: [],
      username: "",
      room: "",
      camera: null,
      scene: null,
      renderer: null,
      plane: null,
      pointer: null,
      raycaster: null,
      isShiftDown: false,
      rollOverMaterial: null,
      rollOverMesh: null,
      cubeGeo: null,
      cubeMaterial: null,
      boolmod: true,
      objects: [],
      controls: null,
      color: "#ffffff",
      params: {
        trs: false,
        onlyVisible: true,
        truncateDrawRange: true,
        binary: false,
        maxTextureSize: 4096,
      },
      socket: {},
      clients: new Object(),
      id: null,
      voxel: null,
      model2: null,
      loader: null,
      mixer: null,
      clock: null,
    };
  },
  components: { MenuJuego },
  methods: {
    init: function () {
      this.camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );
      this.camera.position.set(500, 800, 1300);
      this.camera.lookAt(0, 0, 0);

      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x000000);

      // roll-over helpers

      const rollOverGeo = new THREE.BoxGeometry(50, 50, 50);
      this.rollOverMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        opacity: 0.5,
        transparent: true,
      });
      this.rollOverMesh = new THREE.Mesh(rollOverGeo, this.rollOverMaterial);
      this.scene.add(this.rollOverMesh);

      // cubes

      this.cubeGeo = new THREE.BoxGeometry(50, 50, 50);
      this.cubeMaterial = new THREE.MeshLambertMaterial({ color: this.color });

      // Declaracion de la grilla
      const gridHelper = new THREE.GridHelper(1000, 20);
      this.scene.add(gridHelper);

      this.raycaster = new THREE.Raycaster();
      this.pointer = new THREE.Vector2();

      // Plane
      const geometry = new THREE.PlaneGeometry(1000, 1000);
      geometry.rotateX(-Math.PI / 2);

      this.plane = new THREE.Mesh(
        geometry,
        new THREE.MeshBasicMaterial({ visible: false, color: 0xf0f0f0 })
      );
      this.scene.add(this.plane);
      this.objects.push(this.plane);

      // lights

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      this.scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
      directionalLight.position.set(1, 0.75, 0.5).normalize();
      this.scene.add(directionalLight);

      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(this.renderer.domElement);
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);

      document.addEventListener("pointermove", this.onPointerMove);
      document.addEventListener("pointerdown", this.onPointerDown);
      document.addEventListener("keydown", this.onDocumentKeyDown);
      document.addEventListener("keyup", this.onDocumentKeyUp);
    },
    CambioColor() {
      var colornuevo = new THREE.Color(this.color);
      colornuevo.getHex();
      console.log(colornuevo);
      this.cubeMaterial = new THREE.MeshLambertMaterial({
        color: colornuevo,
      });
    },
    cilin() {
      this.scene.remove(this.rollOverMesh);
      this.cubeGeo = new THREE.CylinderGeometry(25, 25, 50, 16);
      this.rollOverGeo = new THREE.CylinderGeometry(25, 25, 50, 16);
      this.rollOverMesh = new THREE.Mesh(
        this.rollOverGeo,
        this.rollOverMaterial
      );
      this.scene.add(this.rollOverMesh);
    },
    cono() {
      this.scene.remove(this.rollOverMesh);
      this.cubeGeo = new THREE.ConeGeometry(25, 50, 16);
      this.rollOverGeo = new THREE.ConeGeometry(25, 50, 16);
      this.rollOverMesh = new THREE.Mesh(
        this.rollOverGeo,
        this.rollOverMaterial
      );
      this.scene.add(this.rollOverMesh);
    },
    cubo() {
      this.scene.remove(this.rollOverMesh);
      this.cubeGeo = new THREE.BoxGeometry(50, 50, 50);
      this.rollOverGeo = new THREE.BoxGeometry(50, 50, 50);
      this.rollOverMesh = new THREE.Mesh(
        this.rollOverGeo,
        this.rollOverMaterial
      );
      this.scene.add(this.rollOverMesh);
    },
    crear() {
      this.boolmod = true;
      console.log("CREAR");
      var x = document.getElementById("crearbtn");
      var y = document.getElementById("destroybtn");
      y.style.opacity = 0.5;
      x.style.opacity = 1;
    },
    destruir() {
      this.boolmod = false;
      console.log("DESTRUIR");
      var x = document.getElementById("crearbtn");
      var y = document.getElementById("destroybtn");
      x.style.opacity = 0.5;
      y.style.opacity = 1;
    },
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(window.innerWidth, window.innerHeight);

      // this.animate();
    },
    onDocumentKeyDown(event) {
      switch (event.keyCode) {
        case 16:
          this.isShiftDown = true;
          break;
      }
    },

    onDocumentKeyUp(event) {
      switch (event.keyCode) {
        case 16:
          this.isShiftDown = false;
          break;
      }
    },
    onPointerMove(event) {
      this.pointer.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );

      this.raycaster.setFromCamera(this.pointer, this.camera);

      const intersects = this.raycaster.intersectObjects(this.objects, false);

      if (intersects.length > 0) {
        const intersect = intersects[0];

        this.rollOverMesh.position
          .copy(intersect.point)
          .add(intersect.face.normal);
        this.rollOverMesh.position
          .divideScalar(50)
          .floor()
          .multiplyScalar(50)
          .addScalar(25);

        // this.animate();
      }
    },
    onPointerDown(event) {
      if (this.model2) {
        this.controls.enabled = true;
        this.scene.remove(this.model2);
        this.model2 = null;
        this.mixer = null;
        console.log("descativar robot");
      }
      this.pointer.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );

      this.raycaster.setFromCamera(this.pointer, this.camera);

      const intersects = this.raycaster.intersectObjects(this.objects, false);
      console.log(this.objects);
      console.log(intersects);
      if (intersects.length > 0) {
        const intersect = intersects[0];

        // delete cube
        if (this.isShiftDown || !this.boolmod) {
          if (intersect.object !== this.plane) {
            this.scene.remove(intersect.object);

            this.objects.splice(this.objects.indexOf(intersect.object), 1);
            console.log("borrando");
            this.socket.emit("removeVoxel", intersect.object.position);
          }

          // create cube
        } else {
          this.voxel = new THREE.Mesh(this.cubeGeo, this.cubeMaterial);

          this.voxel.position.copy(intersect.point).add(intersect.face.normal);
          this.voxel.position
            .divideScalar(50)
            .floor()
            .multiplyScalar(50)
            .addScalar(25);
          console.log(this.voxel.position);

          this.socket.emit(
            "move",
            this.voxel.position,
            this.color,
            this.cubeGeo
          );

          // this.scene.add(this.voxel);

          // const box = new THREE.BoxHelper(this.voxel, 0x000000);

          this.scene.add(this.voxel);
          this.objects.push(this.voxel);
          this.objectsActualizar.push({
            position: this.voxel.position,
            color: this.color,
          });
        }

        // this.animate();
      }
    },
    export() {
      // Instantiate a exporter
      const exporter = new GLTFExporter();
      const options = {
        trs: this.params.trs,
        onlyVisible: this.params.onlyVisible,
        truncateDrawRange: this.params.truncateDrawRange,
        binary: this.params.binary,
        maxTextureSize: this.params.maxTextureSize,
      };

      // Parse the input and generate the glTF output
      exporter.parse(
        this.scene,
        // called when the gltf has been generated
        function (gltf) {
          console.log(gltf);
          if (gltf instanceof ArrayBuffer) {
            this.saveArrayBuffer(gltf, "scene.glb");
          } else {
            const output = JSON.stringify(gltf, null, 2);
            // console.log(output);

            // this.saveString(output, "scene.gltf");
            // new Blob([output], { type: "text/plain" }), "scene.gltf";

            const link = document.createElement("a");
            link.style.display = "none";
            document.body.appendChild(link); // Firefox workaround, see #6594
            link.href = URL.createObjectURL(
              new Blob([output], { type: "text/plain" })
            );
            link.download = "scene.gltf";
            link.click();
          }
        },
        // called when there is an error in the generation
        function (error) {
          console.log("An error happened", error);
        },
        options
      );
    },
    save(blob, filename) {
      const link = document.createElement("a");
      link.style.display = "none";
      document.body.appendChild(link); // Firefox workaround, see #6594
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();

      // URL.revokeObjectURL( url ); breaks Firefox...
    },

    saveString(text, filename) {
      console.log(text, filename);
      this.save(new Blob([text], { type: "text/plain" }), filename);
    },

    saveArrayBuffer(buffer, filename) {
      this.save(
        new Blob([buffer], { type: "application/octet-stream" }),
        filename
      );
    },
    exportSceneObject() {
      this.export([this.scene]);
    },
    animate: function () {
      requestAnimationFrame(this.animate);
      const delta = this.clock.getDelta();

      if (this.mixer != null) {
        this.mixer.update(delta);
        // this.model2.rotation.copy(this.camera.rotation);
        // this.model2.position =
        // this.model2.position + this.camera.getWorldDirection * 50;
        // console.log(this.camera.getWorldDirection);
        this.camera.lookAt(0, 0, 0);
        this.camera.position.set(500, 800, 1300);
        this.controls.enabled = false;
        var dist = 100;
        var cwd = new THREE.Vector3();

        this.camera.getWorldDirection(cwd);

        cwd.multiplyScalar(dist);
        cwd.add(this.camera.position);

        this.model2.position.set(cwd.x + 45, cwd.y - 55, cwd.z);
        this.model2.setRotationFromQuaternion(this.camera.quaternion);
      }
      this.onWindowResize();
      this.renderer.render(this.scene, this.camera);
    },
    cargaModelo() {
      this.loader = new GLTFLoader();
      this.loader.load("models/RobotExpressive.glb", (gltf) => {
        console.log(gltf);
        this.gltf = gltf;
        this.model2 = gltf.scene;
        this.model2.scale.set(15, 15, 15);
        this.model2.position.x = this.camera.position.x;
        this.model2.position.y = this.camera.position.y - 150;
        this.model2.position.z = this.camera.position.z - 150;

        console.log(this.model2);
        this.scene.add(this.model2);
        this.mixer = new THREE.AnimationMixer(this.model2);
        this.mixer.clipAction(gltf.animations[12]).play();
      }),
        (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        (error) => {
          console.error(error);
        };
    },
    reload() {
      location.reload();
    },
    insertarUsuarios(message) {
      console.log(message);
      if (
        !this.usersImages.includes(message.image) &&
        message.image != undefined
      ) {
        this.users.push(message.username);
        this.usersImages.push(message.image);
      }

      console.log(this.usersImages.length, this.users.length);
      let fragment = "";
      for (let i = 0; i < this.usersImages.length; i++) {
        fragment += `<li style="display: flex; align-items: center;   flex-direction: column;margin:1rem .5rem;padding: 0.2rem">   <img class="imgPerfilGoogle"  style=" width: 3rem; border-radius: 50%;position: relative;  display: inline-block;  border-bottom: 1px dotted black;" src="${this.usersImages[i]}" alt="imgPerfil" />  </li>`;
      }
      console.log(fragment);
      document.getElementById("users").innerHTML = fragment;
    },
    actualizar(array) {
      for (let i = 0; i < array.length; i++) {
        let cubeMaterialaux = new THREE.MeshLambertMaterial({
          color: array[i].color,
        });
        let mesh = new THREE.Mesh(this.cubeGeo, cubeMaterialaux);
        mesh.position.set(
          array[i].position.x,
          array[i].position.y,
          array[i].position.z
        );
        this.scene.add(mesh);
        this.objects.push(mesh);
        console.log(mesh);
        console.log("fubncionadno");
      }
    },
  },
  mounted() {
    this.init();
    this.animate();
  },
  created() {
    this.clock = new THREE.Clock();
    // this.socket = io("http://localhost:8080/");
    this.socket = io("https://prueba-voxcomp.herokuapp.com/");

    this.socket.on("newUserConnected", (clientCount, _id) => {
      console.log(clientCount + " usuarios conectados");
      let alreadyHasUser = false;
      for (let i = 0; i < Object.keys(this.clients).length; i++) {
        if (Object.keys(this.clients)[i] == _id) {
          alreadyHasUser = true;
          break;
        }
      }
      if (_id != this.id && !alreadyHasUser) {
        console.log("Llego alguien al server!!! con el id: " + _id);
        console.log(this.clients[_id]);
      }
      // document.getElementById("botonCrear").addEventListener("click", (e) => {
      console.log("le dio click a crear", this.user);
      // e.preventDefault();
      // console.log(user);
      this.socket.emit(
        "joinRoom",
        {
          username: this.user.username,
          room: this.user.room,
          image: this.user.image,
        },
        (data) => {
          if (data.nameAvailable) {
            document.getElementById("title_room").innerText =
              "Estas en la sala: " + this.user.room;
            console.log("Estas en la sala: " + this.user.room);
            document.getElementById("message-area").style.display = "block";
            // this.sendToDad();
            // $messageArea.show();
            // $loginArea.hide("slow");
          } else {
            console.log(data.error);
          }
          this.socket.emit("message", {
            username: this.user.username,
            text: "",
            image: this.user.image,
          });
        }
      );

      this.socket.emit("necesitoActulizarme", _id);

      // });
    });
    this.socket.on("message", (message) => {
      // console.log(message);
      this.insertarUsuarios(message);
      // var momentTimestamp = moment.utc(message.timestamp);
      var hoy = new Date();
      var hora =
        hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();

      var messages = document.getElementById("messages");
      messages.innerHTML +=
        "<p><strong>" +
        message.username +
        '</strong> <span class="time">' +
        hora +
        "</span></p>";
      messages.innerHTML +=
        '<div class="wrap-msg"><p>' + message.text + "</p></div>";
      // scrollSmoothToBottom("messages");
    });

    document.getElementById("message-form").addEventListener("submit", (e) => {
      e.preventDefault();
      var message = document.getElementById("message");
      // console.log(message);

      // var username = this.username;
      var reg = /<(.|\n)*?>/g;
      if (reg.test(message.value) == true) {
        alert("Sorry, that is not allowed!");
      } else {
        console.log("va a emitir el mensjae", this.user.username);
        this.socket.emit("message", {
          username: this.user.username,
          text: message.value,
          image: this.user.image,
        });
      }
      message.value = "";
    });
    this.socket.on("introduction", (_id, _clientNum, _ids) => {
      for (let i = 0; i < _ids.length; i++) {
        if (_ids[i] != _id) {
          this.clients[_ids[i]] = {
            mesh: new THREE.Mesh(
              new THREE.BoxGeometry(50, 50, 50),
              new THREE.MeshNormalMaterial()
            ),
          };

          // console.log(this.clients[_ids[i]].mesh);
          //Add initial users to the scene
          // this.scene.add(this.clients[_ids[i]].mesh);
        }
      }

      console.log(this.clients);

      this.id = _id;
      console.log("Mi ID es: " + this.id);
    });

    this.socket.on(
      "removeVoxelScene",
      (clientCount, _id, _ids, voxelPosition) => {
        console.log(voxelPosition);

        if (_id != this.id) {
          console.log("id del que quito el voxel:" + _id);

          this.objects.forEach((element) => {
            console.log("antes del if:", element);
            if (
              element.position.x == voxelPosition.x &&
              element.position.y == voxelPosition.y &&
              element.position.z == voxelPosition.z
            ) {
              console.log("despues del if:", element);
              // element.visible = false;
              this.scene.remove(element);
              this.objects.splice(this.objects.indexOf(element), 1);
              console.log("encontrado!!");
            } else {
              // console.log("Hay un error");
            }
          });
          console.log("array a remover", this.objects);
        }
      }
    );

    this.socket.on(
      "userPositionsVoxels",
      (clientCount, _id, _ids, voxelPosition, color, mesh) => {
        console.log("mesh", mesh);

        console.log(this.id, _id);
        console.log(this.clients);

        if (_id != this.id) {
          console.log("id del que puso el voxel:" + _id);
          let cubeMaterialaux = new THREE.MeshLambertMaterial({ color: color });
          if (mesh.type == "ConeGeometry") {
            let geo = new THREE.ConeGeometry(25, 50, 16);
            this.clients[_id] = {
              mesh: new THREE.Mesh(geo, cubeMaterialaux),
            };
          } else if (mesh.type == "CylinderGeometry") {
            let geo = new THREE.CylinderGeometry(25, 25, 50, 16);
            this.clients[_id] = {
              mesh: new THREE.Mesh(geo, cubeMaterialaux),
            };
          } else {
            let geo = new THREE.BoxGeometry(50, 50, 50);
            this.clients[_id] = {
              mesh: new THREE.Mesh(geo, cubeMaterialaux),
            };
          }
          // console.log(this.cubeGeo);
          console.log("recibiendo posicion voxel");

          this.clients[_id].mesh.position.x = voxelPosition.x;
          this.clients[_id].mesh.position.y = voxelPosition.y;
          this.clients[_id].mesh.position.z = voxelPosition.z;
          this.scene.add(this.clients[_id].mesh);
          this.objects.push(this.clients[_id].mesh);
        }
        this.socket.emit("historial", this.objects);
      }
    );

    this.socket.on("pasemeElArray", () => {
      if (this.objects.length <= 1) {
        console.log("necesita actualizar por que esta vacio");
      } else {
        console.log("pasando el array");

        this.socket.emit("historial", this.objectsActualizar);
      }
    });
    this.socket.on("actualziarNuevoUsuario", (array) => {
      if (this.objects.length <= 1) {
        console.log("priovado necesita actualizar por que esta vacio");
        console.log(array);
        this.actualizar(array);
      } else {
        console.log("priovado  no necesita actualizar por que ya esta al dia");
      }
    });
    this.socket.on("quitarUsuario", (userImage) => {
      console.log(userImage);
      const index = this.usersImages.indexOf(userImage);
      console.log(index);
      if (index > -1) {
        this.users.splice(index, 1);
        this.usersImages.splice(index, 1);
      }
      console.log(this.users);
      console.log(this.usersImages);
    });

    this.socket.on("userDisconnected", (clientCount, _id) => {
      //Update the data from the server
      // document.getElementById("numUsers").textContent = clientCount;

      if (_id != this.id) {
        console.log("Y se marcho!!, el usuario con id: " + _id);
        // console.log(this.clients);
        this.scene.remove(this.clients[_id]);
        delete this.clients[_id];
      }
    });
  },
};
</script>

<style scoped>
#users {
  list-style: none;
  position: absolute;
  color: white;
  font-weight: bold;
  display: flex;
  right: 0;
}

.modal-dialog {
  border: solid 2px khaki;
  /* width: 100vw; */
}
.btn-grad {
  width: fit-content;
  background-image: linear-gradient(
    to right,
    #77a1d3 0%,
    #79cbca 51%,
    #77a1d3 100%
  );
  margin: auto;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  /* box-shadow: 0 0 20px #eee; */
  border-radius: 10px;
  display: block;
  position: absolute;
  bottom: 5rem;
  /* left: 0; */
  right: 0;
  top: 0;
  height: fit-content;
}
.descarga {
  bottom: 20rem;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

.menu {
  position: absolute;
}
.logo {
  position: absolute;
  width: fit-content;
  height: fit-content;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
}
.logo img {
  height: 5vh;
}
.menuchiki {
  position: fixed;
  top: 35vh;
  right: 2vh;
}
.menuchiki::before {
  /* height: 110%; */
  width: 130%;
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 1vh;
  padding: 3px; /* control the border thickness */
  background: linear-gradient(
    0deg,
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
.contmc {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border:solid 2px #0f0; */
  width: 135%;
  height: 110%;
  padding: 2vh 0;
}
.menuchiki img {
  width: 4vh;
  margin: 20%;
  cursor: pointer;
}
.top {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: fit-content;
}
.Menudropdown img {
  width: 7vh;
}
#colorpicker {
  width: 4.6vh;
  height: 5vh;
  margin: 5px;
  margin-bottom: 10px;
  cursor: pointer;
}
#title_room {
  color: white;
  position: absolute;
}
#container {
  height: 100vh;
  width: 100vw;
}
#insideText {
  position: absolute;
  left: 20px;
  top: 20px;
}
.picker {
  position: absolute;
  right: 0;
  /* width: fit-content;
  height: fit-content; */
  top: 0;
  bottom: -10rem;
  margin: auto;
}
#dropdownMenuButton {
  background-color: transparent;
  border: none;
}
#mbtn {
  background-color: transparent;
  border: none;
}
#logomenu {
  width: 70%;
}
.offcanvas,
.offcanvas-lg,
.offcanvas-md,
.offcanvas-sm,
.offcanvas-xl,
.offcanvas-xxl {
  --bs-offcanvas-width: 40vh;
  /* --bs-offcanvas-height: 10vh; */
  /* --bs-offcanvas-padding-x: 1rem; */
  --bs-offcanvas-mrgin-top: 2%;
  --bs-offcanvas-padding-y: 1rem;
  --bs-offcanvas-color: ;
  --bs-offcanvas-bg: #00000000;
  --bs-offcanvas-border-width: 1px;
  /* --bs-offcanvas-border-color: var(--bs-border-color-translucent); */
  --bs-offcanvas-box-shadow: 0 0.125rem 0.25remrgba (0, 0, 0, 0.075);
}
#destroybtn {
  opacity: 0.5;
}
.menu {
  position: absolute;
  right: 0;
  margin-top: 1rem;
}
#users {
  margin-right: 4rem;
}
</style>
