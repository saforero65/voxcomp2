<template>
    <!-- <div class="todo"> -->
        <div class="cont" id="contid">
            <div id="bienv">
                <div class="bienvenido">
                    <h1>BIENVENIDO A VOXCOMP</h1>
                    <p>Este es un juego en el que podrás comprender aspectos básicos 
                        de la computación gráfica al mismo tiempo que te diviertes.</p>
                    <div class="botones">
                            <button class="btn1"  @click="NuevaSala()" ><a>Crear</a></button>
                            <button class="btn1" @click="UnirseSala()"><a>Unirse</a></button>
                            <button class="btn2"  @click="Instruc()"><a>Instrucciones</a></button>
                    </div>
                </div>
            </div>
            <div id="crearS" style="display:none">
                <div class="sala">
                    <h1>NUEVA SALA</h1>
                    <p>Ingresa el nombre se la sala</p>
                    <input type="text" class="input">
                    <div class="botones2">
                        <button class="btn1" @click="Atras()" ><a>Atrás</a></button>
                        <button class="btn1"><a>CREAR</a></button>
                    </div>
                </div>
            </div>
            <div id="unirse"  style="display:none">
                <div class="sala">
                    <h1>UNIRSE A UNA SALA</h1>
                    <p>Ingresa el nombre se la sala</p>
                    <input type="text" class="input">
                    <div class="botones2">
                        <button class="btn1" @click="Atras()" ><a>Atrás</a></button>
                        <button class="btn1"><a>CREAR</a></button>
                    </div>
                </div>
            </div>
            <div id="instruc"  style="display:none">
                <div class="inst">
                    <h1>INSTRUCCIONES</h1>
                    <p>Este es un juego en el que podrás comprender aspectos básicos 
                        de la computación gráfica al mismo tiempo que te diviertes.
                    Este es un juego en el que podrás comprender aspectos básicos 
                        de la computación gráfica al mismo tiempo que te diviertes.
                    Este es un juego en el que podrás comprender aspectos básicos 
                        de la computación gráfica al mismo tiempo que te diviertes.</p>
                    <button class="btn1" @click="Atras()" ><a>Atrás</a></button>

                </div>
            </div>
            
        </div>
    <!-- </div> -->
</template>
<style scoped>
    .todo{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 2px solid blueviolet;
        width: 100vw;
        height: 100vw;
    }
    .cont{
        position: relative;
        padding: 4vw;
        margin: 5px;
        display: block;
        width: 55vw;
        height: 30vw;
        text-align: center;

        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        border-radius: 25px;
        /* padding: 5%; */
    }
    .cont::before{
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 25px;
        padding: 3px; /* control the border thickness */
        background: linear-gradient(90deg, rgb(217, 255, 0),red,#f0f,blueviolet,blue, aqua, #0f0, rgb(217, 255, 0));
        -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
                mask-composite: exclude;
        pointer-events: none;
    }
    .bienvenido{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
         /* border: 2px solid greenyellow; */
    }
    .sala{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .botones{
        max-width: 70%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        
        /* border: 2px solid blueviolet; */
    }
    .botones2{
        max-width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        /* border: 2px solid blueviolet; */
    }
    .btn1{
        position: relative;
        min-width: 180px;
        height: 60px;
        display: inline-block;
        padding: 3%;
        color: #fff;
        background-color: black;
        border-radius: 50px;
        border: 3px solid transparent;
    }
    .btn1::before{
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 50px;
        padding: 3px; 
        background: linear-gradient(90deg,rgb(0, 145, 255),#0f0);
        -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
                mask-composite: exclude;
        pointer-events: none;
    }
    .btn2{
         /* position: relative; */
        /* margin: 5px; */
        width: 20vw;
        /* min-width: 170px; */
        height: 4vw;
        display: inline-block;
        /* padding: 2%; */
        color: #fff;
        background-color: black;
        border-radius: 50px;
        border:3px solid gainsboro;
        margin: 5%;
        margin-bottom: 0;
    }
    .input{
        width: 80%;
        height: 5vw;
        display: inline-block;
        padding: 0 2%;
        color: #fff;
        background-color: black;
        border-radius: 50px;
        border:3px solid gainsboro;
        /* margin: 10%; */
        margin-bottom: 5%;
        font-family: 'Nunito';
        font-size: 1.5vw;
        letter-spacing: 0.3vw;
    }
    .cont h1{
        font-family: 'Oswald';
        font-size: 3vw;
        letter-spacing: 1vw;
        font-weight: bolder;
    }
    .cont p{
        font-family: 'Nunito';
        font-size: 1.5vw;
        letter-spacing: 0.3vw;
        font-weight: bold;
        text-align: left;
        color: whitesmoke;
    }
    .cont a{
        font-family: 'Nunito';
        font-size: 2vw;
        letter-spacing: 0.3vw;
        font-weight: bold;
        text-align: left;
    }
</style>
<script>
    export default{
        methods:{
            NuevaSala() {
                var x = document.getElementById("bienv");            
                var y = document.getElementById("crearS");
                var z = document.getElementById("unirse");
                var w = document.getElementById("instruc");

                x.style.display = "none";
                y.style.display = "block";
                z.style.display = "none";
                w.style.display = "none";

            },
            UnirseSala(){
                var x = document.getElementById("bienv");            
                var y = document.getElementById("crearS");
                var z = document.getElementById("unirse");
                var w = document.getElementById("instruc");

                x.style.display = "none";
                y.style.display = "none";
                z.style.display = "block";
                w.style.display = "none";
            },
            Instruc() {
                var x = document.getElementById("bienv");            
                var y = document.getElementById("crearS");
                var z = document.getElementById("unirse");
                var w = document.getElementById("instruc");

                x.style.display = "none";
                y.style.display = "none";
                z.style.display = "none";
                w.style.display = "block";
            },
            Atras() {
                var x = document.getElementById("bienv");            
                var y = document.getElementById("crearS");
                var z = document.getElementById("unirse");
                var w = document.getElementById("instruc");

                x.style.display = "block";
                y.style.display = "none";
                z.style.display = "none";
                w.style.display = "none";
            }
        }
    }
</script>