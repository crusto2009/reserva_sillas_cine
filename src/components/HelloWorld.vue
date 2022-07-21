<script setup>
import { ref, reactive, onMounted, onBeforeMount, computed } from 'vue'
import { useFetch } from '../logica/fetch.js'

const letras = ref(['A', 'B', 'C', 'D', 'E', 'F'])

let sillasReferencia = ref([[
  { id: 1, estado: true, numero: 1 },
  { id: 2, estado: false, numero: 2 },
  { id: 3, estado: false, numero: 3 },
  { id: 4, estado: false, numero: 4 },
  { id: 5, estado: false, numero: 5 },
  { id: 6, estado: false, numero: 6 },
  { id: 7, estado: false, numero: 7 },
  { id: 8, estado: false, numero: 8 },
  { id: 9, estado: false, numero: 9 },
  { id: 10, estado: false, numero: 10 },
  { id: 11, estado: false, numero: 11 },
  { id: 12, estado: false, numero: 12 },
  { id: 13, estado: false, numero: 13 },
  { id: 14, estado: false, numero: 14 },
  { id: 15, estado: false, numero: 15 },
  { id: 16, estado: false, numero: 16 },
  { id: 17, estado: false, numero: 17 }
],
[
  { id: 1, estado: false, numero: 1 },
  { id: 2, estado: false, numero: 2 },
  { id: 3, estado: false, numero: 3 },
  { id: 4, estado: false, numero: 4 },
  { id: 5, estado: false, numero: 5 },
  { id: 6, estado: false, numero: 6 },
  { id: 7, estado: false, numero: 7 },
  { id: 8, estado: false, numero: 8 },
  { id: 9, estado: false, numero: 9 },
  { id: 10, estado: false, numero: 10 },
  { id: 11, estado: false, numero: 11 },
  { id: 12, estado: false, numero: 12 },
  { id: 13, estado: false, numero: 13 },
  { id: 14, estado: false, numero: 14 },
  { id: 15, estado: false, numero: 15 },
  { id: 16, estado: false, numero: 16 },
  { id: 17, estado: true, numero: 17 }
],
[
  { id: 1, estado: false, numero: 1 },
  { id: 2, estado: false, numero: 2 },
  { id: 3, estado: false, numero: 3 },
  { id: 4, estado: false, numero: 4 },
  { id: 5, estado: false, numero: 5 },
  { id: 6, estado: false, numero: 6 },
  { id: 7, estado: false, numero: 7 },
  { id: 8, estado: false, numero: 8 },
  { id: 9, estado: false, numero: 9 },
  { id: 10, estado: false, numero: 10 },
  { id: 11, estado: false, numero: 11 },
  { id: 12, estado: false, numero: 12 },
  { id: 13, estado: false, numero: 13 },
  { id: 14, estado: false, numero: 14 },
  { id: 15, estado: false, numero: 15 },
  { id: 16, estado: false, numero: 16 },
  { id: 17, estado: true, numero: 17 }
],
[
  { id: 1, estado: false, numero: 1 },
  { id: 2, estado: false, numero: 2 },
  { id: 3, estado: false, numero: 3 },
  { id: 4, estado: false, numero: 4 },
  { id: 5, estado: false, numero: 5 },
  { id: 6, estado: false, numero: 6 },
  { id: 7, estado: false, numero: 7 },
  { id: 8, estado: false, numero: 8 },
  { id: 9, estado: false, numero: 9 },
  { id: 10, estado: false, numero: 10 },
  { id: 11, estado: false, numero: 11 },
  { id: 12, estado: false, numero: 12 },
  { id: 13, estado: false, numero: 13 },
  { id: 14, estado: false, numero: 14 },
  { id: 15, estado: false, numero: 15 },
  { id: 16, estado: false, numero: 16 },
  { id: 17, estado: true, numero: 17 }
],
[
  { id: 1, estado: false, numero: 1 },
  { id: 2, estado: false, numero: 2 },
  { id: 3, estado: false, numero: 3 },
  { id: 4, estado: false, numero: 4 },
  { id: 5, estado: false, numero: 5 },
  { id: 6, estado: false, numero: 6 },
  { id: 7, estado: false, numero: 7 },
  { id: 8, estado: false, numero: 8 },
  { id: 9, estado: false, numero: 9 },
  { id: 10, estado: false, numero: 10 },
  { id: 11, estado: false, numero: 11 },
  { id: 12, estado: false, numero: 12 },
  { id: 13, estado: false, numero: 13 },
  { id: 14, estado: false, numero: 14 },
  { id: 15, estado: false, numero: 15 },
  { id: 16, estado: false, numero: 16 },
  { id: 17, estado: true, numero: 17 }
],
[
  { id: 1, estado: false, numero: 1 },
  { id: 2, estado: false, numero: 2 },
  { id: 3, estado: false, numero: 3 },
  { id: 4, estado: false, numero: 4 },
  { id: 5, estado: false, numero: 5 },
  { id: 6, estado: false, numero: 6 },
  { id: 7, estado: false, numero: 7 },
  { id: 8, estado: false, numero: 8 },
  { id: 9, estado: false, numero: 9 },
  { id: 10, estado: false, numero: 10 },
  { id: 11, estado: false, numero: 11 },
  { id: 12, estado: false, numero: 12 },
  { id: 13, estado: false, numero: 13 },
  { id: 14, estado: false, numero: 14 },
  { id: 15, estado: false, numero: 15 },
  { id: 16, estado: false, numero: 16 },
  { id: 17, estado: true, numero: 17 }
]
])
const sillas = reactive(sillasReferencia.value)


