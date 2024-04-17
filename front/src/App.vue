<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';

const searchQuery = ref('');

const clearPlaceholder = () => {
  if (searchQuery.value === 'Search...') {
    searchQuery.value = '';
  }
};

</script>


<template>


    <div class="wrapper">
      <nav>
        <RouterLink to="/home">Accueil</RouterLink>
        <RouterLink to="/profil">Mon Compte</RouterLink>
        <RouterLink to="/login">Connexion</RouterLink>
        <RouterLink to="/register">Inscription</RouterLink>
        <RouterLink to="/whishlist">Favoris</RouterLink>
        <RouterLink to="/panier">Panier</RouterLink>
      </nav>
        <nav>
          <div id="app">
            <div class="search-container">
              <input type="text" class="search-bar" placeholder="Search..." v-model="searchQuery" @focus="clearPlaceholder" :class="{ 'white-text': searchQuery !== '' }">
              <img src="../src/loupe.svg" alt="loupe" class="img-loupe">
            </div>
          </div>
        </nav>

      <RouterView />
    </div>


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


</style>
