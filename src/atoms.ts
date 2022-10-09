import {atom} from "recoil";

export const favouriteTours = atom({
    key: 'favouriteTours',
    default: [] as any[]
})

export const checkPage = atom({
    key: 'checkPage',
    default: true
})