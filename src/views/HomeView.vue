<template>
	<div class="wrapper">
		<div class="header">
			to-do list
			<div class="inputs">
				<my-dialog v-model="dialogVisible">
					task adding
					<my-input style="margin-top: 5px;" v-model="task.title" placeholder="title..."/>
					<my-input v-model="task.body" placeholder="body..."/>
					<my-button @click="addTask">add</my-button>
				</my-dialog>
			</div>
			<my-button @click="showDialog">add task</my-button>
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
import MyDialog from '@/components/UI/MyDialog.vue';
import TaskItem from '@/components/TaskItem.vue';
import { useTask } from '@/hooks/useTask.js';
import { reactive, ref } from 'vue';

const {tasks, createTask} = useTask()

const task = reactive({
	title: '',
	body: '',
	isChecked: false
})

const dialogVisible = ref(false)

const showDialog = () => {
	dialogVisible.value = !dialogVisible.value
}

const addTask = () => {
	if (task.title == '') {
		return
	} else {
		createTask(task);
		task.title = '';
		task.body = '';
		dialogVisible.value = !dialogVisible.value
	}
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

@media (max-width: 1000px) {
	.wrapper {
		margin: 10px 0;
	}
}

</style>
