<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ShowsList from '../src/components/ShowsList.vue'
import { ref } from 'vue'

function logout() {
  //
  alert('Vous êtes bien déconnecté(e) !')
}

const searchQuery = ref('')
const selectedGenre = ref('all')
const selectedGroup = ref('all')
const selectedDate = ref('all')

const clearPlaceholder = () => {
  if (searchQuery.value === 'Search...') {
    searchQuery.value = ''
  }
}
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/home">Accueil</RouterLink>
      <RouterLink to="/profile">Mon Compte</RouterLink>
      <RouterLink to="/login">Connexion</RouterLink>
      <RouterLink to="/home" @click="logout">Déconnexion</RouterLink>
      <RouterLink to="/register">Inscription</RouterLink>
      <RouterLink to="/wishlist">Favoris</RouterLink>
      <RouterLink to="/card">Panier</RouterLink>
      <RouterLink to="/admindashboard">Admin</RouterLink>
    </nav>

    <nav>
    <div id="app">
      <div class="search-container">
        <input
          type="text"
          class="search-bar"
          placeholder="Search..."
          v-model="searchQuery"
          @focus="clearPlaceholder"
          :class="{ 'white-text': searchQuery !== '' }"
        />
        <img src="../src/loupe.svg" alt="Search" class="img-loupe" />
      </div>
    </div>
  </nav>

    <RouterView />
  </div>

  <div class="showslist">
    <ShowsList />
  </div>

  <section class="filters">
    <div class="filter">
      <label for="genre">Genre:</label>
      <select v-model="selectedGenre">
        <option value="all">Tous</option>
        <option value="classique">Classique</option>
        <option value="jazz">Jazz</option>
        <option value="Pop Rock">Jazz</option>
      </select>
    </div>
    <div class="filter">
      <label for="group">Groupe:</label>
      <select v-model="selectedGroup">
        <option value="all">Tous</option>
        <option value="group1">Groupe 1</option>
        <option value="group2">Groupe 2</option>
      </select>
    </div>
    <div class="filter">
      <label for="date">Date:</label>
      <select v-model="selectedDate">
        <option value="all">Toutes</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
      </select>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

nav {
  text-align: center;
  padding: 1rem 0;
}

.showslist {
  text-align: left;
  margin-left: 30%;
  margin-top: 10%;
  margin-right: 2rem;
}

/* rendre le text blanc dans la search bar */
.white-text {
  color: white;
}

.search-container {
  position: relative;
  width: 100%;
}

.search-bar {
  width: 70%;
  margin-left: 260px;
  padding: 10px;
  padding-right: 40px;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  background-color: var(--color-background-soft);
  transition: border-color 0.3s, background-color 0.3s;
  font-size: 16px;
}

.search-bar:focus {
  outline: none;
  border-color: var(--color-border-hover);
  background-color: var(--color-background);
}

.img-loupe {
  position: relative;
  top: 35px;
  right: 45px;
  transform: translateY(-50%);
  width: 30px;
  height: 40px;
  cursor: pointer;
}

.filters {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  padding: 20px;
  background-color: #383636;
  color: var(--color-text);
}

.filter {
  margin-bottom: 20px;
}

.filter label {
  display: block;
  margin-bottom: 5px;

}
</style>
