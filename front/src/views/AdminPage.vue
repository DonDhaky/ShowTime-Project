<script setup>
import { ref } from 'vue'

// SHOWS VARIABLES
const concerts = ref([])
const addShowFormData = ref({
  group: '',
  date: '',
  genre: '',
  price: '',
  number_of_bookings: ''
})

// USERS VARIABLES
const users = ref([])


// AFFICHER LES USERS //////////////////////////////////////////////////////////////////////////// 
const fetchUsers = async () => {
  try {
    const response = await fetch('http://localhost:3000/users');
    if (!response.ok) {
      throw new Error("Une erreur a été rencontrée lors de la tentative de récupération des utilisateurs.");
    }
    const dataUsers = await response.json();
    users.value = dataUsers;
    console.log('Liste des users :', users.value);
  } catch (error) {
    console.log(error);
  }
};

// EDIT UN USER //////////////////////////////////////////////////////// A MODIFIER
const submitEditUser = async (user) => {
  try {
    const response = await fetch(`http://localhost:3000/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Une erreur a été rencontrée lors de la tentative de modification du user.");
    }
    console.log('Utilisateur modifié :', user);
    alert('Le user a été modifié avec succès !');
  } catch (error) {
    console.log(error);
  }
};

// DELETE UN USER //////////////////////////////////////////////////////// A MODIFIER
const submitDeleteUser = async (user) => {
  try {
    const response = await fetch(`http://localhost:3000/users/${user.id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error("Une erreur a été rencontrée lors de la tentative de suppression du user.");
    }
    const index = users.value.indexOf(user); // A CHANGER ??
    users.value.splice(index, 1); // A CHANGER ??
    console.log('User supprimé :', user);
    alert('Le user a été supprimé avec succès !');
  } catch (error) {
    console.log(error);
  }
};


// AFFICHER LES CONCERTS //////////////////////////////////////////////////////////////////////////////
const fetchConcerts = async () => {
  try {
    const response = await fetch('http://localhost:3000/concerts');
    if (!response.ok) {
      throw new Error("Une erreur a été rencontrée lors de la tentative de récupération des concerts.");
    }
    const dataConcerts = await response.json();
    concerts.value = dataConcerts;
    console.log('Liste des concerts :', concerts.value);
  } catch (error) {
    console.log(error);
  }
};

// AJOUTER UN CONCERT
const submitAddShow = () => {
  const formData = new URLSearchParams();
  formData.append('group', addShowFormData.value.group);
  formData.append('date', addShowFormData.value.date);
  formData.append('genre', addShowFormData.value.genre);
  formData.append('price', addShowFormData.value.price);
  formData.append('number_of_bookings', addShowFormData.value.number_of_bookings);


  fetch('http://localhost:3000/concerts/schedule', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Une erreur a été rencontrée lors de la tentative d'ajout du concert.");
    }
    console.log('Concert ajouté avec succès !');
    alert('Le concert a été ajouté avec succès !');
    window.location.href = 'http://localhost:5173/admindashboard';
  })
  .catch(error => {
    console.log(error);
  });
};

// MODIFIER UN CONCERT //////////////////////////////////////////////////////// A MODIFIER
const submitEditShow = async (concert) => {
  try {
    const response = await fetch(`http://localhost:3000/concerts/${concert.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(concert),
    });
    if (!response.ok) {
      throw new Error("Une erreur a été rencontrée lors de la tentative de modification du concert.");
    }
    console.log('Concert modifié :', concert);
    alert('Le concert a été modifié avec succès !');
  } catch (error) {
    console.log(error);
  }
};

// SUPPRIMER UN CONCERT //////////////////////////////////////////////////////// A MODIFIER
const submitDeleteShow = async (concert) => {
  try {
    const response = await fetch(`http://localhost:3000/concerts/${concert.id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error("Une erreur a été rencontrée lors de la tentative de suppression du concert.");
    }
    const index = concerts.value.indexOf(concert); // A CHANGER ??
    concerts.value.splice(index, 1); // A CHANGER ??
    console.log('Concert supprimé :', concert);
    alert('Le concert a été supprimé avec succès !');
  } catch (error) {
    console.log(error);
  }
};

fetchUsers();
fetchConcerts();

</script>

<template>

  <div class="users-concerts-dashboard-grid">
    <div class="concerts-container">
      <h1>Liste des concerts :</h1>

      <table>
        <thead>
          <tr>
            <th>Nom du groupe</th>
            <th>Date du concert</th>
            <th>Genre</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="concert in concerts" :key="concert.id">
            <td><input v-model="concert.group" required /></td>
            <td><input v-model="concert.date" required /></td>
            <td><input v-model="concert.genre" required /></td>
            <td><input v-model="concert.price" type="number" required /></td>
            <td><button @click="submitEditShow(concert)">Modifier</button></td>
            <td><button @click="submitDeleteShow(concert)">Supprimer</button></td>
          </tr>
        </tbody>
      </table>


      <form class="adduserform" @submit.prevent="submitAddShow">
        <h1>Ajouter un concert :</h1>
        <label for="group">Nom du groupe : </label>
        <input type="text" id="group" v-model="addShowFormData.group" required>
        <br>
        <label for="date">Date du concert : </label>
        <input id="date" placeholder="année.mois.jour" v-model="addShowFormData.date" required>
        <br>
        <label for="genre">Genre : </label>
        <input type="text" id="genre" v-model="addShowFormData.genre" required>
        <br>
        <label for="price">Prix : </label>
        <input type="number" id="price" v-model="addShowFormData.price" required>
        <br>
        <button type="submit">Ajouter</button>
      </form>

    </div>

    <div class="users-container">
      <h1>Liste des utilisateurs :</h1>

      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td><input v-model="user.email" required /></td>
            <td><input v-model="user.is_admin" type="checkbox" required /></td>
            <td><button @click="submitEditUser(user)">Modifier</button></td>
            <td><button @click="submitDeleteUser(user)">Supprimer</button></td>
          </tr>
        </tbody>
      </table>

    </div>
    
  </div>

</template>

<style scoped>
.users-concerts-dashboard-grid {
  text-align: center;
  display: grid;
  grid-template-columns: 60% 40%;
  max-width: 100%;
  background-color: rgb(22, 22, 22);
}

.concerts-container {
  overflow-y: auto;
  max-height: 80%;
  margin-left: 20%;
}

.users-container {
  margin-left: 10%;
  overflow-y: auto;
  max-height: 45%;
}

.adduserform {
  text-align: center;
  margin-top: 2rem;
}
</style>
