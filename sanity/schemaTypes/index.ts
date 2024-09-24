import {type SchemaTypeDefinition} from "sanity";

import {blockContentType} from "./blockContentType";
import {tagType} from "./tagType";
import {categoryType} from "./categoryType";
import {postType} from "./postType";
import {authorType} from "./authorType";

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [blockContentType, tagType, categoryType, postType, authorType],
};
