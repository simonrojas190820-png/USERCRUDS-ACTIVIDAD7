import { Table } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import React from "react";

export default function TablaRoles({ roles, onEditar, onEliminar }) {
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
        {roles?.map((role) => (
          <tr key={role.id} className="border-b">
            <td className="p-2">{role.id}</td>
            <td className="p-2">{role.nombre}</td>
            <td className="p-2 space-x-2">
              <Button size="sm" variant="outline" onClick={() => onEditar(role)}>Editar</Button>
              <Button size="sm" variant="destructive" onClick={() => onEliminar(role.id)}>Eliminar</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
