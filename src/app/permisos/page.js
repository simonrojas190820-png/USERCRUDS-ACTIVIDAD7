"use client";
import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { obtenerPermisos, crearPermiso, actualizarPermiso, eliminarPermiso } from "@/lib/permisos";
import TablaPermisos from "@/components/TablaPermisos";
import FormularioPermiso from "@/components/FormularioPermiso";
import Navegacion from "@/components/Navegacion";
import { Button } from "@/components/ui/button";

export default function PermisosPage() {
  const [permisos, setPermisos] = useState([]);
  const [modal, setModal] = useState(false);
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    cargarPermisos();
  }, []);

  const cargarPermisos = async () => {
    const { data } = await obtenerPermisos();
    setPermisos(data || []);
  };

  const handleNuevo = () => {
    setEditando(null);
    setModal(true);
  };

  const handleEditar = (permiso) => {
    setEditando(permiso);
    setModal(true);
  };

  const handleEliminar = async (id) => {
    const { error } = await eliminarPermiso(id);
    if (error) {
      toast.error("Error al eliminar permiso");
    } else {
      toast.success("Permiso eliminado correctamente");
      cargarPermisos();
    }
  };

  const handleSubmit = async (datos) => {
    if (editando) {
      const { error } = await actualizarPermiso(editando.id, datos);
      if (error) {
        toast.error("Error al actualizar permiso");
      } else {
        toast.success("Permiso actualizado correctamente");
      }
    } else {
      const { error } = await crearPermiso(datos);
      if (error) {
        toast.error("Error al crear permiso");
      } else {
        toast.success("Permiso creado correctamente");
      }
    }
    setModal(false);
    cargarPermisos();
  };

  return (
    <div className="p-8">
      <Navegacion />
      <h2 className="text-3xl font-bold text-center mb-2">Gestión de Permisos</h2>
      <Button onClick={handleNuevo} className="mb-4">Nuevo Permiso</Button>
      <TablaPermisos permisos={permisos} onEditar={handleEditar} onEliminar={handleEliminar} />
      {modal && (
        <FormularioPermiso onSubmit={handleSubmit} initialData={editando} />
      )}
    </div>
  );
}
