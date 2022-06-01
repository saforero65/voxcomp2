.<template>
 
    <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
            <h2 id="titulin"> MODO DE JUEGO </h2>
            <!-- <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">x</button> -->
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Libre
            </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
                <div class="info">
                    Podrás crear lo que desees, no  tendrás ningún objetivo por cumplir.
                    <img class="imgmenu" src="../assets/Libre.png" alt="modolibre">
                </div>
                    <button class="btn1"><a>Seleccionar</a></button>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Retos
            </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                <div class="info">
                    En este modo tendrás que cumplir el objetivo que se te plantee.
                    <img class="imgmenu" src="../assets/Retos.png" alt="modolibre">
                </div>
                <div class="botones">
                    <button class="btn1"><a>Reto 1</a></button>
                    <button class="btn1"><a>Reto 2</a></button>
                    <button class="btn1"><a>Reto 3</a></button>
                </div>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Quoridor
            </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                <div class="info">
                    En este juego de dos jugadores, cada uno tiene el objetivo de llegar al otro lado poniendole obstáculos a su oponente.
                    <img class="imgmenu" src="../assets/Quoridor.png" alt="modolibre">
                </div>
                    <button class="btn1"><a>PRÓXIMAMENTE</a></button>
            </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
    .accordion{
        --bs-accordion-bg:rgba(0, 0, 0, 0);
        --bs-accordion-border-radius: 25px;
        --bs-accordion-btn-icon: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e);
        --bs-accordion-btn-active-icon: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e);
    }
    #accordionFlushExample{
        margin-top: 5%;
        width: 40vh;
        border: solid 3px yellowgreen;
        border-right: none;
        border-bottom-left-radius: 25px;
        border-top-left-radius: 25px;
        /* position: absolute; */
        z-index: 999;
    }

    #titulin{
        font-family: "Oswald";
        /* font-size: 2.5vw; */
        letter-spacing: 0.5vw;
        font-weight: bolder;
        font-size: 3vh;
        color: white;
        /* margin: 5%; */
        padding: 6%;
        border-top-left-radius: 25px;
        background-color: black;
        /* text-align: left; */
        /* border-top: solid 2px yellowgreen;
        border-left: solid 2px rgb(255, 30, 0);
        border-bottom: solid 2px #f0f; */
    }
    .accordion-body{
        /* background-color: black; */
        color: white;
        border: none;
        /* border-radius: 25px; */
        background-color: rgba(0, 0, 0, 0.7);
        font-family: "Nunito";
        /* font-size: 0.5vw; */
        letter-spacing: 0.2vw;
        /* font-weight: bold; */
    }
    .accordion-button {
        /* background-color: black; */
        color: whitesmoke;
        border: none;
        /* border-radius:25px; */
        background-color: rgba(0, 0, 0, 0.7);
        font-family: "Nunito";
        /* font-size: 0.5vw; */
        letter-spacing: 0.5vw;
        font-weight: bold;
        text-align: center;
    }
    .accordion-button:not(.collapsed) {
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        border: none;
        /* border-radius:50%; */
        
    }
    .imgmenu{
        height: 6vh;
        margin: 5%;
    }
    .info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 2vh;
        text-align: left;
        margin-bottom: 5%;
    }
    .btn1 {
        position: relative;
        min-width: 10vw;
        height: 3vw;
        display: inline-block;
        color: #fff;
        background-color: black;
        border-radius: 50px;
        border: 3px solid transparent;
        font-size: 2vh;
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

</style>