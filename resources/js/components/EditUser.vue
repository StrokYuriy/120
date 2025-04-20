<template>
    <div>
        <h1>Edit User</h1>
        <form @submit.prevent="updateUser">
            <label>User Name:</label>
            <input v-model="user.name" type="text" required />

            <label>Email:</label>
            <input v-model="user.email" type="email" required />

            <label>Password :</label>
            <input v-model="user.password" type="password" required />

            <button type="submit" class="save-btn">Save</button>
            <router-link to="/" class="cancel-btn">Cancel</router-link>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            user: {},
        };
    },
    async created() {
        const response = await axios.get(`/api/users/${this.$route.params.id}`);
        this.user = response.data;
    },
    methods: {
        async updateUser() {
            await axios.put(`/api/users/${this.user.id}`, this.user);
            this.$router.push('/');
        },
    },
};
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
input, textarea {
    width: 100%;
    padding: 8px;
}
button {
    margin-top: 10px;
    padding: 8px 12px;
    cursor: pointer;
}
.save-btn {
    background-color: blue;
    color: white;
}
.cancel-btn {
    background-color: gray;
    color: white;
    text-decoration: none;
    display: inline-block;
    padding: 8px 12px;
    text-align: center;
}
</style>
