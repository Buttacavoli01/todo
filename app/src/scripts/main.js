
var app = new Vue({
  el: '#app',
  data: {
    isActive: false,
    todos: [
      {text: 'Learn JavaScript'},
      {text: 'Learn Vue'},
      {text: "Build Something"}
    ]
  },
  methods: {
    addItem() {
      let input = document.querySelector("#input").value
      app.todos.push({ text: input })
    },
    toggleClass(eve) {
      if(this.isActive) {this.active = false}
      else {this.isActive = true}
    }
  }
})
