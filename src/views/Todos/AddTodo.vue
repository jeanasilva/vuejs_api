<template>
    <div>
        <h1>Adicionar Nova Tarefa</h1>

        <form action="#" method="post" @submit.prevent="addTodo">
            <input type="text" name="title" placeholder="Titulo" v-model="todo.name">
            <input type="text" name="description" placeholder="Descrição" v-model="todo.description">
            <button type="submit" :disabled="todo.loading">
                <span v-if="todo.loading" >Enviando...</span>
                <span v-else>Enviar</span>
            </button>
        </form>
    </div>
</template>

<script>

import { reactive } from 'vue'

import TodoService from '@/services/todos.services'
import router from '@/router'

export default {
    
    name: 'AddTodo',
    setup() {
        const todo = reactive({
        name: '',
        description: '',
        completed: false,
        loading: false
    })
        const addTodo = () => {
            todo.loading = true
            TodoService.addTodo({...todo})
                .then(() => router.push({name: 'todos.index'}))
                .finally(() => todo.loading = false)
        }

        return {
            addTodo,
            todo
        }
    }

}
</script>