export class UserService {
  constructor(options) {
    this.options = options || {};
  }

  async find(params) {
    const { name, lastName } = params.query;

    if (!name || !lastName) {
      return { message: 'Faltan parámetros: name y lastName' };
    }

    return {
      message: `Hola ${name} ${lastName}`
    };
  }

  async get(id, params) {
    return {
      message: `Solicitud GET con ID: ${id}`
    };
  }

  async create(data, params) {
    return {
      message: 'Solicitud POST (create) recibida',
      data
    };
  }

  async patch(id, data, params) {
    return {
      message: `Solicitud PATCH (actualizar) para ID: ${id}`,
      data
    };
  }

  async remove(id, params) {
    return {
      message: `Solicitud DELETE para ID: ${id}`
    };
  }
}

export const getOptions = (app) => {
  return {};
};
