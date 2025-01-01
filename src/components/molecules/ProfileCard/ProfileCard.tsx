import { Link } from "react-router-dom";
import { Chip } from "../../Chip/Chip";
import {
  ActionsButtons,
  Avatar,
  Card,
  Container,
  Content,
  Info,
  LinkActionsButtons,
  List,
  Name,
} from "./ProfileCard.styles";

interface ProfileCardProps {
  name: string;
  imageUrl?: string;
  bio: string;
}

export const ProfileCard = ({ name, bio }: ProfileCardProps) => {
  return (
    <Container>
      <Card>
        <Avatar
          src="https://img.freepik.com/fotos-premium/pessoa-de-icone-plano-3d-com-smart-pet-id-tag-tech-overlay-para-identificacao-digital-de-animais-de-crianca-em-double-e_980716-306250.jpg?w=740"
          alt={name}
        />
        <Content>
          <Name>{name}</Name>
          <Info>{bio}</Info>
          <Info>
            <Link to="https://www.linkedin.com/in/">Linkedin</Link>
          </Info>
          <Info>Helping with:</Info>
          <List>
            <li>
              <Chip label="React" color="white" backgroundColor="#7370f4" />
            </li>
            <li>
              <Chip
                label="TypeScript"
                color="white"
                backgroundColor="#007acc"
              />
            </li>
            <li>
              <Chip label="Node.js" color="white" backgroundColor="#68a063" />
            </li>
          </List>
        </Content>
        <ActionsButtons>
          <LinkActionsButtons>Book a lector</LinkActionsButtons>
          <LinkActionsButtons>Learn More</LinkActionsButtons>
        </ActionsButtons>
      </Card>
    </Container>
  );
};
