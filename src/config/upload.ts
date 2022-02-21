import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";

export default {
  upload(pasta: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", pasta),
        filename: (request, file, callback) => {
          const arquivoHash = crypto.randomBytes(16).toString("hex");
          const nomeArquivo = `${arquivoHash}-${file.originalname}`;

          return callback(null, nomeArquivo);
        },
      }),
    };
  },
};
