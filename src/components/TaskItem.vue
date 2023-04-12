<template>
    <div class="task-item" :class="{completed: props.task.isChecked}">
        <div class="task-text">
            <div class="task-title">{{ props.task.title }}</div>
            <div class="task-body">{{ props.task.body }}</div>
        </div>
        <div class="func_btns">
            <my-checkbox :modelValue="props.task.isChecked" 
            @update:modelValue="toggleChecked(id)" 
            ></my-checkbox>
            <my-button @click="removeTask(id)">remove</my-button>
        </div>
    </div>
</template>

<script setup>

import MyButton from '@/components/UI/MyButton.vue';
import MyCheckbox from '@/components/UI/MyCheckbox.vue';
import { useTask } from '@/hooks/useTask';

const props = defineProps(['task', 'id']);

const {removeTask, toggleChecked} = useTask()

</script>

<style scoped>
.task-item {
    border: 2px solid teal;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 5px;
    margin: 3px 0;
}

.completed {
    background-color: greenyellow;
}
.func_btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>