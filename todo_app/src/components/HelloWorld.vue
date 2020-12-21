<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button class="btn btn-primary" type="submit" @click="upValue">Up</button>
    &nbsp;
    <button class="btn btn-success" type="submit" @click="downValue">Down</button>
    <p class="pt-3">Bạn Đã Click {{ count }}</p>

    <p class="h2">Todo List</p>
    <Show @show="AddTodo" />

    <ListTodo :list="products" @delete="DeleteTodo"/>

  </div>
</template>

<script>
import Show from './Show'
import ListTodo from './ListTodo'
import { ref, watch } from 'vue'
import AccountsAPI from '../API/AccountsAPI'

export default {
  name: 'HelloWorld',

  data() {
    return {
      value: 0,
      textShow: '',
    }
  },

  props: {
    msg: String
  },

  methods: {
    AddTodo(value) {
      this.textShow = value

      const data = {
        id: this.$store.state.products.length + 1,
        name: this.textShow
      }

      this.$store.commit('addProduct', data)
    },
    DeleteTodo(value) {

      console.log("Value: ", value)

      const index = this.$store.state.products.findIndex(item => {
        return item.id === value
      })

      this.$store.commit('deleteProduct', index)

    },

    upValue() {
      this.$store.commit('upCount')
    },

    downValue() {
      if (this.$store.state.count === 0){
        return
      }
      this.$store.commit('downCount')
    },

  },

  computed: {
    count () {
      return this.$store.state.count
    },

    products () {
      return this.$store.state.products
    }
  },

  components: {
    Show, ListTodo
  },

  setup() {

    let data = ref(1)

    //Giống với useEffect bên react
    //Gọi lại hàm này phụ thuộc vào thg data
    watch(data ,async () => {

      const response = await AccountsAPI.getAccounts()
      console.log(response)

    })

    const upData = () => {
      data.value++
    }

    return { data, upData }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
