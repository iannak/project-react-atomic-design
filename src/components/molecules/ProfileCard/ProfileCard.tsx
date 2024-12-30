import { Button } from "../../atoms/Button/Button";
import { Chip } from "../../Chip/Chip";
import { Avatar, Card, Info, Name } from "./ProfileCard.styles";

interface ProfileCardProps {
    name: string;
    imageUrl: string;
    bio: string;
}

export const ProfileCard = ({ name, imageUrl, bio }: ProfileCardProps) => {
     const handleClick = () => {
       alert("Button clicked!");
     };

     const skills = ["React", "TypeScript", "Node.js"];

    return (
      <Card>
        <Avatar src={imageUrl} alt={name} />
        <Name>{name}</Name>
        <Info>{bio}</Info>
        <Info>Skills:
            {skills.map((skill, index) => (
                <Chip key={index} label={skill} />
            ))}
        </Info>
        <Button
          label="Follow"
          onClick={handleClick}
          size="small"
          color="#28a745"
        />
      </Card>
    );
}