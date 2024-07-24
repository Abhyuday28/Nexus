import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const UserIcon = ({ className, name, img }) => {
  const hasSurname = name.trim()?.split(" ")?.length >= 2;
  return (
    <Avatar>
      <AvatarImage src={img} />
      <AvatarFallback>
        {hasSurname
          ? `${name?.split(" ")[0][0]}${name?.split(" ")[1][0]}`
          : name && name[0]}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserIcon;
