import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function FormularioProducto({ onSubmit, initialData }) {
  const [nombre, setNombre] = useState(initialData?.nombre || "");
  const [descripcion, setDescripcion] = useState(initialData?.descripcion || "");
  const [precio, setPrecio] = useState(initialData?.precio || "");
  const [categoria_id, setCategoriaId] = useState(initialData?.categoria_id || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nombre, descripcion, precio, categoria_id });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg bg-white shadow-md max-w-md mx-auto">
      <Input
        type="text"
        placeholder="Nombre del producto"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
        className="mb-2"
      />
      <Input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        className="mb-2"
      />
      <Input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        required
        className="mb-2"
        min={0}
      />
      <Input
        type="number"
        placeholder="ID Categoría"
        value={categoria_id}
        onChange={(e) => setCategoriaId(e.target.value)}
        required
        className="mb-2"
        min={1}
      />
      <Button type="submit" className="w-full">Guardar</Button>
    </form>
  );
}
