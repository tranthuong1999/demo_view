<template>
  <div>
    <h1>To-Do List</h1>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new task" />
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">
          {{ todo.text }}
        </span>
        <button @click="toggleTodoStatus(todo.id)">
          {{ todo.completed ? 'Undo' : 'Complete' }}
        </button>
        <button @click="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTodoStore } from '../store/todoStore';

const todoStore = useTodoStore();
const newTodo = ref('');

const addTodo = () => {
  if (newTodo.value.trim()) {
    todoStore.addTodo(newTodo.value);
    newTodo.value = '';
  }
};

const { todos, toggleTodoStatus, deleteTodo } = todoStore;
</script>

<style>
input {
  margin-bottom: 10px;
}
button {
  margin-left: 10px;
}
</style>
