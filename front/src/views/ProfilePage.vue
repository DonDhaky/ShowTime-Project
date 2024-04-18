<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const loggedIn = ref(false);

const submitLogin = async () => {
  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  });
  if (response.ok) {
    loggedIn.value = true;
  } else {
   
    console.error('Erreur de connexion');
  }
};

const deleteAccount = async () => {
  const response = await fetch('http://localhost:3000/users', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email.value
    })
  });
  if (response.ok) {
    email.value = "";
    password.value = "";
    loggedIn.value = false;
  } else {
  
    console.error('Erreur de suppression du compte');
  }
};
</script>

<template>
  <div v-if="!loggedIn">
    <form @submit.prevent="submitLogin" class="form">
      <h1 class="title">Mon compte</h1>
      <label for="email">Email :</label>
      <input type="email" id="email" v-model="email" required />
      <label for="password">Mot de passe :</label>
      <input type="password" id="password" v-model="password" required />
      <button type="submit">Se connecter</button>
    </form>
  </div>
  <div v-else>
    <h2>Bienvenue !</h2>
    <p>Email: {{ email }}</p>
    <p>Mot de passe: {{ password }}</p>
    <button @click="deleteAccount">Supprimer le compte</button>
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
