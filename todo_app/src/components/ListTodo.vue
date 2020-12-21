<template>
    <div class="d-flex justify-content-center pt-3">
        <table class="table w-50">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="value in list" :key="value.id">  
                    <td><p> {{ value.id }}</p></td>
                    <td><p> {{ value.name }}</p></td>
                    <td>
                        <button class="btn btn-danger" type="submit" @click="() => handlerDelete(value.id)">Delete</button>
                        <!-- &nbsp;
                        <button class="btn btn-success" type="submit">Finish</button> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

export default {
    name: 'ListTodo',

    props: {
        list: Array
    },

    methods: {
        handlerDelete(value) {

            this.$emit('delete', value)

        }
    },
    
    emits: ["delete"],

}
</script>
<style>
    
</style>