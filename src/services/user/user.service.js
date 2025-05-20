import { UserService, getOptions } from './user.class.js';

export function user(app) {
  app.use('/users', new UserService(getOptions(app)), {
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove']
  });
}
