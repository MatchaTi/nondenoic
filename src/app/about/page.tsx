import TechnicalSkills from '@/components/common/technicalSkills';
import { myProjects } from '@/libs/data';
import { Source_Code_Pro } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillCalendar } from 'react-icons/ai';
import AuthorImage from '../../../public/images/author-AdiIfai.png';

const SourceCode = Source_Code_Pro({ subsets: ['latin'] });

const code = `4  /*
5  body {
6   min-height: 100vh;
7   display: grid;
8   place-items: center;
9  }
10 */
`;

export default function About() {
  return (
    <>
      <div className='mt-20 overflow-hidden border-y border-dark-accent/10 dark:border-light-accent/5'>
        <section className='mx-auto w-full max-w-7xl p-4'>
          <div className='flex flex-col flex-wrap gap-10 sm:flex-row sm:flex-nowrap sm:gap-20 lg:gap-24 lg:px-4'>
            <div>
              <div className='mx-auto h-60 w-40 overflow-hidden rounded-lg sm:mx-0 md:h-80 md:w-60 lg:h-[400px] lg:w-80'>
                <Image src={AuthorImage} alt='Author Adi Ifai' className='h-full w-full object-cover' />
              </div>
            </div>
            <div>
              <h1 className='mb-4 w-full text-xl font-bold sm:text-3xl xl:text-5xl'>Adi Muhammad Syifai</h1>
              <div className='mb-4 flex flex-wrap items-center gap-4'>
                <div className='bg-base-secondary w-fit rounded-full border border-dark-accent/10 px-4 py-2 font-semibold dark:border-light-accent/5'>
                  Front End Developer
                </div>
                <div className='flex items-center gap-2'>
                  <span>
                    <AiFillCalendar />
                  </span>
                  <span className='font-medium'>Starting journey Juny, 26 2022</span>
                </div>
              </div>
              <p className='mb-4 opacity-80'>
                Saya adalah seorang front-end developer dengan kecintaan terhadap web design dan web styling, saya
                memiliki pengetahuan mendalam tentang HTML, CSS, dan JavaScript yang membuat saya mampu untuk
                mengimplementasikan desain dan membangun antarmuka web yang konsisten dan responsif. Saya senang
                berkreasi dalam menggabungkan komponen visual yang menarik dengan interaksi yang halus. Dalam setiap
                proyek, saya berupaya untuk menciptakan tampilan web yang menarik, modern, dan fungsional untuk
                meningkatkan kepuasan pengguna.
              </p>
              <div className='w-fit'>
                <TechnicalSkills />
              </div>
            </div>
          </div>
        </section>
        <div className='overflow-hidden border-t border-dark-accent/10 dark:border-light-accent/5'>
          <section className='mx-auto w-full max-w-7xl p-4'>
            <div className='flex flex-col flex-wrap gap-10 sm:flex-row sm:flex-nowrap sm:gap-20 lg:gap-24 lg:px-4'>
              <div className='hidden lg:block'>
                <div className='h-60 w-40 md:h-80 md:w-60 lg:h-[400px] lg:w-80'>
                  <div className='opacity-40'>1</div>
                  <div className='opacity-40'>2</div>
                  <div className='opacity-40'>3</div>
                  <div>
                    <pre className={SourceCode.className}>{code}</pre>
                  </div>
                  <div className='opacity-40'>11</div>
                  <div className='opacity-40'>12</div>
                  <div className='opacity-40'>13</div>
                </div>
              </div>
              <div className='w-full'>
                <h2 className='bg-base-secondary mb-4 rounded-lg border border-dark-accent/10 p-4 font-semibold dark:border-light-accent/5 sm:text-xl xl:text-2xl'>
                  My Project Timeline
                </h2>
                <ul>
                  {myProjects.map(({ date, title, desc, href, imagePreview, anchor, techStack }, i) => (
                    <li key={i} className=''>
                      <div>
                        <div className='flex items-center gap-6'>
                          <div className='h-4 w-4 -translate-x-[7px] rounded-full bg-light-text dark:bg-dark-text'></div>
                          <div className='font-semibold'>{date}</div>
                        </div>
                        {anchor ? (
                          <a href={href} target='_blank'>
                            <div className='flex flex-col gap-4 border-l-2 border-light-text py-2 pl-10 dark:border-dark-text sm:flex-row'>
                              <div>
                                <div className='h-40 w-40 overflow-hidden rounded'>
                                  <Image src={imagePreview} alt={title} width={160} height={160} />
                                </div>
                              </div>
                              <div>
                                <h3 className='text-lg font-semibold'>{title}</h3>
                                <p className='mb-2 opacity-80'>{desc}</p>
                                <div className='mb-2 font-medium'>Tech Stack:</div>
                                {techStack}
                              </div>
                            </div>
                          </a>
                        ) : (
                          <Link href={href}>
                            <div className='flex flex-col gap-4 border-l-2 border-light-text py-2 pl-10 dark:border-dark-text sm:flex-row'>
                              <div>
                                <div className='h-40 w-40 overflow-hidden rounded'>
                                  <Image src={imagePreview} alt={title} width={160} height={160} />
                                </div>
                              </div>
                              <div>
                                <h3 className='text-lg font-semibold'>{title}</h3>
                                <p className='mb-2 opacity-80'>{desc}</p>
                                <div className='mb-2 font-medium'>Tech Stack:</div>
                                {techStack}
                              </div>
                            </div>
                          </Link>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
