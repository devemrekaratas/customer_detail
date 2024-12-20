<script setup lang="ts">
const items = [
  {
    name: 'accounting',
    title: "muhasebe İşlemi",
  },
  {
    name: 'documents',
    title: "müşteri Evrakları",
  },
  {
    name: 'profile',
    title: "müşteri profili",
  }
]
</script>

<template>
  <div class="min-h-screen flex flex-col">

   <USidebar />

    <div class="xl:pl-[5.375rem] flex flex-1">

      <main class="flex flex-col flex-1 bg-[#f8f7fc] w-full h-full">

        <Header />

        <BaseUTab :tabs="items">

          <template #accounting>
            <UAlert />
            <Summary />
          </template>

          <template #documents>
            <div class="px-[1.875rem] py-8 font-bold text-xl">Müşteri Evrakları</div>
          </template>

          <template #profile>
            <div class="px-[1.875rem] py-8 font-bold text-xl">Müşteri Profili</div>
          </template>

        </BaseUTab>

      </main>
    </div>
  </div>
</template>