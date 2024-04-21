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
        <p>
        <span class="concert2"> Nom du groupe : </span> 
        <span class="concert3"> {{concert.group}}</span>
        </p> 
        <p>
        <span class="concert2"> Date du concert : </span> 
        <span class="concert3"> {{concert.date}}</span>
        </p> 
        <p>
        <span class="concert2"> Genre : </span> 
        <span class="concert3"> {{concert.genre}}</span>
        </p> 
        <p>
        <span class="concert2"> Prix : </span> 
        <span class="concert3"> {{concert.price}}</span>
        </p> 
        <!-- <button @click="submitEditShow(concert._id)">Modifier</button>
        <button @click="submitDeleteShow(concert._id)">Supprimer</button> -->
      </div>
    </div>
  </div>
</div>
    </nav>
</template>

<style scoped>


/* nav a.router-link-exact-active {
  color: var(--color-text);
} */

/* nav a.router-link-exact-active:hover {
  background-color: transparent;
} */

/* nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
} */

/* nav a:first-of-type {
  border: 0;
} */

/* nav {
  text-align: center;
  padding: 1rem 0;
} */

/* .showslist {
  text-align: left;
  margin-left: 30%;
  margin-top: 10%;
  margin-right: 2rem;
} */

.concert {
    color: #383636;
    
}

.concert2 {
    color: black;
    font-weight: bold
}

.concert3 {
    color: grey;
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

/* .filters {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  padding: 20px;
  background-color: #383636;
  color: var(--color-text);
} */

/* .filter {
  margin-bottom: 20px;
} */

/* .filter label {
  display: block;
  margin-bottom: 5px;
} */

.users-concerts-dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  margin-left: 35%;
  width: 100%;
}


.concerts-container {
  background-color: #444;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.concerts-container h1 {
  text-align: center;
  margin-bottom: 20px;
  background: transparent;
  color: #fff; 
  /* liste des concerts : */
}

.concert {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
}

/* .concert p {
  margin: 0;
} */

/* .concert input {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
} */

/* .concert button {
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  margin-right: 10px;
} */

/* .concert button:last-child {
  background-color: #f44336;
} */

/* .concert button:hover {
  background-color: #3e8e41;
} */

/* .concert button:last-child:hover {
  background-color: #c62828;
} */
</style>
