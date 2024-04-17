<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

const submitRegister = () => {
  //
};
</script>

<template>
  <div>
    <form @submit="submitRegister">
      <label for="email">Email :</label>
      <input type="email" id="email" v-model="email" required />
      <label for="password">Mot de passe :</label>
      <input type="password" id="password" v-model="password" required />
      <button type="submit">S'inscrire</button>
    </form>
  </div>
</template>
