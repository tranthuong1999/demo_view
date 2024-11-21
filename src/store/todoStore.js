import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todoStore', {
    state: () => ({
        todos: [],
    }),
    getters: {
        completedTodos: (state) => state.todos.filter((todo) => todo.completed),
        incompleteTodos: (state) => state.todos.filter((todo) => !todo.completed),
    },
    actions: {
        addTodo(text) {
            this.todos.push({
                id: Date.now(),
                text,
                completed: false,
            });
        },
        toggleTodoStatus(id) {
            const todo = this.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo(id) {
            this.todos = this.todos.filter((todo) => todo.id !== id);
        },
    },
});
