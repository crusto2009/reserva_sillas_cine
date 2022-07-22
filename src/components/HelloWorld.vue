<script setup>
import { ref, reactive, onBeforeMount, computed } from 'vue'

const letras = ref(['A', 'B', 'C', 'D', 'E', 'F'])

let sillasReferencia = ref(null)
const loading = ref(false)
const url = ref('https://reservascine-default-rtdb.firebaseio.com/sillas.json')


const stylesSillas = ref({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill,minmax(4em,1fr))`,
  gridTemplateRows: `repeat(${2}, 1fr)`,
  gridGap: "1px"
})


onBeforeMount(() => {
  fetch(url.value)
    .then((res) => res.json())
    .then((json) => {
      sillasReferencia.value = json

    })
    .catch((err) => (err))

  /*  = data */

  setInterval(() => {
    if (sillasReferencia.value != null) {
      loading.value = true
      /* stylesSillas.gridTemplateColumns = `repeat(${sillasReferencia!= null > 0 ? sillasReferencia[0].length : 'none'}, 1fr)` */
    }
  }, 1500);


})


const sillasTeatro = computed(() => {
  return sillas.numero
})


const sillasOcupadas = computed(() => {

  let contadorsillasLibres = 0

  if (sillasReferencia.value != null) {
    Object.values(sillasReferencia.value).map((sillaFiltro) => {
      console.log(sillaFiltro)
      Object.values(sillaFiltro).map((silla) => {

        if (silla.estado) {
          contadorsillasLibres++
        }
      })
    })
  }


  return contadorsillasLibres
})

const sillasLibres = computed(() => {

  let contadorsillasLibres = 0
  if (sillasReferencia.value != null) {

    Object.values(sillasReferencia.value).map((sillaFiltro) => {

      Object.values(sillaFiltro).map((silla) => {
        if (!silla.estado) {
          contadorsillasLibres++
        }
      })
    })
  }

  return contadorsillasLibres
})




const changeStateSilla = (posiciones) => {
  const { indexFila, indexColumna } = posiciones
  let estado = sillasReferencia.value[indexFila][indexColumna].estado
  sillasReferencia.value[indexFila][indexColumna].estado = !estado
  console.log(sillasReferencia.value[indexFila][indexColumna].id)
  fetch(url.value, {
  method: "PUT",
  body: JSON.stringify(sillasReferencia.value),
  headers: {"Content-type": "application/json; charset=UTF-8"}
})
    .then((res) => res.json())
    .catch((err) => (err))
}


</script>

<template>
  <div class="container-screen-movie">
    <div class="screen-pantalla-movie">
      <h3>PANTALLA</h3>
      <div v-if="loading">
        <div>
          <strong>Sillas libres:</strong> {{ sillasLibres }}
        </div>
        <div>
          <strong>Sillas ocupadas:</strong> {{ sillasOcupadas }}
        </div>
      </div>
    </div>
    <div class="numeracion" v-if="loading">
      <div class="numeracion-letras">
        <div v-for="letra in letras" :key="letra">
          {{ letra }}
        </div>
      </div>

      <div class="container-sillas">
        <div :style="stylesSillas" v-for="(sillaFila, indexFila) in sillasReferencia.length"
          :key="sillaFila[indexFila]">
          <div class="sillas-movie" v-for="(sillaColumna, indexColumna) in sillasReferencia[0].length"
            :key="sillaColumna[indexColumna]" @click="changeStateSilla({ indexFila, indexColumna })"
            :class="{ 'ocupado': sillasReferencia[indexFila][indexColumna].estado }">
            {{ sillaColumna }}
          </div>
        </div>
      </div>
    </div>
    <div class="loading" v-else>
      <h1>Cargando...</h1>
    </div>
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

.container-sillas,
.loading {
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
  padding-right: 12px
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
