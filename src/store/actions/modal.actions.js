import { HIDE_MODAL, SHOW_MODAL, SHOW_MODAL_ASYNC } from '../const/modal.const';

export const show = () => ({ type: SHOW_MODAL })
export const hide = () => ({ type: HIDE_MODAL })

export const showAsync = () => ({ type: SHOW_MODAL_ASYNC })
