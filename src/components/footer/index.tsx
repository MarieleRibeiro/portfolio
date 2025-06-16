import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Container, Contacts } from "./styles";

export function MediaContacts() {
  return (
    <Container>
      <Contacts>
        <a
          id="github"
          href="https://github.com/MarieleRibeiro"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          id="linkedin"
          href="https://www.linkedin.com/in/mariele-ribeiro/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
      </Contacts>
    </Container>
  );
}
