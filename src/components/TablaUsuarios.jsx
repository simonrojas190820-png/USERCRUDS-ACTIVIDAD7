import { Table } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import React from "react";

export default function TablaUsuarios({ usuarios, onEditar, onEliminar }) {
  return (
    <Table className="w-full border rounded-lg bg-white shadow-md">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2">Usuario</th>
          <th className="p-2">Email</th>
          <th className="p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {usuarios?.map((usuario) => (
          <tr key={usuario.id} className="border-b">
            <td className="p-2">{usuario.nombre}</td>
            <td className="p-2">{usuario.email}</td>
            <td className="p-2 space-x-2">
              <Button size="sm" variant="outline" onClick={() => onEditar(usuario)}>Editar</Button>
              <Button size="sm" variant="destructive" onClick={() => onEliminar(usuario.id)}>Eliminar</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
