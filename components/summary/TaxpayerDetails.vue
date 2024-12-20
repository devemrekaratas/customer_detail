<script setup lang="ts">
const taxPayer = [
    {
        title: 'Şirket Adı',
        descr: 'Solar Güneş Panelleri İth. İhrc. Ltd. Şti.'
    },
    {
        title: 'Sektör',
        descr: 'Güneş Panelleri İthalat İhracat'
    },
    {
        title: 'Şirket VKN.',
        descr: '121200536'
    },
    {
        title: 'Şirket Tipi',
        descr: 'Ltd.'
    },
    {
        title: 'Personel Sayısı',
        descr: '19'
    },
    {
        title: 'Defter Kayıt Şekli',
        descr: 'Bilanço'
    },
    {
        title: 'Ticaret Sicil Odası',
        descr: '11235690'
    },
    {
        title: 'NACE Kodu',
        descr: '125632000'
    },
    {
        title: 'Web Adresi',
        descr: 'Faal - Ticaret'
    }
]
</script>

<template>
    <div>
        <h4 class="text-[22px] font-semibold h-10 mb-2 text-[#3A2387]">Mükellef Bilgileri</h4>
        <div class="border border-[#DDD8EB] rounded-xl md:py-10 py-6 md:px-[30px] px-4 xl:h-full">
            <div v-for="(i, index) in taxPayer" :key="index" class="sm:flex h-10 sm:mb-0 mb-4 last:mb-0">
                <div class="flex-[25%] text-[13px] font-semibold text-[#3A2387]">{{ i.title }}</div>
                <div class="flex-[75%] text-[15px]">{{ i.descr }}</div>
            </div>
        </div>
    </div>
</template>