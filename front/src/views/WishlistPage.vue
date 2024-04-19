<script setup>
import { ref } from "vue";

// SHOWS VARIABLES
const concerts = ref([])
const genre = ref('')
const group = ref('')
const date = ref('')
// const price = ref('')
// const number_of_bookings = ref('')

// A MODIFIER
const displayFavorites = async () => {
  const response = await fetch('http://localhost:3000/concerts');
  const dataFavorites = await response.json();
  concerts.value = dataFavorites;
  console.log('Liste des concerts en favoris :', concerts.value);
};

</script>

<template>
  
  <div class="concerts-container">
    <h1>Liste des favoris :</h1>
    <div class="concert" v-for="concert in concerts" :key="concert.id">
      <p>Nom du groupe : {{ concert.group }}</p>
      <p>Date du concert : {{ concert.date }}</p>
      <p>Genre : {{ concert.genre }}</p>
      <button @click="submitDeleteShow">Supprimer des favoris</button>
    </div>
  </div>

</template>

<style scoped>

.concerts-container {
  display: grid;
  text-align: center;
}

</style>
