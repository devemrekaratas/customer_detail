<script setup lang="ts">
interface ITab {
    title: string
    name: string
}

interface IProps {
    tabs: ITab[]
}

const props = defineProps<IProps>()
const activeIndex = ref(0)
const emit = defineEmits()

const activateTab = (index: number) => {
    activeIndex.value = index
}

</script>

<template>
    <div class="bg-white rounded-t-xl">
        <ul class="flex items-center lg:px-[1.875rem] px-4 color-white rounded-t-xl overflow-hidden overflow-x-auto scrollbar-none">
            <li v-for="(item, index) in tabs" :key="index" @click="activateTab(index)"
                :class="[
                    {'border-[#FF704D] text-[#3A2387]': index === activeIndex},
                    {'border-white text-[#A095BF]' : index !== activeIndex },
                ]"
                class="flex-1 max-w-fit text-center whitespace-nowrap border-b-[3px] font-semibold text-lg uppercase lg:px-8 px-4 pb-3 pt-5 cursor-pointer">
                {{ item.title }}
            </li>
        </ul>
        <div class="bg-white" v-for="(item, index) in tabs" :key="index" v-show="index === activeIndex">
            <slot :name="item.name"></slot>
        </div>
    </div>
</template>