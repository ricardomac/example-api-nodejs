import { parse } from "csv-parse";
import fs from "fs";

import { ICategoriaRepository } from "../../repositories/ICategoriaRepository";

interface IImportarCategoria {
  nome: string;
  descricao: string;
}

class ImportarCategoriaUseCase {
  constructor(private categoriaRepository: ICategoriaRepository) {}

  carregarCategorias(file: Express.Multer.File): Promise<IImportarCategoria[]> {
    return new Promise((resolve, reject) => {
      console.log(file);
      const stream = fs.createReadStream(file.path);
      const categorias: IImportarCategoria[] = [];

      const parseFile = parse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [nome, descricao] = line;
          categorias.push({ nome, descricao });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(categorias);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categorias = await this.carregarCategorias(file);

    categorias.map(async (categoria: IImportarCategoria) => {
      const { nome, descricao } = categoria;

      const existeCategoria = this.categoriaRepository.obterPorNome(nome);

      if (!existeCategoria) {
        this.categoriaRepository.criar({ nome, descricao });
      }
    });
  }
}
export { ImportarCategoriaUseCase };
