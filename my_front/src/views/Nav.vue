<template>
    <nav>
      <router-link to="/">Home</router-link>
      <input type="text" placeholder="Search" v-model="searchQuery">
      <button v-if="isLogged == false" @click="openLoginPopup">Login</button>
      <button v-if="isLogged == false" @click="signup">Sign Up</button>
      <button v-if="isLogged == true" @click="logout">Logout</button>
      <button v-if="isAdminLogged == true" @click="signup">Admin</button>
    </nav>
    <login-popup v-if="showLoginPopup" @close="closeLoginPopup" :handle-login-submit="handleLoginSubmit" />
</template>
  
  
<script setup>
    import { onBeforeMount, ref } from 'vue'
    import { useRouter } from 'vue-router'
    import LoginPopup from './LoginPopup.vue'
    import bcrypt from 'bcryptjs'

    const searchQuery = ref('')
    const router = useRouter()

    const isAdminLogged = ref()
    const isLogged = ref()
    function cookieHandling() {
        const cookieExists = document.cookie.indexOf(`showTime=`) !== -1
        if (cookieExists) {
            isLogged.value = true
            const checkCookieValue = document.cookie.split(';')//document.cookie.split(`; showTime=`).pop().split(';').shift()
            //alert(checkCookieValue)
            if (checkCookieValue == "showTime=1") {
                isAdminLogged.value = true
                //alert(checkCookieValue)
            } else {
                isAdminLogged.value = false
                //alert(checkCookieValue)
            }
        } else {
            isLogged.value = false
            isAdminLogged.value = false
        }
    }

    onBeforeMount (() => {
        console.log(document.cookie.split(';'))
        cookieHandling()
    })

    const showLoginPopup = ref(false)

    function openLoginPopup() {
        showLoginPopup.value = true
    }

    function closeLoginPopup() {
        showLoginPopup.value = false
    }

    const user = ref();
    async function fetchUser(email) {
        try {
            const response = await fetch('http://localhost:3000/users/byemail/'+email)
            user.value = await response.json()
            console.log(user)
            return user.value
        } catch (error) {
            console.error(error)
        }
    }

    async function testLogin(password) {
        try {
            const hashedPassword = await bcrypt.hash(password, 10)
            const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, hashedPassword })
            })
            const data = await response.json()
            if (data.success) {
            // password is valid, do something here
            } else {
            // password is invalid, do something here
            }
        } catch (error) {
            console.error(error)
        }
    }
    const handleLoginSubmit = (async(email, password) => {
        console.log('Email:', email)
        console.log('Password:', password)
        let user = await fetchUser(email)
        if (user !== undefined) {
            console.log("user: ", user.email)
            console.log(user.password)
            const isPasswordValid = bcrypt.compareSync(password, user.password)
            console.log(isPasswordValid)
            if (isPasswordValid) {
                //add cookie
                const cookieName = 'showTime'
                let cookieValue
                if (user.is_admin === "1") {
                    cookieValue = "1"
                    isLogged.value = true
                    isAdminLogged.value = true
                } else {
                    cookieValue = "0"
                    isLogged.value = true
                }
                //alert(cookieValue)
                const expirationMinutes = 60
                const expirationDate = new Date()
                expirationDate.setTime(expirationDate.getTime() + expirationMinutes * 60 * 1000)
                document.cookie = `${cookieName}=${cookieValue};expires=${expirationDate.toUTCString()};path=/`
                alert("You're logged")
            } else {
                alert("Bad password")
            }
        } else {
            alert("Unknown user")
            console.log("Unknown user")
        }
        closeLoginPopup()
    })

    function logout() {
        //cookie deletion
        isLogged.value = false
        isAdminLogged.value = false
        const cookieName = 'showTime'
        const expirationMinutes = -60
        const expirationDate = new Date()
        expirationDate.setTime(expirationDate.getTime() + expirationMinutes * 60 * 1000)
        document.cookie = `${cookieName}="";expires=${expirationDate.toUTCString()};path=/`
        alert("You're logged out")
    }

    function signup() {
    // handle signup logic here
    }
</script>
  
  
  <style scoped>
  
  </style>