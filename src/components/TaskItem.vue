<template>
    <div class="task-item" :class="{completed: props.task.isChecked}">
        <div class="task-text">
            <div v-if="taskShow" class="task-title">{{ props.task.title }}</div>
            <my-input v-else v-model="newTask.title" />
            <div v-if="taskShow" class="task-body">{{ props.task.body }}</div>
            <my-input v-else v-model="newTask.body" />
        </div>
        <div class="func_btns">
            <my-checkbox 
            :modelValue="props.task.isChecked" 
            @update:modelValue="toggleChecked(id)"
            @click="handleToggleCheckedSort" 
            ></my-checkbox>

            <my-button 
            v-if="taskShow"  
            style="margin-right: 5px;"
            @click="editTask(id)"
            >
                edit
            </my-button>

            <my-button 
            v-else 
            @click="handleChangeTask(id, newTask)"
            style="margin-right: 5px;"
            >
                save
            </my-button>

            <my-button 
            @click="removeTask(id)"

            >
                remove
            </my-button>
        </div>
    </div>
</template>

<script setup>
import MyButton from '@/components/UI/MyButton.vue';
import MyCheckbox from '@/components/UI/MyCheckbox.vue';
import MyInput from '@/components/UI/MyInput.vue';
import { useTask } from '@/hooks/useTask';
import { ref, reactive, watch } from 'vue'

const props = defineProps(['task', 'id', 'taskShow']);
const emit = defineEmits(['update:modelValue', 'editTask', 'saveTask', 'toggleCheckedSort'])

const {removeTask, toggleChecked, handleChangeTask} = useTask()

const newTask = reactive({
    title: props.task.title,
	body: props.task.body
})

const editTask = (id) => {
    emit('editTask', id)
}

const handleToggleCheckedSort = () => {
    emit('toggleCheckedSort')
}

watch(() => props.task, (value) => {
    newTask.title = value.title
    newTask.body = value.body
})

</script>

<style scoped>
.task-item {
    border: 2px solid #8381CD;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 5px;
    margin: 3px 0;
    transition: .2s;
    color: #ffffff;
    border-radius: 10px;
}

.task-text {
    display: flex;
    flex-direction: column;
}

.completed {
    background-color: #2DAF5A;
    transition: .2s;
}
.func_btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>