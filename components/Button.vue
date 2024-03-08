<script lang="ts" setup>
withDefaults(
  defineProps<{
    theme?: 'text' | 'fancy'
  }>(),
  {
    theme: 'text',
  },
)
</script>

<template>
  <ActionTrigger
    :class="{
      'inline-flex justify-center rounded bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow [text-shadow:0_0.125em_0.25em_rgba(0,0,0,0.15)] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:bg-slate-100 disabled:bg-none disabled:text-slate-300 disabled:[text-shadow:none] not-disabled:hover:bg-primary-500 not-disabled:active:translate-y-px not-disabled:active:scale-[0.98] not-disabled:active:bg-primary-700 not-disabled:active:text-primary-100 dark:bg-primary-600 dark:text-primary-50 dark:focus-visible:outline-primary-400 dark:disabled:bg-slate-400 dark:disabled:text-slate-300 dark:not-disabled:hover:bg-primary-500 dark:not-disabled:hover:text-white dark:not-disabled:active:bg-primary-700 dark:not-disabled:active:text-primary-100 md:px-5 md:py-2.5':
        theme === 'fancy',
      'inline-flex text-sm text-primary-900 underline decoration-primary-400 underline-offset-2 disabled:text-slate-300 disabled:decoration-slate-100 not-disabled:hover:text-primary-700 not-disabled:active:text-primary-800 dark:text-primary-200 dark:decoration-primary-400 dark:disabled:text-slate-500 dark:disabled:decoration-slate-600 dark:not-disabled:hover:text-primary-100 dark:not-disabled:active:text-primary-400':
        theme === 'text',
    }"
    v-bind="$attrs"
    ><slot
  /></ActionTrigger>
</template>
