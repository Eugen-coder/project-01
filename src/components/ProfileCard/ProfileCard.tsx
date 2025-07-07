interface Props {
  avatar: string;
  name: string;
  description: string;
};

export default function ProfileCard({ avatar, name, description }: Props) {
  return (
    <div className="profile-card">
      <img src={avatar} alt="User avatar" />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};