const stylesSillas = ref({
  display: "grid",
  gridTemplateColumns: `repeat(${sillas[0].length}, 1fr)`,
  gridTemplateRows: `repeat(${2}, 1fr)`,
  gridGap: "1px"
})

const limitAge = ref(18)
const age = ref('')
const isVertical = ref(true)

onMounted(() => {







})

onBeforeMount(() => {
  const { data, error } = useFetch('https://reservascine-default-rtdb.firebaseio.com/sillas/-N7XkQm5aq1Q8bUGawEX.json')
  console.log(data)

  sillasReferencia.value = data


  /*  if (window.localStorage.getItem('sillas')) {
     sillasReferencia = JSON.parse(window.localStorage.getItem('sillas'))
 
   } else {
     window.localStorage.setItem('sillas', JSON.stringify(sillas));
   } */
})


const sillasTeatro = computed(() => {
  return sillas.numero
})


const sillasOcupadas = computed(() => {

  let contadorsillasLibres = 0

  sillas.map((sillaFiltro, index) => {
    sillaFiltro.map((silla) => {

      if (silla.estado) {
        contadorsillasLibres++
      }
    })
  })
  return contadorsillasLibres
})

const sillasLibres = computed(() => {

  let contadorsillasLibres = 0

  sillas.map((sillaFiltro, index) => {
    sillaFiltro.map((silla) => {

      if (!silla.estado) {
        contadorsillasLibres++
      }
    })
  })
  return contadorsillasLibres
})




const changeStateSilla = (posiciones) => {
  console.log(posiciones)
  const { indexFila, indexColumna } = posiciones
  console.log(sillas[indexFila][indexColumna].estado)
  let estado = sillas[indexFila][indexColumna].estado
  sillas[indexFila][indexColumna].estado = !estado
  window.localStorage.setItem('sillas', JSON.stringify(sillas));
}


</script>

<template>
  <div class="container-screen-movie">
    <div class="screen-pantalla-movie">
      <h3>PANTALLA</h3>
      <div>
        <div>
          <strong>Sillas libres:</strong> {{ sillasLibres }}
        </div>
        <div>
          <strong>Sillas ocupadas:</strong> {{ sillasOcupadas }}
        </div>
      </div>
    </div>
    <div class="numeracion">
      <div class="numeracion-letras">
        <div v-for="letra in letras" :key="letra">
          {{ letra }}
        </div>
      </div>
      <div class="container-sillas">
        <div :style="stylesSillas" v-for="(sillaFila, indexFila) in sillas.length" :key="sillaFila[indexFila]">
          <div class="sillas-movie" v-for="(sillaColumna, indexColumna) in sillas[0].length"
            :key="sillaColumna[indexColumna]" @click="changeStateSilla({ indexFila, indexColumna })"
            :class="{ 'ocupado': sillas[indexFila][indexColumna].estado }">
            {{ sillaColumna }}
            <!--  {{ sillas[indexFila]}} -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>

  </div>
</template>

<style scoped>
.container-screen-movie {
  width: 89vw;
  height: 90vh;
  border: 2px solid silver;
  padding: 23px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;


}

.screen-pantalla-movie {
  width: 39vw;
  height: 30vh;
  border: 2px solid lime;
}

.container-sillas {
  width: 79vw;
  height: 50vh;
  border: 2px solid lime;
  padding: 23px;
  place-content: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.numeracion-letras {
  height: 83%;
  display: flex;
  flex-direction: column;
  justify-content: initial;
  align-items: center;
  align-content: center;
  grid-gap: 31px;
  padding-top: 70px;
  padding-right:12px
}

.sillas-movie {
  width: 20px;
  height: 20px;
  border: 2px solid rgb(57, 36, 221);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer
}

.numeracion {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.ocupado {
  background-color: red;
  color: white
}
</style>
