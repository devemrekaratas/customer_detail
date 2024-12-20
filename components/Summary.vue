<template>
    <div class="flex flex-col">
        <SummaryTitle />
        <div class="flex flex-col lg:px-[1.875rem] px-[1rem] lg:gap-y-[60px] gap-y-8">
            <SummaryMonthlyView />
            <div class="grid xl:grid-cols-2 grid-cols-1 gap-8">
                <SummaryTaxpayerDetails />
                <SummaryNotes />
            </div>
        </div>
    </div>
</template>