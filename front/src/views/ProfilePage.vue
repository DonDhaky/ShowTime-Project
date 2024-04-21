<script setup>
import { onMounted, ref } from "vue";

onMounted(async () => {
  console.log('toto');
  await showdata();
  // await deleteAccount();
});

const email = ref("");
const password = ref("");
const id = ref("662503a481579f9a8c950324");
// importer d'Erick!!!!!


const editAccount = async () => {
  try {
    const response = await fetch(`http://localhost:3000/users/${id.value}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    if (response.ok) {
      console.log('ok');
      // const data = await response.json();
      // email.value = data.email;
    } else {
      console.error("Erreur lors de la modification du compte");
    }
  } catch (error) {
    console.error("Erreur lors de la modification du compte:", error.message);
  }
};

const showdata = async () => {
  try {
    const response = await fetch(`http://localhost:3000/users/${id.value}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      //   email: email.value,
      //   password: password.value,
      // }),
    });
    if (response.ok) {
      const data = await response.json();
      email.value = data.email;
    } else {
      console.error("Erreur lors de la modification du compte");
    }
  } catch (error) {
    console.error("Erreur lors de la modification du compte:", error.message);
  }
};

const deleteAccount = async () => {
  try {
    const response = await fetch(`http://localhost:3000/users/${id.value}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
      }),
    });
    if (response.ok) {
      console.log("Compte supprimé avec succès");
      // modif
      email.value = "";
      password.value = "";
    } else {
      console.error("Erreur");
    }
  } catch (error) {
    console.error("Erreur lors de la suppression du compte:", error.message);
  }
};

const closeForm = () => {};
</script>
<template>
  <div>
    <div class="form">
      <h1 class="title">Mon compte</h1>
      <div class="input-container">
        <label for="email">Email :</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="input-container">
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="button-container">
        <button @click="editAccount">Modifier</button>
        <button @click="deleteAccount">Supprimer le compte</button>
      </div>
      <button @click="closeForm" class="close-button">X</button>
    </div>
  </div>
</template>

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
  background-color: rgb(107, 103, 103);
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
