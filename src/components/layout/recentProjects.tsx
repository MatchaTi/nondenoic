import { Source_Code_Pro } from 'next/font/google';
import Image from 'next/image';
import KalkulatorKesehatan from '../../../public/images/kalkulator-kesehatan-project.png';
import Nondenoic from '../../../public/images/nondenoic-project.png';
import Roselia from '../../../public/images/roselia-theme-project.png';

const sourceCode = Source_Code_Pro({ subsets: ['latin'] });

export default function RecentProjects() {
  return (
    <section className='mx-auto mt-20 min-h-screen w-full max-w-7xl px-8 pb-20 lg:h-full'>
      <div className='grid gap-4 lg:grid-cols-3'>
        <h2 className={`${sourceCode.className} text-4xl font-semibold sm:text-5xl md:text-6xl xl:text-7xl`}>
          Recent Projects.
        </h2>
        <p className='leading-relaxed text-neutral-500 lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:max-w-2xl lg:self-center lg:justify-self-end lg:text-center'>
          Melalui proyek-proyek terbaru ini, saya terus mengembangkan keterampilan saya dan menggali lebih dalam dalam
          bidang yang saya minati. Saya bangga dapat berkontribusi pada pencapaian tujuan proyek dan menghadirkan solusi
          yang membawa manfaat bagi pengguna. Saya berharap bahwa proyek-proyek ini dapat memberikan gambaran tentang
          kemampuan dan potensi saya dalam menghadapi tantangan proyek mendatang.
        </p>
        <a
          href='https://kalkulator-kesehatan.netlify.app/'
          target={'_blank'}
          className='clipped-container aspect-video w-full overflow-hidden rounded-lg lg:row-start-2'
        >
          <div
            className={`${sourceCode.className} clipped bg-neutral-900/5 text-xl font-semibold text-white duration-300 ease-in-out`}
          >
            Kalkulator Kesehatan
          </div>
          <Image
            src={KalkulatorKesehatan}
            alt='Kalkulator Kesehatan'
            width={720}
            height={720}
            className='h-full w-full rounded-lg object-cover'
          />
        </a>
        <div className='clipped-container aspect-video w-full overflow-hidden rounded-lg lg:col-start-2 lg:row-start-3'>
          <a
            href='/'
            className={`${sourceCode.className} clipped bg-neutral-900/5 text-xl font-semibold text-white duration-300 ease-in-out`}
          >
            Nondenoic
          </a>
          <Image
            src={Nondenoic}
            alt='Nondenoic Portfolio'
            width={720}
            height={720}
            className='h-full w-full rounded-lg object-cover'
          />
        </div>
        <a
          href='https://marketplace.visualstudio.com/items?itemName=TehMatcha.roselia-theme'
          target={'_blank'}
          className='clipped-container aspect-video w-full overflow-hidden rounded-lg lg:col-start-3 lg:row-start-4'
        >
          <div
            className={`${sourceCode.className} clipped bg-neutral-900/5 text-xl font-semibold text-white duration-300 ease-in-out`}
          >
            Roselia VSCode Theme
          </div>
          <Image
            src={Roselia}
            alt='Roselia VSCode Theme'
            width={720}
            height={720}
            className='h-full w-full rounded-lg object-cover'
          />
        </a>
        <div className='row-start-3 hidden rounded-lg border border-neutral-200 lg:block'></div>
        <div className='row-start-4 hidden rounded-lg border border-neutral-200 lg:block'></div>
        <div className='col-start-2 row-start-4 hidden rounded-lg border border-neutral-200 lg:block'></div>
      </div>
    </section>
  );
}
