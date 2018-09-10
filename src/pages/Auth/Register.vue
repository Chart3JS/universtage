<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-form ref="registrationForm" v-model="valid" lazy-validation>
          <div v-if="registerStatus.step === 1">
            <v-text-field
              v-model="userData.user_mail"
              :rules="emailRules"
              :label="$t('global.email_title')"
              required="true"
            ></v-text-field>
          </div>
          <div v-if="registerStatus.step === 0">
            <v-select
              :items="phoneCodes"
              item-text="phone_code"
              item-value="country_code"
              v-model="countryCode"
              label="Intl. Code"
              required
            ></v-select>
            <v-text-field              
              v-model="userData.user_phone"
              :rules="phoneRules"
              :label="$t('global.phone_title')"
              required="true"
            ></v-text-field>
          </div>
          <v-dialog
            v-model="registrationInProgress"
            persistent
            width="300"
          >
            <v-card
              color="primary"
              dark
            >
              <v-card-text>
                Please stand by
                <v-progress-linear
                  indeterminate
                  color="white"
                  class="mb-0"
                ></v-progress-linear>
              </v-card-text>
            </v-card>
          </v-dialog>
          <v-btn
            :disabled="!valid"
            @click="runRegistrationStep"
            color="info"
            primary
          >
            {{ $t('auth.login_button_text') }}
          </v-btn>
          <v-btn @click="clear">
            {{ $t('global.clear_title') }}
          </v-btn>
        </v-form>
        <v-divider></v-divider>
        <v-card-text style="text-align: center">
          {{ $t('global.or_word') }}
        </v-card-text>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  components: {

  },
  data () {
    return {
      phoneCodes: this.$store.state.AppStore.appData ? this.$store.state.AppStore.appData.phone_codes : [],
      countryCode: 'IL',
      userData: {
        user_name: null,
        user_phone: null,
        user_another_phone: null,
        user_mail: null

      },
      currentUser: this.$store.state.AppStore.currentUser,
      registerStatus: this.$store.state.AppStore.registerStatus,
      passwordRules: [
        v => !!v || this.$t('auth.user_password_required')
      ],
      userNameRules: [
        v => !!v || this.$t('auth.user_name_required'),
        v => /.+@.+/.test(v) || this.$t('login.user_name_must_be_valid')
      ],
      emailRules: [
        v => /.+@.+/.test(v) || this.$t('auth.user_email_must_be_valid')
      ],
      phoneRules: [
        v => !!v || this.$t('auth.user_phone_required'),
        v => /^[a-zA-Z0-9\-().\s]{10,15}$/.test(v) || this.$t('auth.user_phone_must_be_valid')
      ]
    }
  },
  computed: {
    ...mapGetters({
      phoneCodes: 'getPhoneCodes'
    })
  },
  created () {
    // this.$refs.registrationForm.validate()
  },
  methods: {
    runRegistrationStep () {
      let { currentUser, registerStatus, currentLanguage } = this.$store.state.AppStore
      if (this.$refs.registrationForm.validate()) {
        registerStatus.step++
        let registerOptions = Object.freeze({
          userData: Object.assign(this.userData, { lang: currentLanguage }),
          state: registerStatus
        })
        this.$store.dispatch('AppStore/register', registerOptions).then(() => {
          let newUser = currentUser
          console.log(newUser)
          // if (newUser && newUser.token) {
          //   this.$router.replace('/')
          // } else {
          //   this.clear()
          //   this.$refs.registrationForm.validate()
          // }
        })
      }
    },
    clear () {
      this.userData.user_name = null
      this.userData.user_password = null
    }
  }
}
</script>
