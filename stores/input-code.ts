export const useInputCodeStore = defineStore('input-code', () => {
  const inputCode = ref('')

  return {
    state: inputCode,
  }
})
