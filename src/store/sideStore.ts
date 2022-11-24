import { defineStore } from 'pinia'

export const useSideStore = defineStore('side', {
  state() {
    return {
      useDefaultSide: true,
      drawerCollapsed: false,
      collapsed: true,
      subMenuKeysArr: new Array<string>(),
      menuItemKeysArr: new Array<string>()
    }
  }
})
