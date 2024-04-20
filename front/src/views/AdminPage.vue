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
const is_admin = ref('')
// const wishlist = ref([])
// const booked = ref([])

// AFFICHER LES USERS //////////////////////////////////////////////////////////////////////////// 
const fetchUsers = async () => {
  try {
    const response = await fetch('http://localhost:3000/users');
    if (!response.ok) {
      throw new Error("Une erreur a été rencontrée lors de la tentative de récupération des utilisateurs.");
    }
    const dataUsers = await response.json();
    users.value = dataUsers;
    console.log('Liste des utilisateurs :', users.value);
  } catch (error) {
    console.log(error);
  }
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

fetchUsers();
fetchConcerts();

</script>

<template>

  <div class="users-concerts-dashboard-grid">
    <div class="concerts-container">
      <h1>Liste des concerts :</h1>

      <table>
        <thead>
          <tr>
            <th>Nom du groupe</th>
            <th>Date du concert</th>
            <th>Genre</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="concert in concerts" :key="concert.id">
            <td><input v-model="concert.group" required /></td>
            <td><input v-model="concert.date" required /></td>
            <td><input v-model="concert.genre" required /></td>
            <td><input v-model="concert.price" type="number" required /></td>
            <td><button @click="submitEditShow(concert)">Modifier</button></td>
            <td><button @click="submitDeleteShow(concert)">Supprimer</button></td>
          </tr>
        </tbody>
      </table>

    </div>

    <div class="users-container">
      <h1>Liste des utilisateurs :</h1>

      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td><input v-model="user.email" required /></td>
            <td><input v-model="user.is_admin" type="checkbox" required /></td>
            <td><button @click="submitEditUser(user)">Modifier</button></td>
            <td><button @click="submitDeleteUser(user)">Supprimer</button></td>
          </tr>
        </tbody>
      </table>

    </div>
    
  </div>

</template>

<style scoped>
.users-concerts-dashboard-grid {
  text-align: center;
  display: grid;
  grid-template-columns: 60% 40%;
  max-width: 100%;
}

.concerts-container {
  overflow-y: auto;
  max-height: 57%;
  margin-left: 20%;
}


.users-container {
  overflow-y: auto;
  max-height: 57%;
}

</style>
