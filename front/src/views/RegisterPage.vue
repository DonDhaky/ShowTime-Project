<script setup>
import { ref } from "vue";

const registerFormData = ref({
  email: '',
  password: ''
});

const submitRegister = async () => {
  try {
    const response = await fetch('http://localhost:3000/users/signup',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(registerFormData.value)
    });

    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error("Une erreur a été rencontrée lors de la tentative d'inscription");
    }
    
    console.log('Utilisateur inscrit avec succès !');
    alert('Vous vous êtes bien inscrit(e) sur Los Ticketos !');
    // window.location.href = 'http://localhost:5173/home';
  } 
  
  catch (error) {
    console.error(error);
    alert("L'inscription n'a pas pu être validée, veuillez réessayer !");
  }
};

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
