import { Routes as RoutesWrapper, Route } from "react-router-dom";
import { Login } from "./../pages/Login";
import { Register } from "./../pages/Register";
import { Dashboard } from "./../pages/Dashboard";

export function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={Dashboard} />
      <Route path="*" element={Dashboard} />
    </RoutesWrapper>
  );
}
