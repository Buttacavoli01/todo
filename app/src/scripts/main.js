var app = new Vue({
  el: '#app',
  data: {
    todos: [
      { text: 'Learn JavaScript', done : false },
      { text: 'Learn Vue', done : false },
      { text: 'Build something awesome', done : false}
    ]
  },
  template:
  `<div class='container'>
    <input id='input' type='text'>
    <button @click="addItem">Add</button>
    <ol>
      <li @click="todo.done = !todo.done" v-bind:class="[todo.done ? 'complete' : 'active' ]" v-for='todo in todos' >
        <input type="checkbox">
        {{todo.text}}
      </li>
    </ol>
  </div>`,
  methods: {
    addItem() {
      let input = document.querySelector('#input');
      if (input.value.length > 0) { app.todos.push({ text: input.value, done : false })
      }
    }
  }
});
