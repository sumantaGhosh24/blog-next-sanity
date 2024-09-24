import {defineType, defineArrayMember} from "sanity";
import {ImageIcon, UserIcon} from "@sanity/icons";

import ExternalLinkRenderer from "../components/ExternalLinkRenderer";
import TitleStyle from "../components/TitleStyle";

export const blockContentType = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      styles: [
        {
          title: "Title",
          value: "title",
          component: TitleStyle,
        },
        {title: "Normal", value: "normal"},
        {title: "H1", value: "h1"},
        {title: "H2", value: "h2"},
        {title: "H3", value: "h3"},
        {title: "H4", value: "h4"},
        {title: "H5", value: "h5"},
        {title: "H6", value: "h6"},
        {title: "Quote", value: "blockquote"},
        {title: "Hidden", value: "blockComment"},
      ],
      lists: [
        {title: "Bullet", value: "bullet"},
        {title: "Numbered", value: "number"},
      ],
      marks: {
        decorators: [
          {title: "Strong", value: "strong"},
          {title: "Emphasis", value: "em"},
          {title: "Code", value: "code"},
          {
            title: "Highlight",
            value: "highlight",
            icon: () => "H",
          },
          {title: "Underline", value: "underline"},
          {title: "Strike", value: "strike-through"},
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (Rule) =>
                  Rule.regex(
                    /https:\/\/(www\.|)(portabletext\.org|sanity\.io)\/.*/gi,
                    {
                      name: "internal url",
                      invert: true,
                    }
                  ).warning(
                    `This is not an external link. Consider using internal links instead.`
                  ),
              },
            ],
            components: {
              annotation: ExternalLinkRenderer,
            },
          },
          {
            name: "internalLink",
            type: "object",
            title: "Internal link",
            icon: UserIcon,
            fields: [
              {
                name: "reference",
                type: "reference",
                title: "Reference",
                to: [
                  {type: "post"},
                  {type: "category"},
                  {type: "tag"},
                  {type: "author"},
                ],
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      icon: ImageIcon,
      options: {hotspot: true},
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    {
      type: "code",
    },
  ],
});
