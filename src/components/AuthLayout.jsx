import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthLayout({ children, authentication = true }) {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authentication && !authStatus) {
      navigate("/login");
    } else if (!authentication && authStatus) {
      navigate("/");
    }
    setLoading(false);
  }, [authStatus, authentication, navigate]);

  return loading ? <h1>Loading...</h1> : <>{children}</>;
}

export default AuthLayout;
