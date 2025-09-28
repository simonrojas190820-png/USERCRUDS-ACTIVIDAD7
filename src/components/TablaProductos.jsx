import { Table } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import React from "react";

export default function TablaProductos({ productos, onEditar, onEliminar }) {
  return (
    <Table className="w-full border rounded-lg bg-white shadow-md">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2">ID</th>
          <th className="p-2">Nombre</th>
          <th className="p-2">Descripción</th>
          <th className="p-2">Precio</th>
          <th className="p-2">Categoría</th>
          <th className="p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos?.map((producto) => (
          <tr key={producto.id} className="border-b">
            <td className="p-2">{producto.id}</td>
            <td className="p-2">{producto.nombre}</td>
            <td className="p-2">{producto.descripcion}</td>
            <td className="p-2">{producto.precio}</td>
            <td className="p-2">{producto.categoria_id}</td>
            <td className="p-2 space-x-2">
              <Button size="sm" variant="outline" onClick={() => onEditar(producto)}>Editar</Button>
              <Button size="sm" variant="destructive" onClick={() => onEliminar(producto.id)}>Eliminar</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
