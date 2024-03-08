<script lang="ts" setup>
import * as darkTheme from '@/assets/theme-dark'
import * as lightTheme from '@/assets/theme-light'
import { JsonViewer } from 'vue3-json-viewer'

import type { JsonValue } from 'type-fest'
import { StreamLanguage } from '@codemirror/language'
import { sparql } from '@codemirror/legacy-modes/mode/sparql'
import { keymap } from '@codemirror/view'

const themeStore = useColorThemeStore()

const inputCodeStore = useInputCodeStore()
const autoRunStore = useAutoRunStore()

const sparqlLanguage = StreamLanguage.define(sparql)

const inputFocused = ref(false)
const throttledInputCode = refDebounced(toRef(inputCodeStore, 'state'), 350)
const evaluatedInputCode = ref('')
watch(
  throttledInputCode,
  throttledInputCodeValue => {
    if (!autoRunStore.state) return

    evaluatedInputCode.value = throttledInputCodeValue
  },
  { immediate: true },
)

const evaluatorResult = useEvaluator(evaluatedInputCode)
const outputData = ref<JsonValue>()
watch(
  () => evaluatorResult.value.data,
  (newValue, oldValue) => {
    if (JSON.stringify(newValue) === JSON.stringify(oldValue)) return

    outputData.value = newValue
  },
  { deep: true, immediate: true },
)
const outputSuccess = computed(() => evaluatorResult.value.success)

// When re-enabling auto running, re-evaluate the input code and version
watch(
  () => autoRunStore.state,
  autoRun => {
    if (!autoRun) return
    if (typeof outputData.value === 'undefined') return

    evaluatedInputCode.value = inputCodeStore.state
  },
)

const inputExtensions = [
  sparqlLanguage,
  keymap.of([
    {
      key: 'Mod-Enter',
      preventDefault: true,
      run: () => {
        if (autoRunStore.state) return true
        evaluatedInputCode.value = inputCodeStore.state
        return false
      },
    },
  ]),
]
const editorThemeData = computed(() =>
  themeStore.theme === 'dark' ? darkTheme : lightTheme,
)

const justCopied = autoResetRef(false, 3000)
function copyJs() {
  window.navigator.clipboard
    .writeText(JSON.stringify(outputData.value, null, 2))
    .then(() => {
      justCopied.value = true
    })
}
</script>

<template>
  <div
    class="flex h-[100dvh] flex-col items-stretch"
    :style="{
      '--sidebar-measure': '6.75rem',
      '--sidebar-width': 'var(--sidebar-measure)',
      '--divider-width': '0.125rem',
    }"
  >
    <ShareDialog />

    <Layout>
      <template #actions>
        <Actions />
      </template>

      <template #left>
        <div class="relative h-full w-full">
          <CornerTag :visible="!inputFocused">SPARQL</CornerTag>
          <Editor
            v-model="inputCodeStore.state"
            @focus="inputFocused = true"
            @blur="inputFocused = false"
            :theme="editorThemeData.theme"
            :highlight-style="editorThemeData.highlightStyle"
            line-numbers
            :extensions="inputExtensions"
          />
        </div>
      </template>

      <template #divider>
        <hr class="h-full w-full border-none bg-slate-100 dark:bg-slate-800" />
        <button
          @click="evaluatedInputCode = inputCodeStore.state"
          class="3xl:p-4 absolute left-1/2 z-20 -translate-x-1/2 translate-y-[calc(-50%_+_0.5_*_var(--divider-width))] rounded-full bg-primary-600 p-3 text-white shadow-[0_0.1rem_0.125rem_rgb(0_0_0_/_25%),0_0.25rem_1rem_rgb(0_0_0_/_25%)] transition-opacity duration-150 hover:bg-primary-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500 active:scale-[0.96] active:bg-primary-700 active:text-primary-100 md:left-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-[calc(-50%_+_0.5_*_var(--divider-width))] xl:p-3.5"
          :class="{
            'pointer-events-none opacity-0': autoRunStore.state,
          }"
          :inert="autoRunStore.state"
        >
          <!-- prettier-ignore -->
          <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 xl:w-5 xl:h-5 3xl:w-6 3xl:h-6 translate-x-[10%]" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/></svg>
          <span class="sr-only">Play</span>
        </button>
      </template>

      <template #right>
        <div class="relative h-full w-full">
          <ActionTrigger
            v-if="outputSuccess && outputData != null"
            class="absolute right-0 top-0 z-10 rounded-bl-md bg-slate-100 hover:bg-slate-200 px-3 py-3 text-sm leading-none transition-opacity dark:bg-slate-800 dark:hover:bg-slate-700 dark:active:bg-slate-800 dark:text-slate-400 dark:active:text-slate-500 cursor-pointer"
            @click="copyJs"
          >
            <span class="flex gap-2.5">
              SPARQL.js
              <Icon
                v-if="!justCopied"
                alt="Copy as JSON"
                name="copy"
                class="w-3.5 h-3.5"
              />
              <Icon
                v-else
                name="check"
                alt="Copied"
                class="w-3.5 h-3.5 text-primary"
              />
            </span>
          </ActionTrigger>
          <CornerTag v-else-if="outputData == null">SPARQL.js</CornerTag>
          <CornerTag v-else>SPARQL.js Parsing Error</CornerTag>
          <div
            class="h-full overflow-auto p-4 text-[#565869] dark:text-[#D9D7CE] md:px-8 md:py-6"
          >
            <template v-if="outputSuccess">
              <template v-if="outputData != null">
                <JsonViewer
                  :value="outputData"
                  expanded
                  :expand-depth="Infinity"
                />
              </template>
            </template>
            <template v-else>
              <pre class="text-red-500 dark:text-red-400 whitespace-pre-line">{{
                outputData
              }}</pre>
            </template>
          </div>
        </div>
      </template>
    </Layout>
  </div>
</template>

<style lang="scss">
@use '@/assets/css/json-viewer-theme.scss';
</style>
