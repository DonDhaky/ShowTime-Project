<script setup>
import { RouterLink, RouterView } from "vue-router";
import ShowsList from "../src/components/ShowsList.vue";

function logout() {
  //
  alert("Vous êtes bien déconnecté(e) !");
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

    <RouterView />
  </div>

  <div class="showslist">
    <ShowsList />
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

.showslist {
  text-align: left;
  margin-left: 30%;
  margin-top: 10%;
  margin-right: 2rem;
}
</style>
