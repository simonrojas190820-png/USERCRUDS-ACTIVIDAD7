import { Table } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import React from "react";

export default function TablaCategorias({ categorias, onEditar, onEliminar }) {
  return (
    <Table className="w-full border rounded-lg bg-white shadow-md">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2">ID</th>
          <th className="p-2">Nombre</th>
          <th className="p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {categorias?.map((categoria) => (
          <tr key={categoria.id} className="border-b">
            <td className="p-2">{categoria.id}</td>
            <td className="p-2">{categoria.nombre}</td>
            <td className="p-2 space-x-2">
              <Button size="sm" variant="outline" onClick={() => onEditar(categoria)}>Editar</Button>
              <Button size="sm" variant="destructive" onClick={() => onEliminar(categoria.id)}>Eliminar</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
