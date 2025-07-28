<script setup lang="ts">
    import type { Post } from '~/interfaces/post.interface'

    const config = useRuntimeConfig()
    const API_URL = config.public.apiurl

    const route = useRoute()
    const id = ref(route.params.id)
    const { data } =  await useFetch<Post>(API_URL + '/posts/' + id.value)

</script>

<template>
    <div class="post-view">
        <div v-if="!data">
            <h2>Данных нет</h2>
        </div>
        <div v-else>
            <div class="post-view__top">
                <Icon name="icons:ava" size="24" />
                <span class="post-view__top-title">PurpleSchool</span>
                <span class="post-view__top-date">4 дня назад</span>
            </div>
            <h3 class="post-view__title">{{ data?.title }}</h3>
            <div class="post-view__text">{{ data?.content }}</div>
                    <div class="post-view__bottom">
                <div class="post-view__rating">
                    <div class="post-view__rating-field">
                        <span>{{ data?.likes }}</span>
                        <button>
                            <Icon name="icons:like" size="18" />
                        </button>
                    </div>
                    <div class="post-view__rating-field">
                        <span>{{ data?.dislikes }}</span>
                        <button>
                            <Icon name="icons:dislike" size="18" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.post-view {
    margin-left: 135px;
    max-width: 690px;
    &__top {
        padding-top: 35px;
        display: flex;
        align-items: center;
        &-title {
            margin-left: 10px;
            font-size: 14px;
            font-weight: 300;
            color: var(--color-dark-grey);
        }
        &-date {
            margin-left: 15px;
            font-size: 14px;
            font-weight: 300;
            color: var(--color-grey);
        }
    }
    &__title {
        font-size: 22px;
        font-weight: 400;
        color: var(--color-primary);
    }
    &__text {
        font-size: 16px;
        font-weight: 300;
        color: var(--color-dark-grey);
        max-width: 530px;
        padding-bottom: 10px;
    }
    &__bottom {
        padding-bottom: 35px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__rating {
        display: flex;
        align-items: center;
        gap: 10px;
        &-field {
            color: var(--color-dark-grey);
            display: flex;
            align-items: center;
            button {
                cursor: pointer;
                border: none;
                background-color: var(--color-white);
            }
        }
    }
}
</style>