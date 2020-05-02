import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const tmpFolfer = path.resolve(__dirname, '../../tmp');

export default {
  directory: tmpFolfer,

  storage: multer.diskStorage({
    destination: tmpFolfer,
    filename(request, file, callback) {
      const filehash = crypto.randomBytes(10).toString('HEX');
      const filename = `${filehash}-${file.originalname}`;

      return callback(null, filename);
    },
  }),
};
