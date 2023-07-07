import type { MDXComponents } from 'mdx/types';
import { Source_Code_Pro } from 'next/font/google';
import { Sidebar } from './playground';

const SourceCode = Source_Code_Pro({ subsets: ['latin'] });

export const mdxComponents: MDXComponents = {
  Sidebar,
  pre: ({ children }) => (
    <pre className='overflow-auto rounded-lg border border-white/10 bg-code-editor p-4 text-white'>{children}</pre>
  ),
  code: ({ children }) => <code className={`${SourceCode.className} text-white`}>{children}</code>,
  a: ({ href, children }) => (
    <a href={href} target='_blank'>
      {children}
    </a>
  ),
};
