// 应用mutation
export const setPhone = ({commit}, mobile_phone_no) => {
    commit("phoneStatus", mobile_phone_no)
}
export const setEmail = ({commit}, email) => {
    commit("emailStatus", email)
}
export const setPsd = ({commit}, password) => {
    commit("passwordStatus", password)
}