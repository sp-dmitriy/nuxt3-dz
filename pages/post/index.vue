<script setup lang="ts">
    import type { GetPostsResponse } from '~/interfaces/post.interface'
    const config = useRuntimeConfig()
    const API_URL = config.public.apiurl
    const { data } =  await useFetch<GetPostsResponse>(API_URL + '/posts')

</script>

<template>
    <div class="post">
        <PostCard v-for="post in data?.posts" :key="post.id" v-bind="post" />
    </div>
</template>

<style scoped>
.post {
    max-width: 692px;
    margin-left: 135px;
}
</style>