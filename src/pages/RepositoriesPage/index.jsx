import { React } from "react";
import { Container, Sidebar, Main} from "./styles";
import Profile from "../../components/Profile/profile";
import Filter from "../../components/Filter/filter";

export default function RepositoriesPage() {

  return (
    <Container>
        <Sidebar>
            <Profile />
            <Filter />
        </Sidebar>
        <Main>
            main
        </Main>
    </Container>
  );
}
