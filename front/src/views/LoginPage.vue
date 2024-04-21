<script setup>
import { ref } from "vue";

const loginFormData = ref({
  email: '',
  password: ''
});

const submitLogin = () => {
  const formData = new URLSearchParams();
  formData.append("email", loginFormData.value.email);
  formData.append("password", loginFormData.value.password);

  fetch("http://localhost:3000/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Une erreur s'est produite lors de la connexion.");
      }
      console.log("Connexion réussie !");
      alert("Vous êtes bien connecté(e) sur Lost Ticketos !");
      window.location.href = "http://localhost:5173/home";
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<template>
  <div>
    <form @submit="submitLogin" class="form">
      <h1 class="title">Connexion à Los Ticketos</h1>
      <label for="email">Email :</label>
      <input type="email" id="email" v-model="loginFormData.email" required />
      <label for="password">Mot de passe :</label>
      <input type="password" id="password" v-model="loginFormData.password" required />
      <button type="submit">Se connecter</button>
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
