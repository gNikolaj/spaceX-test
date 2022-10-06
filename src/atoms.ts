import {atom} from "recoil";

export const onClickPopular = atom({
    key: 'onClickPopular',
    default: false
})

export const favouriteTours = atom({
    key: 'favouriteTours',
    default: []
})