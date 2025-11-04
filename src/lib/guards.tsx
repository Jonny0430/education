import { Spinner, Center } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";
import { selectAuth, selectIsAdmin } from "../store/auth/auth.slice";


export function RequireAdmin({ children }: { children: React.ReactNode }) {
  const { status, data } = useAppSelector(selectAuth);
  const isAdmin = useAppSelector(selectIsAdmin);

  console.log("GUARD", { status, hasToken: !!data?.token, memberType: data?.memberType });

  if (status === "idle" || status === "loading") {
    return (
      <Center w="100%" h="70vh">
        <Spinner size="lg" />
      </Center>
    );
  }

  if (!data?.token) return <Navigate to="/login" replace />;
  if (!isAdmin) return <Navigate to="/profile" replace />;

  return <>{children}</>;
}
