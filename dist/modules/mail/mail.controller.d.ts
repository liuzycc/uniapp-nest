export declare class MailController {
    private transporter;
    constructor();
    send(info: any): Promise<any>;
    sendMail(to: string, subject: string, content: string): Promise<any>;
}
