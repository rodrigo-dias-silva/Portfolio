import Header from "../../components/Header";
import NotFound from './../../components/NotFound';

export default function Error() {
  return (
    <div className="w-full md:max-w-5xl px-6 flex flex-col transition h-screen ">
      <div className="">
        <Header />
      </div>
      <div className="flex flex-col flex-1 w-full justify-center items-center gap-20">
        <div className="md:w-1/2 w-3/4">
          <NotFound />
        </div>
        <div className="flex">
          <span className="md:text-2xl text-lg font-thin text-center">Ops... Não encontramos o que você está procurando.</span>
        </div>
      </div>
    </div>
  )
}
