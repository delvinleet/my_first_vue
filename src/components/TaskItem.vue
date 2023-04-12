<template>
    <div class="task-item" :class="{completed: checked}">
        <div class="task-text">
            <div class="task-title">{{ props.task.title }}</div>
            <div class="task-body">{{ props.task.body }}</div>
        </div>
        <div class="func_btns">
            <my-checkbox v-model="checked"></my-checkbox>
            <my-button @click="emit('removeTask', id)">remove</my-button>
        </div>
    </div>
</template>

<script setup>

import MyButton from '@/components/UI/MyButton.vue';
import MyCheckbox from '@/components/UI/MyCheckbox.vue';
import { ref } from 'vue'

const props = defineProps(['task', 'id', 'state'])
const emit = defineEmits(['removeTask'])

const checked = ref(false); 
</script>

<style scoped>
.task-item {
    border: 2px solid teal;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    margin: 3px 0;
}

.completed {
    background-color: greenyellow;
}
.func_btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 17%;
}
</style>