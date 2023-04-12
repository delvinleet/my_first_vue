import { reactive, readonly } from "vue"

const tasks = reactive([])

export const useTask = () => {
    
    const createTask = (task) => {
        tasks.push({...task})
    }

    const removeTask = (id) => {
        tasks.splice(id, 1)
    }

    const toggleChecked = (id) => {
        tasks[id].isChecked = !tasks[id].isChecked
    }

    return {
        tasks: readonly(tasks),
        createTask,
        removeTask,
        toggleChecked
    }
}

