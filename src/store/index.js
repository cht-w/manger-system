/**
 * Vuex 状态管理
 */
import { createStore } from 'vuex'
import mutations from './mutations'
import getters from './getters'
import storage from './../utils/storage'
const state = {
  userInfo: '' || storage.getItem('userInfo')
}
export default createStore({
  state,
  mutations,
  getters
})