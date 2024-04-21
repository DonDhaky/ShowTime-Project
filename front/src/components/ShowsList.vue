<script setup>
import { ref } from "vue";

// VAR CONCERTS
const concerts = ref([]);

// AFFICHER LES CONCERTS
const fetchConcerts = async () => {
  const response1 = await fetch("http://localhost:3000/concerts");
  const data = await response1.json();
  concerts.value = data;
  console.log("Liste des concerts :", concerts.value);
};

// POUR ME RENDRE SUR UNE VUE D'UN CONCERT
const router = useRouter();
// defineProps(['concerts']);

const goToConcert = (id) => {
  console.log(id);
  // router.push({ name: 'AffichageConcert', params: { id } });
};
</script>

<template>
  <!-- <div class="gridshows">
    <div>CECI EST SENSE REPRESENTER UN BLOC OU SE TROUVE LES INFOS DE CHAQUE CONCERT</div>
    <div>CECI EST SENSE REPRESENTER UN BLOC OU SE TROUVE LES INFOS DE CHAQUE CONCERT</div>
    <div>CECI EST SENSE REPRESENTER UN BLOC OU SE TROUVE LES INFOS DE CHAQUE CONCERT</div>
    <div>CECI EST SENSE REPRESENTER UN BLOC OU SE TROUVE LES INFOS DE CHAQUE CONCERT</div>
    <div>CECI EST SENSE REPRESENTER UN BLOC OU SE TROUVE LES INFOS DE CHAQUE CONCERT</div>
    <div>CECI EST SENSE REPRESENTER UN BLOC OU SE TROUVE LES INFOS DE CHAQUE CONCERT</div>
    <div>CECI EST SENSE REPRESENTER UN BLOC OU SE TROUVE LES INFOS DE CHAQUE CONCERT</div>
    <div>CECI EST SENSE REPRESENTER UN BLOC OU SE TROUVE LES INFOS DE CHAQUE CONCERT</div>
    <div>CECI EST SENSE REPRESENTER UN BLOC OU SE TROUVE LES INFOS DE CHAQUE CONCERT</div>
    <div>CECI EST SENSE REPRESENTER UN BLOC OU SE TROUVE LES INFOS DE CHAQUE CONCERT</div>
    <div>CECI EST SENSE REPRESENTER UN BLOC OU SE TROUVE LES INFOS DE CHAQUE CONCERT</div>
    <div>CECI EST SENSE REPRESENTER UN BLOC OU SE TROUVE LES INFOS DE CHAQUE CONCERT</div>
    <div>CECI EST SENSE REPRESENTER UN BLOC OU SE TROUVE LES INFOS DE CHAQUE CONCERT</div>
    <div>CECI EST SENSE REPRESENTER UN BLOC OU SE TROUVE LES INFOS DE CHAQUE CONCERT</div>
    <div>CECI EST SENSE REPRESENTER UN BLOC OU SE TROUVE LES INFOS DE CHAQUE CONCERT</div>
    <div>CECI EST SENSE REPRESENTER UN BLOC OU SE TROUVE LES INFOS DE CHAQUE CONCERT</div>
  </div> -->

  <div class="concerts-container">
    <div
      class="concert"
      v-for="concert in concerts"
      :key="concert.id"
      @click="goToConcert(concert.id)"
    >
      <h1>{{ concert.group }}</h1>
      <p>{{ concert.date }}</p>
      <p>{{ concert.genre }}</p>
      <p>{{ concert.price }}</p>
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
  grid-template-columns: 1fr;
}

.gridshows div {
  margin-top: 2rem;
}
</style>
