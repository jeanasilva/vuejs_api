<template>
    <div>
        <h1>Editar Tarefa</h1>

        <form action="#" method="post" @submit.prevent="editTodo">
            <input type="text" name="title" placeholder="Titulo" v-model="todo.name">
            <input type="text" name="description" placeholder="Descrição" v-model="todo.description">
            <button type="submit" :disabled="todo.loading">
                <span v-if="todo.loading" >Aguarde...</span>
                <span v-else>Enviar</span>
            </button>
        </form>
    </div>
</template>

<script>

import { onMounted, reactive } from 'vue'

import TodoService from '@/services/todos.services'
import router from '@/router'

export default {
    
    name: 'EditTodo',
    props: {
        id: {
            require: true
        }
    },

    setup(props) {
        const todo = reactive({
        name: '',
        description: '',
        completed: false,
        loading: false
    })

    onMounted(async () => {
        todo.loading = true
        TodoService.getTodo(props.id)
                .then(response => {
                    // console.log(response.data.data)
                    const TodoR = response.data.data
                    todo.name        = TodoR.title
                    todo.description = TodoR.body 
                    todo.completed   = TodoR.completed == 'S'
                })
                .finally(() => todo.loading = false)
    })

        const editTodo = () => {
            todo.loading = true
            TodoService.editTodo(props.id, {...todo})
                .then(() => router.push({name: 'todos.index'}))
                .finally(() => todo.loading = false)
        }

        return {
            editTodo,
            todo
        }
    }

}
</script>