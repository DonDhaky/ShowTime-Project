<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const submitRegister = () => {
  //
  alert('Vous êtes bien inscrit(e) sur Los Ticketos !')
}
</script>

<template>
  <div>
    <form @submit="submitRegister" class="form">
      <h1 class="title">Inscrivez-vous sur Los Ticketos</h1>
      <label for="email">Email :</label>
      <input type="email" id="email" v-model="email" required />
      <label for="password">Mot de passe :</label>
      <input type="password" id="password" v-model="password" required />
      <button type="submit">S'inscrire</button>
    </form>
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
