<template>
    <div class="container">
         <div class="sidebar">
            <nav class="nav">
                <NuxtLink to="/">
                    <Icon name="icons:home" size="24" />
                </NuxtLink>
                <NuxtLink to="/">
                    <Icon name="icons:exit" size="24" />
                </NuxtLink>
            </nav>
        </div>
        <main class="main">
            <slot />
        </main>
    </div>
</template>

<style scoped>
.container {
    padding: 0;
    display: flex;
    min-height: 100vh;
}

.sidebar {
    width: 80px;
    border-right: 1px solid var(--color-light-grey);
    padding: 45px 0;
}

.nav  {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.nav a {
    color: var(--color-primary);
}
.nav a:hover {
    color: var(--color-dark-grey);
    opacity: .8;
}

.main {
    width: 100%;
    padding: 40px 0;
}
</style>