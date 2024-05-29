import { Controller, Get, Query } from '@nestjs/common';
// @ts-ignore
import * as nodemailer from 'nodemailer';

@Controller('mail')
export class MailController {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      // 这里配置你的 SMTP 服务器信息
      host: 'smtp.163.com',
      port: 465,
      secure: true, // 如果端口是 465，将其设置为 true
      auth: {
        user: 'liuziyicc0118@163.com',
        pass: 'KRWTMMPZRPFLDMNT',
      },
    });
  }
  @Get('/send')
  async send(@Query() info: any) {
    const { to, title, htmlContent } = info;
    const res = await this.sendMail(to, title, htmlContent);
    return res;
  }
  async sendMail(to: string, subject: string, content: string) {
    const mailOptions = {
      from: 'liuziyicc0118@163.com', // 发件人地址
      to: to, // 收件人地址，可以是多个，用逗号分隔
      subject: subject, // 主题
      //   text: content, // 纯文本内容
      html: content, // HTML 内容
    };

    const info = await this.transporter.sendMail(mailOptions);

    // 返回信息等处理
    return info;
  }
}
