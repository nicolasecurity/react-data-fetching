import { useEffect, useState } from "react"
import axios from 'axios';
import { useFetch } from "./hooks/useFetch";

type Repository = {
  full_name: string;
  description: string;
}


function App() {

  const { data: repositories, isFetching } = useFetch<Repository[]>('nicolasecurity/repos');

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {repositories?.map(repo => {
        return( 
          <li key={repo.full_name}>
            <strong>
              {repo.full_name}
            </strong>
            <p>
              {repo.description}
            </p>
          </li>
        )
      })}
    </ul>
  )
}

export default App
