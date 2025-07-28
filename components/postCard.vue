<script setup lang="ts">
    import type { Post } from '~/interfaces/post.interface';
    const post = defineProps<Post>()
</script>

<template>
    <NuxtLink class="post-card" :to="`/post/${post.id}`">
        <div class="post-card__top">
            <Icon name="icons:ava" size="24" />
            <span class="post-card__top-title">PurpleSchool</span>
            <span class="post-card__top-date">4 дня назад</span>
        </div>
        <h3 class="post-card__title">{{ post.title }}</h3>
        <div class="post-card__text">{{ post.content }}</div>
        <div class="post-card__bottom">
            <div class="post-card__rating">
                <div class="post-card__rating-field">
                    <span>{{ post.likes }}</span>
                    <button>
                        <Icon name="icons:like" size="18" />
                    </button>
                </div>
                <div class="post-card__rating-field">
                    <span>{{ post.dislikes }}</span>
                    <button>
                        <Icon name="icons:dislike" size="18" />
                    </button>
                </div>
            </div>
            <div class="post-card__actions">
                <button class="post-card__actions-btn">
                    <Icon name="icons:remove" size="18" />
                </button>
                <button class="post-card__actions-btn">
                    <Icon name="icons:edit" size="18" />
                    Изменить
                </button>
            </div>
        </div>
    </NuxtLink>
</template>

<style scoped>
.post-card {
    text-decoration: none;
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
        border-bottom: 1px solid var(--color-light-grey);
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
    &__actions {
        display: flex;
        gap: 10px;
        &-btn {
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 3px;
            border: none;
            background-color: var(--color-white);
        }
    }
}
</style>