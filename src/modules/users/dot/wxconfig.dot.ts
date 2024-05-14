export class WxConfigDto {
  readonly grant_type: string;
  readonly appid: string;
  readonly secret: string;
  readonly access_token: string;
  readonly access_token_time: string;
}

export class wxTokenDto {
  readonly access_token: string;
  readonly access_token_time: string;
}
