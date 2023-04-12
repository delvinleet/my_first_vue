<template>
	<div class="wrapper">
		<div class="header">
			to-do list
			<div class="inputs">
				<my-input v-model="task.title" placeholder="title..."/>
				<my-input v-model="task.body" placeholder="body..."/>
			</div>
			<my-button @click="addTask">add task</my-button>
		</div>
		<task-item 
			@removeTask="handleRemoveTask" 
			:task="task" 
			v-for="(task, index) in tasks" 
			:id="index" 
			:key="index"
		/>
	</div>
</template>

<script setup>
import MyButton from '@/components/UI/MyButton.vue';
import MyInput from '@/components/UI/MyInput.vue';
import TaskItem from '@/components/TaskItem.vue';
import { useTask } from '@/hooks/useTask.js'
import { reactive } from 'vue';

const {tasks, createTask} = useTask()

const task = reactive({
	title: '',
	body: '',
	isChecked: false
})

const addTask = () => {
	createTask(task)
	task.title = '';
	task.body = '';
}

const handleRemoveTask = (id) => {
    tasks.splice(id, 1);
}

</script>

<style scoped>
.wrapper {
	margin: 10px 15%;
}

.header {
	background-color: #A3A0FF;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 5px;
}
</style>
