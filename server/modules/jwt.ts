import jwt from "jsonwebtoken"

interface Payload {
 id: string;
 email: string;
 role: string;
}

interface JWTResponse {
  accessToken: string
}

interface IJWT {
  getToken: (payload: Payload) => JWTResponse;
  verifyToken: (token: string) => Payload;
}


export default class JWT implements IJWT {
  private static _instance: JWT = new this();
  private constructor() { }
  public static get fn(): JWT {
    return this._instance;
  }

  protected secretKey: string = process.env.SECRET_KEY || "secretKey";

  public getToken(payload: Payload): JWTResponse {
    const accessToken = jwt.sign(payload, this.secretKey, { expiresIn: '4h' });
    return { accessToken };
  }

  public verifyToken(token: string): Payload {
    const payload = jwt.verify(token, this.secretKey);
    return payload as Payload;
  }

  public getEmailVerificationToken(email: string): string {
    return jwt.sign({ email }, this.secretKey, { expiresIn: '1d' });
  }

  public verifyEmailVerificationToken(token: string): { email: string } {
    const payload = jwt.verify(token, this.secretKey);
    return payload as { email: string };
  }
}

