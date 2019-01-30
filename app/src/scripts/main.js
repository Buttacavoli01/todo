var app = new Vue({
  el: '#app',
  data: {
    backgroundColor: 'white',
    message: 'Vue To-Do',
    newTodo: '',
    todos: []
  },
  template:
  `<div class='container'>
    <h1> {{ message }} </h1>
    <div class="form-container">
      <input id='input'
        placeholder="Add New Item.."
        @keydown.enter="addItem">
      <button @click="addItem">Add Item</button>
      <button @click="removeList">Clear List</button>
    </div>
    <ol id="itemList">
      <li v-for='(todo, index) in todos'
        :class="[todo.done ? 'complete' : 'active']"
        :key="index">
        <input
          id="cb"
          @click="todo.done = !todo.done"
          type="checkbox"
          v-model="todo.done">
        <span>
          {{ todo.text }}
        </span>
      </li>
    </ol>
  </div>`,
  methods: {
    addItem() {
      let input = document.getElementById('input');
      if (input.value.length > 0) {
        app.todos.push({
          text: input.value,
          done: false
        });
        input.value =''
      }
    },
    removeList() {
      let itemList = document.querySelector('#itemList');
      while (itemList.childNodes) {
        itemList.removeChild(itemList.childNodes[0]);
 localstorage
        localStorage.removeItem('todos')
        }
      },
    },
    mounted() {
      console.log('Mounted local storage')
      if (localStorage.getItem('todos')) {
        this.todos = JSON.parse(localStorage.getItem('todos'));
      }
    },

      }
    }
  },
 master
  computed: {
    textEdit() {
      return {
        backgroundColor: this.backgroundColor
      };
    }
 localstorage
  },
  watch: {
    todos: {
      handler() {
        console.log('Item added!')
        localStorage.setItem('todos', JSON.stringify(this.todos));
      },
      deep: true,
    }

 master
  }
});


//@click="removeItem(index)"
