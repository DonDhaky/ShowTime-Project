<script setup>
import { RouterLink, RouterView } from 'vue-router'

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

      <RouterView />
    </div>


</template>

<style scoped>

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
</style>
