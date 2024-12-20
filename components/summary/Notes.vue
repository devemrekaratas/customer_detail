<script setup lang="ts">
const isEven = (index: number) => {
    return index % 2 === 0
}
</script>

<template>
    <div>
        <div class="flex items-center justify-between h-10 mb-2">
            <h4 class="text-[22px] font-semibold text-[#3A2387]">Notlar</h4>
            <div
                class="flex gap-x-[18px] text-[#22105D] font-semibold border border-[#DDD8EB] rounded-2xl px-4 py-2.5 cursor-pointer">
                <img src="/note_icon.svg" alt="note icon">
                <div>Yeni Not</div>
            </div>
        </div>
        <div class="border border-[#DDD8EB] rounded-xl md:p-5 p-4 xl:h-full">
            <div v-for="(i, index) in 4" :key="index">
                <div class="flex items-center justify-between md:px-5 px-0 py-6 gap-4 border-b">
                    <div class="w-full">
                        <div class="flex items-center justify-between mb-2.5">
                            <div class="flex items-center gap-x-3">
                                <div class="text-sm text-[#0D032E] font-bold relative">
                                    <span :class="[{ 'bg-[#FF704D]': isEven(index), 'bg-[#5796F3]': !isEven(index) }]"
                                        class="inline-block w-2 h-2 rounded-full me-1.5"></span>
                                    0{{ index + 1 }}
                                </div>
                                <div class="text-[#3A2387] font-semibold">Yapılacaklar</div>
                            </div>
                            <div class="text-[#564D74] text-xs font-medium">
                                10 Eylül 2024
                            </div>
                        </div>
                        <div class="text-sm">
                            Laoreet aliquet cras sed donec ut amet. Porttitor ante sollicitudin euismod sed.
                        </div>
                    </div>
                    <div>
                        <img src="/dots.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>