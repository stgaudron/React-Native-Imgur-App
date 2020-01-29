import {observable, action, computed} from 'mobx';
import fetch from 'better-fetch';

const CLIENT_ID ='';

const LANDSCAPE ='LANDSCAPE';
const PORTRAIT ='PORTRAIT';

const IMGUR_URL ='https://api.imgur.com/3';

class Store {
  @observable callbackurl = '';

  @action setCallbackurl(callbackurl){
    this.callbackurl = callbackurl;
  }
}

export default new Store();
