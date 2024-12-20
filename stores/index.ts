export const useAlertStore = defineStore('alert', {
  state: () => ({
    isClicked: false, // Varsayılan değer
  }),
  actions: {
    alertClicked() {
      this.isClicked = true
      // this.saveLS()
    },
    // loadLS() {
    //   const savedState = localStorage.getItem('alert')
    //   if (savedState) {
    //     try {
    //       const parsedState = JSON.parse(savedState)
    //       this.isClicked = parsedState.isClicked
    //     } catch (error) {
    //       console.error(error)
    //     }
    //   }
    // },
    // saveLS() {
    //   localStorage.setItem('alert', JSON.stringify(this.$state))
    // },
  },
  persist:{
    storage:localStorage
  }
})