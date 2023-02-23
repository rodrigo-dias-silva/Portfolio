import { useEffect, useState } from "react"
import axios from "axios"

import Card from "../../components/Card"
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface Repository {
  id: number;
  name: string;
  description: string;
  homepage?: string;
  html_url: string;
}

export default function Projects() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  const url = 'https://api.github.com/users/rodrigo-c-dias-silva/repos'

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setRepositories(response.data)
      });
  }, [])

  return (
    <div className="w-full max-w-5xl px-6 flex flex-col">
      <Header />
      <section className="flex flex-col py-10 mb-20 w-full transition">
        <div className="mb-5 px-5">
          <h1 className="text-2xl font-medium">Projetos</h1>
        </div>
        <div>
          <div className="md:grid md:grid-cols-3 flex flex-col w-full gap-5">
            {
              repositories.map(repo => {
                return (
                  <Card
                    key={repo.id}
                    id={repo.id}
                    projectName={repo.name}
                    description={repo.description}
                    linkRepo={repo.html_url}
                    linkOnLine={repo.homepage}
                  />
                )
              })
            }
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
