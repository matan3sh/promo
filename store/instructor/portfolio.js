 export const state = () => ({
     items: []
 })

 export const actions = {
    fetchInstructorPortfolios({commit}) {
        return this.$axios.$get('/api/v1/products/user-products')
            .then(portfolios => {
                commit('setPortfolios', portfolios)
                return state.items
            })
            .catch(error => Promise.reject(error))
    },
    createPortfolio(_, portfolioData) {
        return this.$axios.$post('/api/v1/products', portfolioData)
    }
}

export const mutations = {
    setPortfolios(state, portfolios) {
        state.items = portfolios
    }
}