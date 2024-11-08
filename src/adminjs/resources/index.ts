import { ResourceWithOptions } from "adminjs";
import { Category, Course, Episode, User } from "../../models";
import { categoryResourceOptions } from "./category";
import { courseResourceFeatures, courseResourceOptions } from "./course";
import { episodeResourceFeatures, episodeResourceOptions } from "./episode";
import { userResourceOptions } from "./user";

// Reune as opções de recursos criados
// Array de todas as opções de models. Serve para deixar mais organizado
export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions
  },
  {
    resource: Course,
    options: courseResourceOptions,
    features: courseResourceFeatures
  },
  {
    resource: Episode,
    options: episodeResourceOptions,
    features: episodeResourceFeatures
  },
  {
    resource: User,
    options: userResourceOptions
  }
]