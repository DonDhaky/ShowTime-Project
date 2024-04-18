<script setup>
import { ref } from 'vue'

// SHOWS VARIABLES
const concerts = ref([])
const genre = ref('')
const group = ref('')
const date = ref('')
const price = ref('')
const number_of_bookings = ref('')

// USERS VARIABLES
const users = ref([])
const email = ref('')
const username = ref('')
const is_admin = ref('')


// AFFICHER LES USERS //////////////////////////////////////////////////////////////////////////// 
const fetchUsers = async () => {
  const response = await fetch('http://localhost:3000/users');
  const data = await response.json();
  users.value = data;
  console.log('Liste des users :', users.value);
};

// EDIT UN USER
const submitEditUser = () => {
  //
}

// DELETE UN USER
const submitDeleteUser = () => {
  //
}


// AFFICHER LES CONCERTS //////////////////////////////////////////////////////////////////////////////
const fetchConcerts = async () => {
  const response1 = await fetch('http://localhost:3000/concerts');
  const data = await response1.json();
  concerts.value = data;
  console.log('Liste des concerts :', concerts.value);
};

// AJOUTER UN CONCERT
const submitAddShow = () => {
  //
}

// MODIFIER UN CONCERT
const submitEditShow = () => {
  //
}

// SUPPRIMER UN CONCERT
const submitDeleteShow = () => {
  //
}


</script>

<template>

<div class="users-concerts-dashboard-grid">

  <div class="concerts-container">
    <h1>Liste des concerts :</h1>
    <div class="concert" v-for="concert in concerts" :key="concert.id">
      <p>Nom du groupe :</p>
      <input v-model="concert.group">
      <p>Date du concert :</p>
      <input v-model="concert.date">
      <p>Genre :</p>
      <input v-model="concert.genre">
      <p>Prix :</p>
      <input v-model="concert.price">
      <button @click="submitEditShow">Modifier</button>
      <button @click="submitDeleteShow">Supprimer</button>
    </div>
  </div>

  <div class="users-container">
    <h1>Liste des users :</h1>
    <div class="user" v-for="user in users" :key="user.id">
      <p>Username :</p>
      <input v-model="user.username">
      <p>Email :</p>
      <input v-model="user.email">
      <p>Admin ?</p>
      <input v-model="user.is_admin">
      <button @click="submitEditUser">Modifier</button>
      <button @click="submitDeleteUser">Supprimer</button>
    </div>
  </div>
  
</div>

</template>

<style scoped>
.users-concerts-dashboard-grid {
  text-align: center;
  display: grid;
  grid-template-columns: 50% 50%;
  max-width: 100%;
  margin-left: 10%;
}

.concerts-container, .users-container {
  display: grid;
}

</style>
