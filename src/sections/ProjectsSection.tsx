import { Link } from "react-router-dom";
import Card from "../components/Card";
import { ProjectSectionApi } from '../services/api'

export default function ProjectsSection() {
  const infoCard = ProjectSectionApi

  return (
    <section id="project" className="flex flex-col py-10 w-full transition">
      <div>
        <div className="mb-5 px-5">
          <h2 className="md:text-2xl text-xl font-medium">Projetos</h2>
        </div>
        <div className="flex gap-10 px-5">
          <div className="font-thin flex-1">
            <p className="pb-3">Atualmente uso as seguintes tecnologias em meus projetos: <span className="text-teal-400 font-normal">HTML, CSS, JavaScript, TypeScript, React, React Native</span> e <span className="text-teal-400 font-normal">Tailwind</span>.</p>
            <p>Aqui estão alguns dos meus projetos:</p>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="flex md:flex-row md:justify-center md:items-center flex-col w-full gap-5 md:text-base text-sm">
          {
            infoCard.map(card => {
              return (
                <Card
                  key={card.id}
                  id={card.id}
                  projectName={card.project}
                  description={card.description}
                  linkRepo={card.linkRepo}
                  linkOnLine={card.linkOnline}
                />
              )
            })
          }
        </div>
      </div>
      <div className="mt-5 w-full flex items-center justify-center">
        <Link to={'/projects'} className="bg-teal-400 rounded text-slate-800 py-3 px-4 hover:bg-teal-300">
          <span className="font-medium">Ver todos os projetos</span>
        </Link>
      </div>
    </section>
  )
}
