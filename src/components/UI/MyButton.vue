<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script setup>

</script>

<style scoped>
.btn {
    background-color: #8381CD;
    border: none;
    padding: 5px;
    border: 1px solid white;
    min-width: 100px;
    color: #ffffff;
    border-radius: 10px;
}

.btn:hover {
    background-color: #262638;
    transition: .15s;
}
.btn:active {
    background-color: #8381CD   ;
}
</style>