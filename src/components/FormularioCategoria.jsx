import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function FormularioCategoria({ onSubmit, initialData }) {
  const [nombre, setNombre] = useState(initialData?.nombre || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nombre });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg bg-white shadow-md max-w-md mx-auto">
      <Input
        type="text"
        placeholder="Nombre de la categoría"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
        className="mb-2"
      />
      <Button type="submit" className="w-full">Guardar</Button>
    </form>
  );
}
