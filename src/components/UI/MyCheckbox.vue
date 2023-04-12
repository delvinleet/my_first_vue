<template>
    <div class="checkbox">
        <input 
        :checked="props.modelValue" 
        @click="emit('update:modelValue', !props.modelValue)" 
        class="checkbox" type="checkbox">
    </div>
</template>

<script setup>

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']) ; 

</script>

<style scoped>
.checkbox {
    width: 25px;
    height: 25px;  
}
</style>