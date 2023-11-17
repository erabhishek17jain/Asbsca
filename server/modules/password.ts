import crypto from 'crypto';

interface IPassword {
    generateHash: (password: string) => string;
    validateHash: (password: string, hash: string) => boolean;
}

export default class Password implements IPassword {
    private static instance: Password = new this();
    private SECRET_KEY: string = process.env.SECRET_KEY || `secret`;

    private constructor() {}
    public static get fn(): Password {
        return this.instance;
    }

    public generateHash = (password: string) => {
        const salt = crypto.createHash(`sha256`).update(this.SECRET_KEY).digest(`hex`);
        const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);
        return hash;
    };

    public validateHash = (password: string, hash: string): boolean => {
        const salt = crypto.createHash(`sha256`).update(this.SECRET_KEY).digest(`hex`);
        console.log('password', password);
        console.log('hash', crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`));
        return crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`) === hash;
    };
}
