export class UserService {
  constructor(options) {
    this.options = options || {};
  }

  async find(params) {
    const { name, lastName } = params.query;

    if (!name || !lastName) {
      throw new Error('Faltan parámetros: name y lastName');
    }

    return {
      message: `Hola ${name} ${lastName}`
    };
  }

  async get(id, params) {
    throw new Error('Método get no implementado');
  }

  async create(data, params) {
    throw new Error('Método create no implementado');
  }

  async patch(id, data, params) {
    throw new Error('Método patch no implementado');
  }

  async remove(id, params) {
    throw new Error('Método remove no implementado');
  }
}
export const getOptions = (app) => {
  return {};
};
