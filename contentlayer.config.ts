import { defineDocumentType, makeSource } from '@contentlayer/source-files';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    author: { type: 'string', required: true },
    authorImage: { type: 'string', required: true },
    excerpt: { type: 'string', required: true },
    imagePreview: { type: 'string', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/articles/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
});
