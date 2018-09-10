import MobileDetect from 'mobile-detect'
class StorageManager {
  constructor (mobileDetect) {
    this.mobileDetect = mobileDetect
    this.StorageHandler = null
    if (mobileDetect.mobile() === null && mobileDetect.tablet() === null) {
      // web- use local storage
      this.StorageHandler = window.localStorage
    } else {
      // mobile or tablet- use cordova storage
    }
  }

  setItem () {

  }
  getItem () {

  }
  removeItem () {

  }
  clear () {

  }
}
export default {
  StorageManager: new StorageManager(new MobileDetect(window.navigator.userAgent))
}
