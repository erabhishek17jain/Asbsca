import nodeMailer from 'nodemailer';
import config from 'config';


interface IEmail {
  sendEmail: (to: string, subject: string, text: string) => Promise<void>;
}

export default class Email implements IEmail {
  private static instance: Email = new this();
  private constructor() {}
  public static get fn(): Email {
    return this.instance;
  }

  private transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.email.user,
      pass: config.email.pass
    }
  });

  public async sendEmail(to: string, subject: string, text: string): Promise<void> {
    const mailOptions = {
      from: config.email.user,
      to,
      subject,
      html: text
    };

    this.transporter.sendMail(mailOptions, (err: any, info: any) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
}
