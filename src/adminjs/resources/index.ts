import { ResourceWithOptions } from "adminjs";
import { Category } from "../../models";
import { categoryResourceOptions } from "./category";

// Reune as opções de recursos criados
// Array de todas as opções de models. Serve para deixar mais organizado
export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions
  }
]