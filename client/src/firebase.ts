import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { selfUpdateUser } from './services';

const firebaseConfig = {
  apiKey: 'AIzaSyD2YUPM5hIUPeXZGzqZvkvIuXfWPAteS5U',
  authDomain: 'test-74caf.firebaseapp.com',
  projectId: 'test-74caf',
  storageBucket: 'test-74caf.appspot.com',
  messagingSenderId: '816359809491',
  appId: '1:816359809491:web:0aec972a768e640f9d8f26',
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
        'BB2p_SJpdqI5NZSFmb4ZSDjwma0uUquVOvPMiYKjNz2Q4_9RF_kmzOH90_ZXznOsUrSlXgCceliSaQI0_yK6Ez4',
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
