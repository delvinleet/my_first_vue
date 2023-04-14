<template>
    <div class="dialog" v-if="modelValue" @click="handleToggleDialog">
        <div class="dialog__content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['modelValue'])
const emit = defineEmits('update:modelValue')

const handleToggleDialog = (event) => {
    emit('update:modelValue')
} 

</script>

<style scoped>
.dialog {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;   
}

.dialog__content {
    margin: auto;
    display: flex;
    flex-direction: column;
    background-color: #262638;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
}
</style>