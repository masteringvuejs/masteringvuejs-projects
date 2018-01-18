new Vue({
  el: '#root',
  data: {
    recipes: window.recipes,
    activeRecipe: this.recipes[0],
    activeTab: 'ingredients'
  },
  methods: {
    activateRecipe (recipe) {
      this.activeRecipe = recipe
      this.activateTab('ingredients')
    },
    isActiveRecipe (recipe) {
      return recipe === this.activeRecipe
    },
    isActiveTab (name) {
      return name === this.activeTab
    },
    activateTab (name) {
      this.activeTab = name
    }
  }
})
