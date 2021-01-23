// 更改用户状态信息
export const phoneStatus = (state, mobile_phone_no) => {
    if (mobile_phone_no) {
        state.currentPhone = mobile_phone_no
        state.isPhoneLogin = true
    }
}
export const emailStatus = (state, email) => {
    if (email) {
        state.currentEmail = email
        state.isEmailLogin = true
    }
}
export const passwordStatus = (state, password) => {
    if (password) {
        state.currentPsd = password
        state.isEmailLogin = true
    }
}