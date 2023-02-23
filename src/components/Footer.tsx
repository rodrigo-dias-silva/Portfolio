import { Envelope, LinkedinLogo, GithubLogo, InstagramLogo, WhatsappLogo } from 'phosphor-react'

export default function Footer() {
  return (
    <footer className="w-full items-center justify-center h-28 transition">
      <div className="py-5 border-b-2 border-slate-800">
        <ul className="flex items-center justify-center gap-10 md:text-lg font-thin md:font-normal">
          <li><a href="/" className='hover:text-teal-500'>Início</a></li>
          <li><a href="/#about" className='hover:text-teal-500'>Sobre</a></li>
          <li><a href="projects" className='hover:text-teal-500'>Projetos</a></li>
          <li><a href="/#contact" className='hover:text-teal-500'>Contato</a></li>
        </ul>
      </div>
      <div className="h-full">
        <div className='h-full'>
          <ul className="h-full flex items-center justify-center gap-5 md:text-3xl text-2xl">
            <li><a href="mailto:diglesilva@icloud.com" className='hover:text-teal-500' target='_blank'><Envelope weight='thin' /></a></li>
            <li><a href="https://bit.ly/3MdLzFi" className='hover:text-teal-500' target='_blank'><LinkedinLogo weight='thin' /></a></li>
            <li><a href="https://bit.ly/3S7kEOm" className='hover:text-teal-500' target='_blank'><GithubLogo weight='thin' /></a></li>
            <li><a href="https://bit.ly/3Mc3bBi" className='hover:text-teal-500' target='_blank'><InstagramLogo weight='thin' /></a></li>
            <li><a href="https://bit.ly/3xy2RXc" className='hover:text-teal-500' target='_blank'><WhatsappLogo weight='thin' /></a></li>
          </ul>
        </div>
      </div>
      <div className="h-10 flex items-center justify-center text-xs font-thin">
        <span>2023 Rodrigo Silva | Todos os direitos reservados.</span>
      </div>
    </footer>
  )
}
