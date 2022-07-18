<template>
    <div class="checkbox-container" >
        <h2 class="heading">{{ todo.title }}</h2>
            <div class="checkbox-group">     
                <input type="checkbox" :checked="todo.completed == 'S'" @change="toogleStatus">
                {{ todo.body }}
                <router-link :to="{name: 'todos.edit', params: {id: todo.identify}}"><i class="fa-solid fa-pen-to-square"></i></router-link>
                <a href="#" @click.prevent="deleteTodo"><i class="fa-solid fa-trash-can"></i></a>
            </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import TodoService from '../services/todos.services'


export default {
    name: 'Todo',
    props: {
        todo: {
            require: true,
            type: Object,
        }
    },
    setup(props, {emit}) {

        const completed = computed(() => props.todo.completed == 'S')

        const deleteTodo = () => {
            TodoService.deleteTodo(props.todo.identify)
                .then(() => emit('todoDeleted', props.todo))
        } 
        
        const toogleStatus = () => {
            const todo = props.todo
            const params ={
                name: todo.title,
                description: todo.body,
                completed: !completed.value
            }
            TodoService.editTodo(props.todo.identify, params)
                .then(() => emit('todoUpdated', params))
        }
        return {
            deleteTodo,
            completed,
            toogleStatus
        }
    }

}

</script>