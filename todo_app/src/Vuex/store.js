import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
      products: [
        { id: '1', name: "Nguyễn Kim Tiền"},
        { id: '2', name: "Nguyễn Quốc Toàn"},
      ]
    }
  },
  mutations: {
    upCount (state) {
      state.count++
    },

    downCount (state) {
        state.count--
    },

    addProduct (state, data) {
        
        const setData = data

        const listProduct = state.products

        listProduct.push(setData)

        state = {
            count: state.count,
            products: listProduct
        }

        return state
    },

    deleteProduct (state, data){

        const index = data

        const listProduct = state.products

        listProduct.splice(index, 1)

        state = {
            count: state.count,
            products: listProduct
        }

        return state

    }

  }
})

export default store