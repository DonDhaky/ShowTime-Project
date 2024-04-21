<script >
export default {
  data() {
    return {
      searchQuery: '',
      concerts: [],
    };
  },
  async created() {
    const response = await fetch('http://localhost:3000/concerts');
    const data = await response.json();
    this.concerts = data;
  },
  computed: {
    filteredConcerts() {
      return this.concerts.filter((concert) => {
        return concert.group.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
               concert.genre.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    },
  },
  methods: {
    clearPlaceholder() {
      if (this.searchQuery === 'Faites votre recherche ici...') {
        this.searchQuery = '';
      }
    },
  },
};
</script>

<template>
      <nav>
      <div id="app">
        <div class="search-container">
      <input
        type="text"
        class="search-bar"
        placeholder="Faites votre recherche ici..."
        v-model="searchQuery"
        @focus="clearPlaceholder"
        :class="{ 'white-text': searchQuery !== '' }"
      />
      <img src="../../src/loupe.svg" alt="Search" class="img-loupe" />
    </div>
    <div class="users-concerts-dashboard-grid">
    <div class="concerts-container">
      <h1>Liste des concerts :</h1>
      <div class="concert" v-for="concert in filteredConcerts" :key="concert._id">
        <p>Nom du groupe :</p>
        <input v-model="concert.group" />
        <p>Date du concert :</p>
        <input v-model="concert.date" />
        <p>Genre :</p>
        <input v-model="concert.genre" />
        <p>Prix :</p>
        <input v-model="concert.price" />
        <!-- <button @click="submitEditShow(concert._id)">Modifier</button>
        <button @click="submitDeleteShow(concert._id)">Supprimer</button> -->
      </div>
    </div>
  </div>
</div>
    </nav>
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
  transition:
    border-color 0.3s,
    background-color 0.3s;
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

.users-concerts-dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  margin-left: 20%;
}


.concerts-container {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.concerts-container h1 {
  text-align: center;
  margin-bottom: 20px;
}

.concert {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
}

.concert p {
  margin: 0;
}

.concert input {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
}

.concert button {
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  margin-right: 10px;
}

.concert button:last-child {
  background-color: #f44336;
}

.concert button:hover {
  background-color: #3e8e41;
}

.concert button:last-child:hover {
  background-color: #c62828;
}
</style>
