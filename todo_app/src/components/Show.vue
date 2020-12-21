<template>
    <div class="d-flex justify-content-center">
        <input class="form-control w-25" @change="onChangeText" v-model="message" placeholder="edit me">
    </div>
</template>
<script>
export default {
    name: 'Show',

    data () {
        return {
            message: ''
        }
    },

    props: {
        handlerChangeText: Function
    },

    methods: {
        onChangeText(){
            console.log(this.message)

            this.$emit('show', this.message)

            this.message = ''
        }
    },

}
</script>
<style scoped>
    
</style>