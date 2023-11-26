import firebase, { ServiceAccount } from "firebase-admin";
import { Message } from "firebase-admin/lib/messaging/messaging-api";
import serviceAccount from "google.json";

interface IPayload {
    title: string;
    body: string;
    tokens: string[];
}

interface INotification {
    getFirebaseApp: () => firebase.app.App;
    sendNotification: (payload: IPayload) => Promise<void>;
    sendNotifications: (payload: IPayload[]) => Promise<void>;
}

export default class FirebaseNotification implements INotification {
    private static instance: FirebaseNotification = new FirebaseNotification();
    private firebase: firebase.app.App;

    private constructor() {
        this.firebase = firebase.initializeApp({
            credential: firebase.credential.cert(serviceAccount as ServiceAccount),
        });
    }
    public static get fn(): FirebaseNotification {
        return this.instance;
    }
    
    public sendNotification = async (payload: IPayload): Promise<void> => {
        try {
            if (!payload.tokens.length) {
                return;
            }
            console.info("payload notification -> ", payload);
            await this.firebase.messaging().sendEachForMulticast({
                notification: {
                    title: payload.title,
                    body: payload.body,
                },
                tokens: payload.tokens,
            });
        } catch (error) {
            console.error(error);
        }
    }

    public sendNotifications = async (payloads: IPayload[]): Promise<void> => {
        const promises = payloads.map(async (payload) => {
            await this.sendNotification(payload);
        });
        await Promise.all(promises);
    }

    public getFirebaseApp = (): firebase.app.App => {
        return this.firebase;
    }
}

