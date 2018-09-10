import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const messages = {
  en: {
    global: {
      or_word: 'OR',
      clear_title: 'Clear',
      email_title: 'E-mail',
      phone_title: 'Phone',
      please_wait_title: 'Please wait...',
      copyright_title: '2018 Universtage - the intergalactic network for stars!'
    },
    auth: {
      register_title: 'Register',
      user_name: 'User Name',
      user_password: 'User Password',
      user_name_required: 'User Name is required',
      user_password_required: 'Password is required',
      user_name_must_be_valid: 'Invalid User Name',
      user_password_must_be_valid: 'Invalid Password',
      user_phone_must_be_valid: 'Invalid Phone Number',
      user_phone_required: 'Phone is required',
      user_email_must_be_valid: 'Invalid Email Address',
      login_button_text: 'Sign In',
      register_button_text: 'Sign Up',
      pageText: '{0}-{1} of {2}'
    },
    device: {
      device_connect_button: 'Connect To Device',
      search_by_name: 'Search By Device Name'
    }
  },
  ru: {
    global: {
      or_word: 'Или',
      clear_title: 'Отчистить',
      email_title: 'E-mail',
      phone_title: 'Терефон',
      please_wait_title: 'Просьба ожидать...',
      copyright_title: '2018 Universtage - межгалактическая сеть для звезд!'
    },
    auth: {
      register_title: 'Регистрация',
      user_name: 'User Name',
      user_password: 'User Password',
      user_name_required: 'User Name is required',
      user_password_required: 'Password is required',
      user_name_must_be_valid: 'Invalid User Name',
      user_password_must_be_valid: 'Invalid Password',
      user_phone_must_be_valid: 'Invalid Phone Number',
      user_phone_required: 'Phone is required',
      user_email_must_be_valid: 'Invalid Email Address',
      login_button_text: 'Sign In',
      register_button_text: 'Регистрация',
      pageText: '{0}-{1} of {2}'
    },
    device: {
      device_connect_button: 'Connect To Device',
      search_by_name: 'Search By Device Name'
    }
  },
  he: {
    global: {
      or_word: 'או',
      clear_title: 'נקה',
      email_title: 'דאר אלקטרוני',
      phone_title: 'טלפון',
      please_wait_title: 'נא המתן...',
      copyright_title: '2018 Universtage - the intergalactic network for stars!'
    },
    auth: {
      register_title: 'הרשם',
      user_name: 'שם משתמש',
      user_password: 'סיסמה',
      user_name_required: 'שם משתמש חובה',
      user_password_required: 'סיסמה חובה',
      user_name_must_be_valid: 'שם משתמש לא חוקי',
      user_password_must_be_valid: 'סיסמה לא חוקית',
      user_phone_must_be_valid: 'Invalid Phone Number',
      user_phone_required: 'Phone is required',
      user_email_must_be_valid: 'Invalid Email Address',
      login_button_text: 'כנס',
      pageText: '{0}-{1} מתוך {2}'
    },
    device: {
      device_connect_button: 'תתחבר למכשיר',
      search_by_name: 'חפש שם המכשיר'
    }
  }
}

export default new VueI18n({
  locale: 'en',
  messages
})
