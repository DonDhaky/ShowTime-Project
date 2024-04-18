<template>
  <div>
    <div v-if="!loggedIn">
      <form @submit.prevent="submitLogin" class="form">
        <h1 class="title">Mon compte</h1>
        <label for="email">Email :</label>
        <input type="email" id="email" v-model="email" required />
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" v-model="password" required />
        <button type="submit">Se connecter</button>
        <button @click="closeForm" class="close-button">X</button>
      </form>
    </div>
    <div v-else>
      <h2>Bienvenue !</h2>
      <p>Email: {{ email }}</p>
      <p>Mot de passe: {{ password }}</p>
      <button @click="deleteAccount">Supprimer le compte</button>
    </div>
  </div>
</template>

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

const closeForm = () => {
  // Fermer la fenêtre du formulaire 
  loggedIn.value = true;
};
</script>

<style scoped>
.form {
  max-width: 300px;
  margin: 0 auto;
  margin-top: 10%;
  background-color: grey; /* Fond */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ombre */
  position: relative; /* bouton de fermeture */
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.input-container {
  margin-bottom: 15px;
}

.input-container label {
  display: block;
  margin-bottom: 5px;
}

.input-container input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button-container {
  text-align: center;
}

.button-container button {
  padding: 10px 20px;
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button-container button:hover {
  background-color: hsla(160, 100%, 37%, 1); /* Variation de couleur survol */
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  color: #333;
  font-size: 20px;
  border: none;
  cursor: pointer;
}
</style>
