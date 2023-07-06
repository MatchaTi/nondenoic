export default function BlurBlob() {
  return (
    <div className='pointer-events-none fixed inset-0 -z-10 w-full'>
      <div className='absolute top-20 h-96 w-96 -translate-y-52 rounded-full bg-sky-400/20 blur-3xl'></div>
      <div className='absolute right-96 h-96 w-96 -translate-y-52 rounded-full bg-blue-400/20 blur-3xl'></div>
      <div className='absolute right-0 top-52 h-96 w-96 rounded-full bg-pink-400/20 blur-3xl'></div>
      <div className='absolute bottom-10 right-1/2 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl'></div>
    </div>
  );
}
