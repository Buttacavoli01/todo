var app = new Vue({
  el: '#app',
  data: {
    backgroundColor: 'white',
    message: 'Vue To-Do',
    todos: []
  },
  template:
  `<div class='container'>
    <h1> {{ message }} </h1>
    <div class="form-container">
      <input id='input' placeholder="Add New Item.."  @keydown.enter="addItem">
      <button @click="addItem">Add Item</button>
      <button @click="removeList">Clear List</button>
    </div>
    <ol id='itemList'>
      <li v-for='(todo, index) in todos'
        :key="index">
        <input id="cb" @click="removeItem(index)" type="checkbox">
        <span :style="textEdit" contentEditable="true">
          {{todo.text}}
        </span>
      </li>
    </ol>
  </div>`,
  methods: {
    addItem() {
      let input = document.getElementById('input');
      if (input.value.length > 0) {
        app.todos.push({ text: input.value});
      }
      input.value = "";
      saveList()
    },
    removeItem(index) {
      app.todos.splice(index, 1);
      const checkbox = document.getElementById('cb');
      checkbox.checked = false;
      saveList()
    },
    removeList() {
      let itemList = document.querySelector('#itemList');
      while(itemList.childNodes){
        itemList.removeChild(itemList.childNodes[0]);
        }
        save()
      },
      mounted() {
        if (localStorage.getItem('todos')){
          this.todos.text = JSON.parse(localStorage.getItem('todos'));
        }
      },
      saveList() {
      let parsed = JSON.stringify(this.todos);
      localStorage.setItem('todos', parsed);
      }
    },
    computed: {
      textEdit() {
        return {
          backgroundColor: this.backgroundColor
        };
      }
    },
    watch: {
      todos: {
        handler() {
          localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        deep: true,
    }
  }
});


//@click="todo.done = !todo.done"
