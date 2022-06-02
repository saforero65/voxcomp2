<template>
<div class="cont">
    <div class="continf">
        <h1>Evita el deshielo</h1>
        <p>El calentamiento global es cada vez más notable y los
            polos están sufriendo las consecuencias.
        <br>Construye una isla de hielo.
        </p>
    </div>
    <button class="btn1" @click="exportar()" ><a>Continuar</a></button> 
</div>

</template>
<script>
    export default {
        methods:{
            exportar(){
                this.$emit("retosc",{
                    modelo: true
                })
                console.log("sisirve2");
            }
        }
    }
</script>

<style scoped>
    .cont{
        width: 50vw;
        position: absolute;
        color: white;
        z-index: 999;
        padding: 2%;
        background-color: black;
        border-radius: 25px;

        top: 10rem;
        left: 13rem;
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
    .btn1 {
        position: relative;
        min-width: 15vw;
        height: 4vw;
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
    h1{
        font-family: "Oswald";
        font-size: 2vw;
        letter-spacing: 1vw;
        font-weight: bolder;
    }
    p{
        font-family: "Nunito";
        font-size: 1.2vw;
        letter-spacing: 0.1vw;
        /* font-weight: bold; */
        text-align: left;
        color: whitesmoke;
        margin: 3%;
    }
</style>