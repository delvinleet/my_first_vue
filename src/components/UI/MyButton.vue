<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script setup>

</script>

<style scoped>
.btn {
    background-color: #A3A0FF;
    border: none;
    padding: 5px;
    border: 1px solid white;
}

.btn:hover {
    background-color: white;
    transition: .15s;
    border: 1px solid #A3A0FF;
}
.btn:active {
    background-color: #A3A0FF;
}
</style>