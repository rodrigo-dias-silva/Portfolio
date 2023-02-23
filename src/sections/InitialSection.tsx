import DevAnimation from '../components/DevAnimation'

export default function InitialSection() {
  return (
    <section className='flex items-center py-10 w-full'>
      <div className='flex-1 px-5 text-3xl'>
        <p>Oi,</p>
        <p>meu nome é</p>
        <h1 className='text-6xl font-bold text-teal-400'>Rodrigo</h1>
        <p className='mt-5 text-2xl font-thin'>Sou desenvolvedor </p>
        <p className='text-2xl font-thin'>front-end <span className='text-teal-400'>web</span> e <span className='text-teal-400'>mobile</span>.
        </p>
      </div>
      <div className="flex-1 pr-5 md:flex hidden">
        <DevAnimation />
      </div>
    </section>
  )
}
