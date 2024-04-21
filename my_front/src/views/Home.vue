<template>
    <div id="main_container">
        <Nav />
        <Body :open-popup="openPopup" />
    </div>
    <div>
        <popup v-if="showPopup" :message="message" @close="closePopup" :is-logged="isLogged" />
    </div>
</template>
  
  
<script setup>
    import { onMounted, ref } from "vue";
    import Nav from './Nav.vue';
    import Body from './Body.vue';
    import Popup from './Popup.vue';

    const isLogged = ref()
    isLogged.value = document.cookie.indexOf(`showTime=`) !== -1

    const showPopup = ref(false)
    const message = ref('')
    const openPopup = (msg) => {
        message.value = msg
        showPopup.value = true
    }
    function closePopup() {
        showPopup.value = false
    }

</script>
  
  
<style scoped>
    #main_container {
        display: block;
        outline: 1px dashed red;
    }
</style>