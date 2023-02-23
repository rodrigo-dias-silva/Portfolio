import { GithubLogo, Globe } from "phosphor-react";

import { api } from '../services/api'
import baseImg from '../assets/imgCards/withoutImg.png'

interface CardProps {
  id: number;
  projectName: string;
  description: string;
  linkRepo: string;
  linkOnLine?: string;
}

export default function Card(props: CardProps) {

  const ObjCard = api.filter(obj => obj.id === props.id)
  const ImgCard = ObjCard.find(img => img.img)
  const nameCard = ObjCard.find(name => name.name)

  return (
    <div className="flex flex-col gap-5 max-w-sm flex-1 justify-center items-center rounded bg-slate-800 overflow-hidden">
      <div className="flex justify-center items-center hover:animate-pulse h-60 bg-black">
        <img src={ImgCard ? ImgCard.img : baseImg} alt={`Imagem do projeto ${props.projectName}`} className="h-full min-w-full max-w-none" />
      </div>
      <div className="px-5 flex flex-col flex-1 gap-3">
        <div className="flex flex-col gap-3 h-40">
          <span className="text-lg">{nameCard ? nameCard.name : props.projectName}</span>
          <span className="font-thin text-ellipsis overflow-hidden">{props.description}</span>
        </div>
        <div className="flex gap-5 pb-5">
          <a href={props.linkRepo}
            target="_blank"
            className="flex gap-2 hover:text-cyan-600"
          >
            <GithubLogo size={24} weight="thin" />
            <span>Repositório</span>
          </a>
          {
            props.linkOnLine ?
              (
                <a href={props.linkOnLine}
                  className='flex gap-2 hover:text-cyan-600'
                  target="_blank"
                >
                  <Globe size={24} weight="thin" />
                  <span>On-line</span>
                </a>
              ) : (
                <div
                  className='flex gap-2 hover:cursor-not-allowed opacity-40'
                >
                  <Globe size={24} weight="thin" />
                  <span>On-line</span>
                </div>
              )
          }
        </div>
      </div>
    </div >
  )
}
