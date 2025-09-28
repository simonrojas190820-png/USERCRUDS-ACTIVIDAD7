import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { obtenerCategorias, crearCategoria, actualizarCategoria, eliminarCategoria } from "@/lib/categorias";
import TablaCategorias from "@/components/TablaCategorias";
import FormularioCategoria from "@/components/FormularioCategoria";
import Navegacion from "@/components/Navegacion";
import { Button } from "@/components/ui/button";

export default function CategoriasPage() {
  const [categorias, setCategorias] = useState([]);
  const [modal, setModal] = useState(false);
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    cargarCategorias();
  }, []);

  const cargarCategorias = async () => {
    const { data } = await obtenerCategorias();
    setCategorias(data || []);
  };

  const handleNuevo = () => {
    setEditando(null);
    setModal(true);
  };

  const handleEditar = (categoria) => {
    setEditando(categoria);
    setModal(true);
  };

  const handleEliminar = async (id) => {
    const { error } = await eliminarCategoria(id);
    if (error) {
      toast.error("Error al eliminar categoría");
    } else {
      toast.success("Categoría eliminada correctamente");
      cargarCategorias();
    }
  };

  const handleSubmit = async (datos) => {
    if (editando) {
      const { error } = await actualizarCategoria(editando.id, datos);
      if (error) {
        toast.error("Error al actualizar categoría");
      } else {
        toast.success("Categoría actualizada correctamente");
      }
    } else {
      const { error } = await crearCategoria(datos);
      if (error) {
        toast.error("Error al crear categoría");
      } else {
        toast.success("Categoría creada correctamente");
      }
    }
    setModal(false);
    cargarCategorias();
  };

  return (
    <div className="p-8">
      <Navegacion />
      <h2 className="text-3xl font-bold text-center mb-2">Gestión de Categorías</h2>
      <Button onClick={handleNuevo} className="mb-4">Nueva Categoría</Button>
      <TablaCategorias categorias={categorias} onEditar={handleEditar} onEliminar={handleEliminar} />
      {modal && (
        <FormularioCategoria onSubmit={handleSubmit} initialData={editando} />
      )}
    </div>
  );
}
