"use client";
import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { obtenerRoles, crearRole, actualizarRole, eliminarRole } from "@/lib/roles";
import TablaRoles from "@/components/TablaRoles";
import FormularioRole from "@/components/FormularioRole";
import Navegacion from "@/components/Navegacion";
import { Button } from "@/components/ui/button";

export default function RolesPage() {
  const [roles, setRoles] = useState([]);
  const [modal, setModal] = useState(false);
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    cargarRoles();
  }, []);

  const cargarRoles = async () => {
    const { data } = await obtenerRoles();
    setRoles(data || []);
  };

  const handleNuevo = () => {
    setEditando(null);
    setModal(true);
  };

  const handleEditar = (role) => {
    setEditando(role);
    setModal(true);
  };

  const handleEliminar = async (id) => {
    const { error } = await eliminarRole(id);
    if (error) {
      toast.error("Error al eliminar rol");
    } else {
      toast.success("Rol eliminado correctamente");
      cargarRoles();
    }
  };

  const handleSubmit = async (datos) => {
    if (editando) {
      const { error } = await actualizarRole(editando.id, datos);
      if (error) {
        toast.error("Error al actualizar rol");
      } else {
        toast.success("Rol actualizado correctamente");
      }
    } else {
      const { error } = await crearRole(datos);
      if (error) {
        toast.error("Error al crear rol");
      } else {
        toast.success("Rol creado correctamente");
      }
    }
    setModal(false);
    cargarRoles();
  };

  return (
    <div className="p-8">
      <Navegacion />
      <h2 className="text-3xl font-bold text-center mb-2">Gestión de Roles</h2>
      <Button onClick={handleNuevo} className="mb-4">Nuevo Rol</Button>
      <TablaRoles roles={roles} onEditar={handleEditar} onEliminar={handleEliminar} />
      {modal && (
        <FormularioRole onSubmit={handleSubmit} initialData={editando} />
      )}
    </div>
  );
}
