<template>
  <v-app id="universtage">
    <v-navigation-drawer
      v-show="isLoggedIn"
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon v-show="isLoggedIn" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Universtage</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height pt-2>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer class="footer" color="indigo" app>
      <span class="white--text">&copy;{{ $t('global.copyright_title') }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Vue from 'vue'
  export default {
    components: {},
    props: {
      source: String
    },
    data () {
      console.log(this.$store.state)
      return {
        cordova: Vue.cordova,
        clipped: false,
        drawer: false,
        items: [
          {
            icon: 'bubble_chart',
            title: 'Menu'
          }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Universtage',
        isLoggedIn: this.$store.state.AppStore.currentUser,
        selectedLang: this.$i18n.locale
      }
    },
    created () {
      var self = this
      this.cordova.on('deviceready', () => {
        self.onDeviceReady()
        screen.orientation.lock('landscape')
      })
      const messageChannel = new MessageChannel()
      messageChannel.port1.addEventListener('message', (event) => {
        console.log(event.data)
      })
      // worker.postMessage({message: 1}, [messageChannel.port2])
      // if (window.Notification && Notification.permission !== 'denied') {
      //   Notification.requestPermission((status) => {
      //     // status is "granted", if accepted by user
      //     var n = new Notification('Title', {
      //       body: 'I am the body text!',
      //       icon: '/static/img/favicon.png' // optional
      //     })
      //     console.log(n)
      //   })
      // }
    },
    mounted () {
      this.$store.dispatch('AppStore/init')
    },
    methods: {
      onDeviceReady: function () {
        // Handle the device ready event.
        this.cordova.on('pause', this.onPause, false)
        this.cordova.on('resume', this.onResume, false)
        if (this.cordova.device.platform === 'Android') {
          document.addEventListener('backbutton', this.onBackKeyDown, false)
          // alert(window.screen.orientation)
        }
        // alert(MessageChannel)
      },
      onPause () {
        // Handle the pause lifecycle event.
        console.log('pause')
      },
      onResume () {
        // Handle the resume lifecycle event.
        // SetTimeout required for iOS.
        setTimeout(function () {
          console.log('resume')
        }, 0)
      },
      onBackKeyDown () {
        // Handle the back-button event on Android. By default it will exit the app.
        navigator.app.exitApp()
      },
      showSettings () {
        this.$store.dispatch('AppStore/setShowSettings', true)
      }
    }
  }
</script>

<style>
	body {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
	}
  .footer{ 
    margin-bottom: constant(safe-area-inset-bottom);
    margin-bottom: env(safe-area-inset-bottom);
    padding: 0 0 0 8px;
    z-index: 10;
    font-size: .86em;
  }
</style>
