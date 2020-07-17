import firebase from 'firebase';
import config from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();
const push = firebase.messaging();

export {
  db,
  auth,
  push,
};
