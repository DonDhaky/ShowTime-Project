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


//////////////////////////////////////////////////////////////////////////// AFFICHER LES USERS
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


////////////////////////////////////////////////////////////////////////////// AFFICHER LES CONCERTS
const fetchConcerts = async () => {
  const response1 = await fetch('http://localhost:3000/concerts');
  const data = await response1.json();
  concerts.value = data;
  console.log('Liste des concerts :', concerts.value);
};

// POSTER UN CONCERT
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

  <div class="concerts-container">
    <div class="concert" v-for="concert in concerts" :key="concert.id">
      <h1> {{ concert.group }} </h1>
      <p> {{ concert.date }} </p>
      <p> {{ concert.genre }} </p>
      <p> {{ concert.price }} </p>
    </div>
  </div>

  <div class="users-container">
    <div class="user" v-for="user in users" :key="user.id">
      <h1> {{ user.username }} </h1>
      <p> {{ user.email }} </p>
      <p> {{ user.is_admin }} </p>
    </div>
  </div>

</template>

<style scoped>
.form {
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 10%;
}

.form label,
.form button {
  margin-top: 30px;
}

.title {
  text-align: center;
}
</style>
