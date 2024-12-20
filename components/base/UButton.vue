<script setup lang="ts">

interface Props {
    variant?: string
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'solid'
})
</script>

<template>
    <button class="lg:h-12 lg:w-12 h-10 w-10 flex flex-shrink-0 items-center justify-center xl:rounded-xl rounded-md cursor-pointer" :class="[
        { 'bg-white': props.variant === 'solid' },
        { 'border border-[#DDD8EB]': props.variant === 'outline' }
    ]">
        <slot />
    </button>
</template>