<script setup>
import { onMounted,ref } from "vue";

onMounted(async () => {
  console.log('toto');
  await fetchUsers();
  await fetchConcerts()
  // await deleteAccount();
});
// SHOWS VARIABLES
const concerts = ref([]);
const genre = ref("");
const group = ref("");
const date = ref("");
const price = ref("");
const number_of_bookings = ref("");

// USERS VARIABLES
const users = ref([]);
const email = ref("");
const username = ref("");
const is_admin = ref("");

// AFFICHER LES USERS ////////////////////////////////////////////////////////////////////////////
const fetchUsers = async () => {
  const response = await fetch("http://localhost:3000/users");
  const data = await response.json();
  users.value = data;
  console.log("Liste des users :", users.value);
};

// EDIT UN USER
const submitEditUser = async (id) => {
  console.log(id,"id");
  const user = users.value.find((user) => user._id === id);
  console.log(user,"");
  try {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        username: user.username,
        is_admin: user.is_admin,
      }),
    });
    if (response.ok) {
      console.log('ok');
      await fetchUsers(); 
      // const data = await response.json();
      // email.value = data.email;
    } else {
      console.error("Erreur lors de la modification du compte");
    }
  } catch (error) {
    console.error("Erreur lors de la modification du compte:", error.message);
  }
};

// DELETE UN USER
const submitDeleteUser = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      //   email: email.value,
      // }),
    });
    if (response.ok) {
      await fetchUsers(); 
      console.log("Compte supprimé avec succès");
    } else {
      console.error("Erreur");
    }
  } catch (error) {
    console.error("Erreur lors de la suppression du compte:", error.message);
  }
};

// AFFICHER LES CONCERTS //////////////////////////////////////////////////////////////////////////////
const fetchConcerts = async () => {
  const response1 = await fetch("http://localhost:3000/concerts");
  const data = await response1.json();
  concerts.value = data;
  console.log("Liste des concerts :", concerts.value);
};

// MODIFIER UN CONCERT
const submitEditShow =  async (id) => {
  console.log(id,"id");
  const concert = concerts.value.find((concert) => concert._id === id);
  console.log(concert,"consertconsert");
  try {
    const response = await fetch(`http://localhost:3000/concerts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        genre: concert.genre,
        group: concert.group,
        price: concert.price,
        date: concert.date
      }),
    });
    if (response.ok) {
      console.log('ok');
      await fetchConcerts(); 
      // const data = await response.json();
      // email.value = data.email;
    } else {
      console.error("Erreur lors de la modification des concerts");
    }
  } catch (error) {
    console.error("Erreur lors de la modification des concerts:", error.message);
  }
};
// AJOUTER UN CONCERT
const addShow = () => {
  //
};

// SUPPRIMER UN CONCERT
const submitDeleteShow = async (id) => {


  try {
    const response = await fetch(`http://localhost:3000/concerts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
 
    });
    if (response.ok) {
      console.log('ok');
      await fetchConcerts(); 
      console.log("concert supprimé avec succès");
    } else {
      console.error("Erreur");
    }
  } catch (error) {
    console.error("Erreur lors de la suppression du concert:", error.message);
  }
};
</script>

<template>
  <div class="users-concerts-dashboard-grid">
    <div class="concerts-container">
      <h1>Liste des concerts :</h1>
      <div class="concert" v-for="concert in concerts" :key="concert._id">
        <p>Nom du groupe :</p>
        <input v-model="concert.group" />
        <p>Date du concert :</p>
        <input v-model="concert.date" />
        <p>Genre :</p>
        <input v-model="concert.genre" />
        <p>Prix :</p>
        <input v-model="concert.price" />
        <button @click="submitEditShow(concert._id)">Modifier</button>
        <button @click="submitDeleteShow(concert._id)">Supprimer</button>
      </div>
    </div>

    <div class="users-container">
      <h1>Liste des users :</h1>
      <div class="user" v-for="user in users" :key="user._id">
        <p>Username :</p>
        <input v-model="user.username" />
        <p>Email :</p>
        <input v-model="user.email" />
        <p>Admin ?</p>
        <input v-model="user.is_admin" />
        <button @click="submitEditUser(user._id)">Modifier</button>
        <button @click="submitDeleteUser(user._id)">Supprimer</button>
      </div>

    </div>
    
  </div>

</template>

<style scoped>
.users-concerts-dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  margin-left: 20%;
}

.concerts-container,
.users-container {
  background-color: #383636;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.concerts-container h1,
.users-container h1 {
  text-align: center;
  margin-bottom: 20px;
}

.concert,
.user {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
}

.concert p,
.user p {
  margin: 0;
}

.concert input,
.user input {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
}

.concert button,
.user button {
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  margin-right: 10px;
}

.concert button:last-child,
.user button:last-child {
  background-color: #f44336;
}

.concert button:hover,
.user button:hover {
  background-color: #3e8e41;
}

.concert button:last-child:hover,
.user button:last-child:hover {
  background-color: #c62828;
}
</style>
