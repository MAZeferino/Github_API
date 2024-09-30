import { React, useState, useEffect } from "react";

import { useParams } from 'react-router-dom'

import { Loading, Container, Sidebar, Main } from "./styles";
import Profile from "../../components/Profile/profile";
import Filter from "../../components/Filter/filter";
import Repositories from "../../components/Repositories/repositories";
import { getLangs } from "../../services/config";
import { getUser, getRepos } from "../../services/api";

export default function RepositoriesPage() {
  const { login } = useParams();

  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [filters, setFilters] = useState();
  const [filter, setFilter] = useState();
  const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    const loadData = async () => {
      const [userResponse, repositoriesResponse] = await Promise.all([
        getUser(login),
        getRepos(login),
      ]);
      
      setUser(userResponse.data);
      setRepositories(repositoriesResponse.data);
      setFilters(getLangs(repositoriesResponse.data));
      setLoading(false);
    };
    
    loadData();
  }, [])


  const onFilterClick = (lang) => {
    setFilter(lang);
  }

  if (loading) {
    return <Loading>Carregando...</Loading>
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter langs={filters} filter={filter} onclick={onFilterClick} />
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} filter={filter} />
      </Main>
    </Container>
  );
}
