<script setup>
import { ref } from "vue";

const registerFormData = ref({
  email: '',
  is_admin: "0",
  password: '',
  wishlist: "[]",
  notify: "[]",
  booked: "[]"
});

const submitRegister = () => {
  const formData = new URLSearchParams();
  formData.append('email', registerFormData.value.email);
  formData.append('password', registerFormData.value.password);
  formData.append('is_admin', registerFormData.value.is_admin);
  formData.append('wishlist', registerFormData.value.wishlist);
  formData.append('notify', registerFormData.value.notify);
  formData.append('booked', registerFormData.value.booked);

  fetch('http://localhost:3000/users/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Une erreur a été rencontrée lors de la tentative d'inscription.");
    }
    console.log('Utilisateur inscrit avec succès !');
    alert('Vous êtes bien inscrit(e) sur Los Ticketos ! Connectez-vous dés maintenant !');
    window.location.href = 'http://localhost:5173/login';
  })
  .catch(error => {
    console.log(error);
  });
};


</script>

<template>
  <div>
    <form @submit="submitRegister" class="form">
      <h1 class="title">Inscrivez-vous sur Los Ticketos</h1>
      <label for="email">Email :</label>
      <input type="email" id="email" v-model="registerFormData.email" required />
      <label for="password">Mot de passe :</label>
      <input type="password" id="password" v-model="registerFormData.password" required />
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
