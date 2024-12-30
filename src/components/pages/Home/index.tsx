import { ProfileCard } from "../../molecules/ProfileCard/ProfileCard";

export const HomePage = () => {
    return (
        <div>
           <ProfileCard name="John Doe" imageUrl="https://randomuser.me/api/portraits/men/1.jpg" bio="I am a software developer" />
        </div>
    );
};