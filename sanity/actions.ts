import {groq} from "next-sanity";

import {client} from "./lib/client";
import {buildQuery} from "./utils";

interface getBlogsParams {
  query: string;
  category: string;
  author: string;
}

export const getCategory = async () => {
  try {
    const category = await client.fetch(
      groq`*[_type == "category"]{
            _id,
            name,
            slug,
            image{
              _key,
              asset->{
                url,
                metadata
              },
              hotspot,
              crop
            }
          }`
    );
    return category;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getAuthor = async () => {
  try {
    const author = await client.fetch(
      groq`*[_type == "author"]{
                _id,
                name,
                slug,
                username,
                email,
                address,
                image{
                  _key,
                  asset->{
                    url,
                    metadata
                  },
                  hotspot,
                  crop
                },
                website,
                tags
            }`
    );
    return author;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getBlogs = async (params: getBlogsParams) => {
  const {query, category, author} = params;

  try {
    const blogs = await client.fetch(
      groq`${buildQuery({
        type: "post",
        query,
        category,
        author,
      })}{
          _id,
          title,
          description,
          content,
          tags,
          'category': category->{
            ...,
            image{
              asset->{
                url,
                metadata
              },
              hotspot,
              crop
            }
          },
          'author': author->{
            ...,
            image{
              asset->{
                url,
                metadata
              },
              hotspot,
              crop
            }
          },          
          image[]{
            _key,
            asset->{
              url,
              metadata
            },
            hotspot,
            crop
          }
        }`
    );

    return blogs;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getBlog = async (id: string) => {
  try {
    const blog = await client.fetch(
      groq`*[_type == "post" && _id == "${id}"]{
        _id,
        title,
        description,
        content,
        tags,
        'category': category->{
          ...,
          image{
            asset->{
              url,
              metadata
            },
            hotspot,
            crop
          }
        },
        'author': author->{
          ...,
          image{
            asset->{
              url,
              metadata
            },
            hotspot,
            crop
          }
        },          
        image[]{
          _key,
          asset->{
            url,
            metadata
          },
          hotspot,
          crop
        }
        }[0]`
    );

    const relatableBlog = await client.fetch(
      groq`${buildQuery({
        type: "post",
        category: blog.category.slug.current,
      })}{
        _id,
        title,
        description,
        tags,
        'category': category->{
          ...,
          image{
            asset->{
              url,
              metadata
            },
            hotspot,
            crop
          }
        },
        'author': author->{
          ...,
          image{
            asset->{
              url,
              metadata
            },
            hotspot,
            crop
          }
        },
        image[]{
          _key,
          asset->{
            url,
            metadata
          },
          hotspot,
          crop
        }
        }`
    );

    return {blog, relatableBlog};
  } catch (error: any) {
    throw new Error(error);
  }
};
