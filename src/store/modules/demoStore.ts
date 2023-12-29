import { defineStore } from 'pinia'
import { reactive, toRefs } from "vue"

interface IUserState {
    firstName: string
    lastName: string
}

const demoStore = defineStore('demoStore', () => {
    const state = reactive<IUserState>({
        firstName: 'Zhang',
        lastName: 'San'
    })

    const fullName = (): string => state.firstName + ' ' + state.lastName

    return {
        ...toRefs(state),
        fullName
    }
})

export default demoStore