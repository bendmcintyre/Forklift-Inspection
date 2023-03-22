import React from 'react';
import {
  Link,
  useNavigate,
} from 'react-router-dom';
import { useAuth } from 'features/authentication';

export function Logout() {
  const navigate = useNavigate();
  const auth = useAuth();

  React.useEffect(() => {
    auth.signOut(() => {
      navigate('/', { replace: true });
    });
  });

  return (
    <Link to="/">
      Click here if you&apos;re not automatically redirected.
    </Link>
  );
}

export default Logout;
