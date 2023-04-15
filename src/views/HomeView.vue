<template>
	<div class="wrapper">
		<div class="header">
			to-do list
			<div class="inputs">
				<my-dialog v-model="dialogVisible">
					task adding
					<my-input v-model="task.title" style="margin-top: 5px;" placeholder="title..."/>
					<my-input v-model="task.body" placeholder="description..."/>
					<my-button @click="addTask">create</my-button>
				</my-dialog>
			</div>
			<my-button @click="showDialog">add task</my-button>
		</div>
		<div class="task_list" v-if="tasks.length > 0">
			<task-item 
				@removeTask="handleRemoveTask"
				@editTask="handleEditTask"
				@saveTask="handleSaveTask"
				v-for="(task, index) in tasks"
				:id="index" 
				:key="index"
				:task="task"
				:taskShow="task.taskShow"
				
			/>
		</div>
		<div class="task_none" v-else>task list is empty</div>		
	</div>
</template>

<script setup>
import MyButton from '@/components/UI/MyButton.vue';
import MyInput from '@/components/UI/MyInput.vue';
import MyDialog from '@/components/UI/MyDialog.vue';
import TaskItem from '@/components/TaskItem.vue';
import { useTask } from '@/hooks/useTask.js';
import { reactive, ref } from 'vue';

const {tasks, createTask, handleEditTask, handleSaveTask} = useTask()

const task = reactive({
	title: '',
	body: '',
	isChecked: false,
	taskShow: true,
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
	background-color: #8381CD;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 5px;
	color: #ffffff;	
	border-radius: 10px
}

.task_none {
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 200px;	
	color: #ffffff;
}

@media (max-width: 1000px) {
	.wrapper {
		margin: 10px 0;
	}
}

</style>
