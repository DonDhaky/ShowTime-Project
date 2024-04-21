<script setup>
import { ref } from "vue";

// VAR CONCERTS
const concerts = ref([]);

// AFFICHER LES CONCERTS
const fetchConcerts = async () => {
  try {
    const response = await fetch('http://localhost:3000/concerts');
    if (!response.ok) {
      throw new Error("Une erreur a été rencontrée lors de la tentative de récupération des concerts.");
    }
    const dataConcerts = await response.json();
    concerts.value = dataConcerts;
    console.log('Liste des concerts :', concerts.value);
  } catch (error) {
    console.log(error);
  }
};

fetchConcerts();


// POUR ME RENDRE SUR UNE VUE D'UN CONCERT
// const router = useRouter();
// defineProps(['concerts']);

// const goToConcert = (id) => {
//   console.log(id);
  // router.push({ name: 'AffichageConcert', params: { id } });

// };



</script>

<template>
  <div class="concerts-container">
    <div class="concert" v-for="concert in concerts" :key="concert.id">
      <h2> {{ concert.group }} </h2>
      <p> En concert le {{ concert.date }} </p>
      <p> Genre : {{ concert.genre }} </p>
      <p> Prix : {{ concert.price }} € </p>
      <button @click="goToConcert(concert.id)">Détails</button><br>
      <button @click="goToConcert(concert.id)">Réserver sa place</button>

    </div>
  </div>
</template>

<style scoped>
.gridshows {
  display: grid;
  grid-template-columns: 1fr;
}

.concerts-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-left: -20%;
}

.gridshows div {
  margin-top: 2rem;
}

.concert {
  margin-bottom: 20%;
}

</style>
