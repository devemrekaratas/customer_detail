<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'

const dropdown = ref(false)

const dropdownHandler = () => {
  dropdown.value = false
}
</script>

<template>
    <div class="relative">
        <div class="flex bg-white rounded-xl items-center lg:h-12 h-10 px-1">
            <div class="flex items-center lg:gap-x-2.5 gap-x-1">
                <img class="lg:w-10 lg:h-10 w-6 h-6 shrink-0 object-cover lg:rounded-xl rounded-md" src="/user.png" alt="">
                <div class="md:block hidden w-28">
                    <div class="line-clamp-1 lg:text-[15px] text-[#0D032E] text-sm font-semibold leading-[18px]">Eren Yıldırım
                    </div>
                    <div class="text-xs text-[#564D74] leading-[15px]">Mali Müşavir</div>
                </div>
                <button @click.stop="dropdown = !dropdown">
                    <img src="/ddicon.svg" alt="">
                </button>
            </div>
        </div>
        <Transition name="slide-fade" v-on-click-outside.bubble="dropdownHandler">
            <div v-if="dropdown" class="absolute top-full bg-white mt-1 right-0 w-full min-w-48 rounded-md shadow-lg p-2">
                <div v-for="i,index in 3">
                    <div class="cursor-pointer border-b hover:bg-gray-100 p-1">item {{  index + 1 }}</div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>