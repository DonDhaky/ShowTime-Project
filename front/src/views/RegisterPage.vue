<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const submitRegister = () => {
  //
}
</script>

<template>
        <h1 class="title">Inscrivez-vous sur Los Ticketos</h1>
    <div>
      <form @submit="submitRegister" class="form">
        <label for="email">Email :</label>
        <input type="email" id="email" v-model="email" required>
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" v-model="password" required>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
    
  </template>

  <style scoped>

  .form {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    max-width: 300px;
    margin: 0 auto;
  }

  .form label,
  .form button {
  margin-top: 30px;
  }

  .title {
    text-align: center;
  }

  </style>

  