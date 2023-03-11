import { Envelope, LinkedinLogo, WhatsappLogo } from "phosphor-react";

export default function ContactSection() {
  return (
    <section id="contact" className="flex flex-col py-10 w-full mb-20">
      <div className="mb-5 px-5">
        <h2 className="text-2xl font-medium">Contato</h2>
      </div>
      <div className="flex flex-col gap-2 py-10 px-5">
        <div className="font-thin">
          <span className="">Está precisando de um desenvolvedor?</span>
        </div>
        <div className="flex flex-col gap-5">
          <span className="font-normal text-3xl text-teal-500">
            Vamos trabalhar juntos!
          </span>
          <ul className="flex gap-5">
            <li><a href="https://bit.ly/3xy2RXc" target="_blank" className="hover:text-teal-500"><WhatsappLogo size={50} weight="thin" /></a></li>
            <li><a href="https://bit.ly/3MdLzFi" target="_blank" className="hover:text-teal-500"><LinkedinLogo size={50} weight="thin" /></a></li>
            <li><a href="mailto:diglesilva@icloud.com" target="_blank" className="hover:text-teal-500"><Envelope size={50} weight="thin" /></a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
