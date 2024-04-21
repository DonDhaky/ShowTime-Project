<template>
    <div id="container">
        <div id="child1">
            <ul>
            <li v-for="concert in concerts" :key="concert.id" @click="openPopup({genre:concert.genre, artist: concert.group, date: concert.date, price: concert.price, booked: concert.number_of_bookings})">
                {{ concert.group }} on {{ concert.date }}
            </li>
            </ul>
        </div>
    </div>
</template>

  
<script setup>
    import { onMounted, onBeforeMount, ref } from "vue";
    const props = defineProps(["openPopup"])

    const concerts = ref([]);
    async function fetchData() {
        try {
            const response = await fetch('http://localhost:3000/concerts')
            concerts.value = await response.json()
            console.log(concerts)
        } catch (error) {
            console.error(error)
        }
    }

    onBeforeMount (() => {
        fetchData();
    })
</script>
  
  
<style scoped>
    #container {
        display: flex;
        outline: 1px dashed orange;
    }
</style>