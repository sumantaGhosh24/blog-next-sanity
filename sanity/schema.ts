import {type SchemaTypeDefinition} from "sanity";

import category from "./schemaTypes/categoryType";
import author from "./schemaTypes/authorType";
import post from "./schemaTypes/postType";

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [category, author, post],
};
