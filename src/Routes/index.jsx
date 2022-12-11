import { Routes as RoutesWrapper, Route } from "react-router-dom";
import { Login } from "./../pages/Login";
import { Register } from "./../pages/Register";
import { Dashboard } from "./../pages/Dashboard";
import { Navigate } from "react-router-dom";
import { TechProvider } from "../providers/TechContext";

export function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<TechProvider />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </RoutesWrapper>
  );
}
