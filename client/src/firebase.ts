import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { selfUpdateUser } from './services';

const firebaseConfig = {
  apiKey: "AIzaSyBfjAX4oXj27T8CqNj3YLg3d772gDz5yFU",
  authDomain: "abasca-80b5e.firebaseapp.com",
  projectId: "abasca-80b5e",
  storageBucket: "abasca-80b5e.appspot.com",
  messagingSenderId: "845580204881",
  appId: "1:845580204881:web:2a53914df6f0fea0e6b170"
};

const app = initializeApp(firebaseConfig);
export default app;
const messaging = getMessaging(app);

export const getFirebaseToken = async (
  setTokenFound: (value: boolean) => void,
) => {
  try {
    const token = await getToken(messaging, {
      vapidKey:
        'BIMEbUeyp8lnoSxqsQR_Z1XIp4SiXY8o7kx9yc6UQENVxsPt96x4GScDsE1UkYGNvMxFTldBhf4HB9PUr-VqwWY',
    });
    if (token) {
      console.log('Token: ', token);
      await selfUpdateUser({ firebaseTokens: [token] });
      setTokenFound(true);
    } else {
      console.log('No token found');
      setTokenFound(false);
    }
  } catch (error) {
    console.log('An error occurred while retrieving token. ', error);
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});
