"use client";
type UserCardProps = { email: string };

export const UserCard = (props: UserCardProps) => {
  const { email } = props;
  return <div>User Card: {email}</div>;
};
