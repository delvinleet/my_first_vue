<template>
    <input :value="modelValue" @input="handleInput" type="text" class="input">
</template>

<script setup>

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const handleInput = (event) => {
    emit('update:modelValue', event.target.value)
} 

</script>

<style scoped>
.input {
    margin: 0 5px 5px;
}
</style>