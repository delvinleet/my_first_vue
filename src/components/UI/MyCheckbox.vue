<template>
    <div class="checkbox">
        <input v-model="value" class="checkbox" type="checkbox">
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps(['modelValue','state']);
const emit = defineEmits(['update:modelValue']) ; 

const value = ref(false);

watch(value, (val) => {
    emit("update:modelValue", val);
    console.log(value);
})

// watch(() => props.modelValue, (val) => {
//     value.value = val;                       
// })

</script>

<style scoped>
.checkbox {
    width: 25px;
    height: 25px;  
}
</style>