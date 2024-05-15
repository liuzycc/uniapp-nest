import { diskStorage } from 'multer';
import { extname, join } from 'path';

export const multerOptions = {
  storage: diskStorage({
    destination: join(process.cwd(), '../uploadImageList'),
    filename: (req: any, file: any, cb: any) => {
      // 生成文件名
      const randomName = Array(32)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
      return cb(null, `${randomName}${extname(file.originalname)}`);
    },
  }),
};
