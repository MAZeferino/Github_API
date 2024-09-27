import { React } from "react";
import { Container, Sidebar, Main} from "./styles";
import Profile from "../../components/Profile/profile";
import Filter from "../../components/Filter/filter";
import Repositories from "../../components/Repositories/repositories";

export default function RepositoriesPage() {

  const user= {
    login: '',
    avatar_url: '',
    followers: 0,
    following: 0,
    company: null,
    blog: '',
    location: ''
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user}/>
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
}
