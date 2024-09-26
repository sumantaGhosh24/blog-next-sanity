import {defineField, defineType} from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{type: "block"}],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{type: "string"}],
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{type: "category"}],
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{type: "author"}],
    }),
    defineField({
      name: "image",
      title: "Images",
      type: "array",
      of: [{type: "image", options: {hotspot: true}}],
    }),
  ],
});
