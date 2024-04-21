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
const displayBookings = async () => {
  const response = await fetch('http://localhost:3000/concerts');
  const dataBookings = await response.json();
  concerts.value = dataBookings;
  console.log('Liste des concerts réservés :', concerts.value);
};

</script>

<template>
  
  <div class="concerts-container">
    <h1>Vos réservations :</h1>
    <div class="concert" v-for="concert in concerts" :key="concert.id">
      <p>Nom du groupe : {{ concert.group }}</p>
      <p>Date du concert : {{ concert.date }}</p>
      <p>Genre : {{ concert.genre }}</p>
    </div>
  </div>

</template>

<style scoped>

.concerts-container {
  display: grid;
  text-align: center;
}

</style>