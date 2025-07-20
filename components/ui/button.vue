<script setup lang="ts">
const {} = defineProps<{
    size: 'small' | 'big'
}>()
</script>

<template>
    <button class="button" :class="size">
        <slot />
    </button>
</template>

<style scoped>
.button {
    color: var(--color-white);
    border-radius: var(--border-radius);
    border: 1px solid var(--color-primary);
    background-color: var(--color-primary);
    font-size: 16px;
    font-weight: 500;
    padding: 11px 20px;
    cursor: pointer;
}
.button:hover {
    opacity: .8;
}
.small {
    width: 140px;
}
.big {
    width: 300px;
}
</style>