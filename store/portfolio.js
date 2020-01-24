
export const state = () => ({
    items: [],
    item: {}
})

export const actions = {
    fetchPortfolios({commit}) {
        return this.$axios.$get('/api/v1/products')
            .then(portfolios => {
                commit('setItems', { resource: 'portfolio', items: portfolios}, { root: true })
                return state.items
            })
    },
    fetchPortfolioBySlug({commit, state}, portfolioSlug) {
        return this.$axios.$get(`/api/v1/products/s/${portfolioSlug}`)
            .then(portfolio => {
                commit('setPortfolio', portfolio)
                return state.portfolio
            })
            .catch(error => Promise.reject(error))
    }
}

export const mutations = {
    setPortfolio(state, portfolio) {
        state.item = portfolio
    }
}