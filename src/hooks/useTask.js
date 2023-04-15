import { reactive, readonly } from "vue"

const tasks = reactive([
    ...JSON.parse(localStorage.getItem('tasks') || '[]')
])

export const useTask = () => {
    
    const createTask = (task) => {
        tasks.push({...task});
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    const removeTask = (id) => {
        tasks.splice(id, 1)
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    const toggleChecked = (id) => {
        tasks[id].isChecked = !tasks[id].isChecked
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    const handleEditTask = (id) => {
        tasks[id].taskShow = !tasks[id].taskShow
    }

    const handleChangeTask = (id, newTask) => {
        tasks[id] = newTask
        handleEditTask(id)
        localStorage.setItem('tasks', JSON.stringify(tasks))

}

    return {
        tasks: readonly(tasks),
        createTask,
        removeTask,
        toggleChecked,
        handleEditTask,
        handleChangeTask
    }
}

