<template>
    <div class="popup">
        <div v-for="(value, key) in message">
            <p>{{ key }}: {{ value }}</p>
        </div>
        <button @click="$emit('close')">Close</button>
        <button v-if="isLogged" @click="book">Book</button>
    </div>
</template>
  
<script setup>
    const props = defineProps(['message', 'isLogged'])
    const isLogged = props.isLogged
    alert(isLogged)
    const book = (() => {
        alert("book")
    })
</script>

<style scoprd>
    .popup {
        outline: 1px dashed green;
    }
</style>