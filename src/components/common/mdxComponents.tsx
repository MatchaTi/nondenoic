import type { MDXComponents } from 'mdx/types';
import { Source_Code_Pro } from 'next/font/google';

const SourceCode = Source_Code_Pro({ subsets: ['latin'] });

export const mdxComponents: MDXComponents = {
  pre: ({ children }) => (
    <pre className='overflow-auto rounded-lg border border-white/10 bg-code-editor p-4 text-white'>{children}</pre>
  ),
  code: ({ children }) => <code className={`${SourceCode.className}`}>{children}</code>,
};
