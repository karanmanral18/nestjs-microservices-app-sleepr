import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { NotifyEmailDto } from './dto/notify-email.dto';

@Injectable()
export class NotificationsService {
  constructor(private readonly configService: ConfigService) {}

  private readonly transporter = nodemailer.createTransport({
    host: this.configService.get('MAIL_HOST'),
    port: this.configService.get('MAIL_PORT'),
    auth: {
      user: this.configService.get('MAIL_USERNAME'),
      pass: this.configService.get('MAIL_PASSWORD'),
    },
  });

  async notifyEmail({ email, text }: NotifyEmailDto) {
    await this.transporter.sendMail({
      from: this.configService.get('SMTP_USER'),
      to: email,
      subject: 'Payment Successfull',
      text,
    });
  }
}
