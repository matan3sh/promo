 export const state = () => ({
     items: [],
     item: {}
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
    fetchPortfolioById({commit, state}, portfolioId) {
        return this.$axios.$get(`/api/v1/products/${portfolioId}`)
            .then(portfolio => {
                commit('setPortfolio', portfolio)
                return state.item
            })
    },
    createPortfolio(_, portfolioData) {
        return this.$axios.$post('/api/v1/products', portfolioData)
    },
    updateLine({commit}, {index, value, field}) {
        commit('setLineValue', {index, value, field})
    },
    updatePortfolioValue({commit}, {value, field}) {
        commit('setPortfolioValue', {value, field})
    }
}

export const mutations = {
    setPortfolios(state, portfolios) {
        state.items = portfolios
    },
    setPortfolio(state, portfolio) {
        state.item = portfolio
    },
    setPortfolioValue(state, {value, field}) {
        state.item[field] = value
    },
    addLine(state, field) {
        state.item[field].push({value: ''})
    },
    removeLine(state, {field, index}) {
        state.item[field].splice(index, 1)
    },
    setLineValue(state, {index, value, field}) {
        state.item[field][index].value = value
    }
}