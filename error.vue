<script setup lang="ts">
    import type { NuxtError } from '#app'
    const { error } = defineProps<{ error: NuxtError }>()

    const toHome = () => navigateTo('/')
</script>
<template>
    <NuxtLayout>
        <div class="page-error__wrapper">
            <div class="page-error__block">
                <h1 class="page-error__title">{{  error.statusCode }}</h1>
                <div class="page-error__text">Страница не найдена, вернитесь на главную страницу</div>
                <UiButton size="big" @click="toHome">На главную</UiButton>
            </div>
        </div>
  </NuxtLayout>
</template>

<style scoped>
.page-error__wrapper {
    height: 100%;
    min-width: 430px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.page-error__block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
} 
.page-error__title {
    padding: 0;
    margin: 0;
    font-size: 120px;
    font-weight: 500;
    color: var(--color-grey);
}
.page-error__text {
    font-size: 16px;
    font-weight: 300;
    color: var(--color-grey);
}
</style>