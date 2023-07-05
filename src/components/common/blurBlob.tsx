export default function BlurBlob() {
  return (
    <div className='pointer-events-none relative -z-10 w-full'>
      <div className='absolute h-96 w-96 -translate-y-52 rounded-full bg-sky-400/20 blur-3xl'></div>
      <div className='absolute right-0 top-52 h-96 w-96 rounded-full bg-pink-400/20 blur-3xl'></div>
      <div className='absolute bottom-10 right-52 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl'></div>
    </div>
  );
}
