import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Contacts } from "../main/styles";
import { Container } from "./styles";

export function MediaContacts() {
  return (
    <Container>
      <Contacts>
        <a
          id="github"
          href="https://github.com/MarieleRibeiro"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={30} />
        </a>
        <a
          id="linkedin"
          href="https://www.linkedin.com/in/mariele-ribeiro/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
      </Contacts>
    </Container>
  );
}
