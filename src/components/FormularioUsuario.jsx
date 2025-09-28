import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function FormularioUsuario({ onSubmit, initialData }) {
  const [nombre, setNombre] = useState(initialData?.nombre || "");
  const [email, setEmail] = useState(initialData?.email || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nombre, email });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg bg-white shadow-md max-w-md mx-auto">
      <Input
        type="text"
        placeholder="Nombre de usuario"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
        className="mb-2"
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="mb-2"
      />
      <Button type="submit" className="w-full">Guardar</Button>
    </form>
  );
}
