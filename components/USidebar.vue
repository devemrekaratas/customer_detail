<script setup lang="ts">
const navLinks = [
  {
    src: 'dashboard',
    isActive: false
  },
  {
    src: 'profile',
    isActive: true
  },
  {
    src: 'user',
    isActive: false
  },
  {
    src: 'file',
    isActive: false
  },
  {
    src: 'settings',
    isActive: false
  }
]
</script>

<template>
  <aside class="fixed flex-col w-[5.375rem] bg-[#f8f7fc] hidden xl:flex h-dvh">
    <div class="flex items-center justify-center h-[104px]">
      <img src="/ustad_logo.svg" alt="">
    </div>
    <nav class="w-[68px]">
      <img src="/sidebar/top.svg" alt="">
      <ul class="flex flex-col gap-y-4 justify-center bg-[#3A2387] px-2.5">
        <li v-for="navlink in navLinks">
          <div :class="[{ 'bg-white': navlink.isActive }]"
            class="flex items-center justify-center w-12 h-12 rounded-xl cursor-pointer">
            <img class="flex-shrink-0" :src="`/sidebar/${navlink.src}.svg`" alt="">
          </div>
        </li>
      </ul>
      <img src="/sidebar/bottom.svg" alt="">
    </nav>
    <div>
      <img class="pl-5" src="/sidebar/collapse.svg" alt="">
    </div>
    <div class="mt-auto">
      <img class="pl-5 pb-5" src="/sidebar/chat.svg" alt="">
    </div>
  </aside>
</template>