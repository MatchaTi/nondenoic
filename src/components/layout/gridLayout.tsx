export default function GridLayout() {
  return (
    <div className='absolute left-0 top-0 hidden h-screen w-full snap-start py-8 lg:block'>
      <section className='mx-auto h-full w-full max-w-4xl p-8'>
        <div className='grid h-full grid-cols-2 gap-1 lg:grid-cols-12 lg:grid-rows-12'>
          {Array.from({ length: 144 }, (_, i) => (
            <div key={i} className='border border-light-accent/5'></div>
          ))}
        </div>
      </section>
    </div>
  );
}
