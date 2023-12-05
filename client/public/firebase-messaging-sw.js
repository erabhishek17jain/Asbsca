// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyBfjAX4oXj27T8CqNj3YLg3d772gDz5yFU",
  authDomain: "abasca-80b5e.firebaseapp.com",
  projectId: "abasca-80b5e",
  storageBucket: "abasca-80b5e.appspot.com",
  messagingSenderId: "845580204881",
  appId: "1:845580204881:web:2a53914df6f0fea0e6b170"
};;

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});