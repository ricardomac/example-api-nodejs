import { parse } from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { ICategoriaRepository } from "../../repositories/ICategoriaRepository";

interface IImportarCategoria {
  nome: string;
  descricao: string;
}

@injectable()
class ImportarCategoriaUseCase {
  constructor(
    @inject("CategoriaRepository")
    private categoriaRepository: ICategoriaRepository
  ) {}

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

      const existeCategoria = await this.categoriaRepository.obterPorNome(nome);

      if (!existeCategoria) {
        await this.categoriaRepository.criar({ nome, descricao });
      }
    });
  }
}
export { ImportarCategoriaUseCase };
