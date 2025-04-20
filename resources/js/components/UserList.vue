<template>
    <div>
        <h1>User List</h1>
        <ul>
            <li v-for="user in users" :key="user.id">
                <strong>{{ user.name }}</strong> - {{ user.email }}₽
                <router-link :to="`/users/${user.id}/edit`">Edit</router-link>
                <button @click="deleteUser(user.id)" class="delete-btn">Delete</button>
            </li>
        </ul>
        <router-link to="/users/create" class="create-btn">Create New User</router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            users: [],
        };
    },
    async created() {
        const response = await axios.get('/api/users');
        this.users = response.data;
    },
    methods: {
        async deleteUser(id) {
            if (confirm('Are you sure you want to delete this user?')) {
                await axios.delete(`/api/users/${id}`);
                this.users = this.users.filter(user => user.id !== id);
            }
        },
    },
};
</script>

<style scoped>
.create-btn, .delete-btn {
    margin-left: 10px;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
}
.delete-btn {
    background-color: red;
    color: white;
}
.create-btn {
    display: block;
    margin-top: 20px;
    background-color: green;
    color: white;
    text-align: center;
    text-decoration: none;
    padding: 8px 12px;
}
</style>
