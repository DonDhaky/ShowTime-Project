<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

const submitLogin = () => {
  //
};
</script>

<template>
  <div>
    <form @submit="submitLogin">
      <label for="email">Email :</label>
      <input type="email" id="email" v-model="email" required />
      <label for="password">Mot de passe :</label>
      <input type="password" id="password" v-model="password" required />
      <button type="submit">Se connecter</button>
    </form>
  </div>
</template>
