import { ResourceOptions } from "adminjs";

export const categoryResourceOptions: ResourceOptions = { //são as opções  que o Adminjs recebe na hora de criar recursos
  navigation: 'Catálogo',
  editProperties: ['name', 'position'],
  filterProperties: ['name', 'position', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'name', 'position'],
  showProperties: ['id', 'name', 'position', 'createdAt', 'updatedAt'] //já vai passar todas, mesmo sem definir
}