import classes from './user.module.css';

interface UserProps {
  user?: User;
  navBack: () => void;
}
type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  company: string;
};

export const User = ({ user, navBack }: UserProps) => {
  return (
    <article className={classes.user}>
      <span onClick={navBack}>back to users</span>
      <h1>
        {user?.firstName} {user?.lastName}
      </h1>
    </article>
  );
};
