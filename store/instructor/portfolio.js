 export const state = () => ({
     items: [],
     item: {},
     canUpdatePortfolio: false
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
    updatePortfolio({state, commit}) {
        const portfolio = state.item
        return this.$axios.$patch(`/api/v1/products/${portfolio._id}`, portfolio)
            .then(portfolio => {
                commit('setPortfolio', portfolio)
                commit('canUpdatePortfolio', false)
                return state.item
            })
            .catch(error => Promise.reject(error))
    },
    // TODO: cache previous value and verify if you can update portfolio
    // TODO: set canUpdate only when portfolio values has been updated
    updateLine({commit}, {index, value, field}) {
        commit('setLineValue', {index, value, field})
        commit('canUpdatePortfolio', true)
    },
    updatePortfolioValue({commit}, {value, field}) {
        commit('setPortfolioValue', {value, field})
        commit('canUpdatePortfolio', true)
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
    canUpdatePortfolio(state, canUpdate) {
        state.canUpdatePortfolio = canUpdate
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