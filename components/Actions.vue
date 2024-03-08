<script lang="ts" setup>
import type {
  FormattingResult,
  FormattingWorkerResponse,
  WorkerMessage,
} from '../util/formatting-worker/formatting-utils'

const shareStore = useShareStore()
const storableStateStore = useStorableStateStore()
const inputCodeStore = useInputCodeStore()

const themeStore = useColorThemeStore()
const autoRunStore = useAutoRunStore()

async function applyFormatting(): Promise<void> {
  const worker = useFormattingWorkerStore().get()
  function format(code: string) {
    return new Promise<FormattingResult>(resolve => {
      const id = crypto.randomUUID()

      const stop = useEventListener(
        worker,
        'message',
        (event: MessageEvent<FormattingWorkerResponse>) => {
          if (event.data?.id !== id) return

          stop()
          resolve(event.data.payload)
        },
      )

      worker.postMessage({
        type: 'format',
        id,
        code,
      } satisfies WorkerMessage)
    })
  }

  const inputCode = inputCodeStore.state
  const result = await format(inputCode)

  if (result.success && result.result !== inputCode) {
    inputCodeStore.state = result.result
  }
}

function share() {
  storableStateStore.encode().then(hash => {
    const url = new URL(window.location.href)
    url.hash = hash!
    shareStore.url = url.toString()
  })
  shareStore.show = true
}
</script>

<template>
  <div
    data-actions
    class="relative z-20 h-full min-h-0 w-full justify-center overflow-auto bg-slate-100 shadow-md dark:bg-slate-800"
  >
    <div
      class="grid h-full min-w-[40rem] grid-cols-5 items-stretch gap-3 p-2 md:flex md:min-w-0 md:flex-col md:gap-1"
    >
      <ToggleButton
        v-model="autoRunStore.state"
        label="Auto-run"
        icon="redo"
        :shortcut="{ key: 'Digit1', label: '1' }"
      />
      <IconButton
        @click="themeStore.toggle()"
        highlight
        :label="
          themeStore.auto
            ? 'System'
            : themeStore.theme === 'dark'
              ? 'Dark Mode'
              : 'Light Mode'
        "
        :icon="
          themeStore.auto
            ? 'screen'
            : themeStore.theme === 'dark'
              ? 'moon'
              : 'sun'
        "
        :shortcut="{ key: 'Digit2', label: '2' }"
      />
      <IconButton
        class="md:mt-auto"
        @click="applyFormatting"
        highlight
        label="Format"
        icon="wand"
        :disabled="inputCodeStore.state.length === 0"
        :shortcut="{ key: 'Digit3', label: '3' }"
      />
      <IconButton
        @click="share"
        highlight
        label="Share"
        icon="share"
        :disabled="inputCodeStore.state.length === 0"
        :shortcut="{ key: 'Digit4', label: '4' }"
      />
      <IconButton
        highlight
        link="https://github.com/loilo/sparqljs-visualizer"
        label="Source"
        target="_blank"
        rel="noopener"
        icon="github"
        size="h-5 sm:h-6 w-auto"
        :shortcut="{ key: 'Digit5', label: '5' }"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
[data-actions] {
  --sb-track-color: theme('colors.slate.200');
  --sb-thumb-color: theme('colors.slate.300');
  --sb-size: 6px;

  @at-root :root.dark & {
    --sb-track-color: theme('colors.slate.900');
    --sb-thumb-color: theme('colors.primary.600');
  }

  scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);

  &::-webkit-scrollbar {
    width: var(--sb-size);
    height: var(--sb-size);
  }

  &::-webkit-scrollbar-track {
    background: var(--sb-track-color);
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-color);
    border-radius: 6px;
  }
}
</style>
