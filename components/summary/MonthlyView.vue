<script setup lang="ts">
const documents = [
    {
        title: 'Gelir Evrakları',
        subTitle: 'satış faturası'
    },
    {
        title: 'Gider Evrakları',
        subTitle: 'gider evrakı'
    },
    {
        title: 'Banka & Kart Ekstreleri',
        subTitle: 'ekstre'
    }
]
</script>

<template>
    <div class="flex xl:flex-row flex-col border border-[#DDD8EB] divide-x divide-y rounded-xl">
        <div class="flex flex-[20%] flex-col items-center justify-center md:gap-10 gap-2 md:p-4 p-5">
            <div class="text-[22px] text-[#3A2387] text-center font-semibold">EYLÜL 2024</div>
            <div class="max-w-fit rounded-full p-0.5 bg-[#FEEBE5] text-xs text-[#E84626] pe-4">
                <img class="inline-block me-2" src="/show.svg" alt="">
                <span>Devam ediyor</span>
            </div>
        </div>
        <div class="flex sm:flex-row flex-col flex-[40%] sm:divide-x-2 divide-[#f8f7fc]">
            <div v-for="item in documents" class="md:w-1/3 w-full">
                <div class="text-sm">
                    <div class="relative xl:block flex items-center xl:pt-7 pt-0 bg-[#FEEBE5] md:h-[80px] h-16 text-[#E84626] font-semibold">
                        <div class="flex items-start gap-x-1.5 px-3">
                            <img class="w-[14px] h-[14px]" src="/show.svg" alt="">
                            <div class="leading-none">{{ item.title }}</div>
                        </div>
                        <div class="absolute -bottom-1.5 left-1/2 -translate-x-1/2">
                            <svg width="23" height="6" viewBox="0 0 23 6" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 6L0.674683 -1.31815e-07L22.3253 1.76094e-06L11.5 6Z" fill="#FEEBE5" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex flex-col justify-center items-center md:h-[90px] h-20">
                        <div>0</div>
                        <div>{{ item.subTitle }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-[40%] flex items-center justify-center p-4">
            <div class="text-[#0D032E] text-sm">
                <strong class="text-[#3A2387]">Mükellef</strong>&nbsp;henüz evrak yükleme aşamasını
                tamamlamamış.
            </div>
        </div>
    </div>
</template>