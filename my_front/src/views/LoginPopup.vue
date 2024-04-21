<template>
    <div class="popup">
        <form @submit.prevent="submit">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password">
            <button type="submit"  @click="handleLoginSubmit(email, password)">Submit</button>
        </form>
        <button @click="$emit('close')">Close</button>
    </div>
</template>
  
<script setup>
    import { ref } from 'vue'
    const props = defineProps(["handleLoginSubmit"]);

    const email = ref('')
    const password = ref('')
</script>


<style scoped>

</style>