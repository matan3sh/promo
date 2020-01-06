
export const state = () => ({
    items: []
})

export const actions = {
    fetchPortfolios({commit}) {
        return this.$axios.$get('/api/v1/products')
            .then(portfolios => {
                commit('setItems', { resource: 'portfolio', items: portfolios}, { root: true })
                return state.items
            })
    }
}