/**
 * Created by syen on 2017/12/25.
 */
import  * as types from './mutation-types'

const mutations = {
  [types.SET_TABLE_DATA](state,payload){
    console.log(payload)
     state.basicTableData[payload[0]] = payload[1]
  }
}
export default mutations
