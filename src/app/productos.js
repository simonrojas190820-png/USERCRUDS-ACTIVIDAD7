import React, { useState, useEffect } from "react";
import { obtenerProductos, crearProducto, actualizarProducto, eliminarProducto } from "@/lib/productos";
import TablaProductos from "@/components/TablaProductos";
import FormularioProducto from "@/components/FormularioProducto";
import Navegacion from "@/components/Navegacion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function ProductosPage() {
  const [productos, setProductos] = useState([]);
  const [modal, setModal] = useState(false);
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    const { data } = await obtenerProductos();
    setProductos(data || []);
  };

  const handleNuevo = () => {
    setEditando(null);
    setModal(true);
  };

  const handleEditar = (producto) => {
    setEditando(producto);
    setModal(true);
  };

  const handleEliminar = async (id) => {
    const { error } = await eliminarProducto(id);
    if (error) {
      toast.error("Error al eliminar producto");
    } else {
      toast.success("Producto eliminado correctamente");
      cargarProductos();
    }
  };

  const handleSubmit = async (datos) => {
    if (editando) {
      const { error } = await actualizarProducto(editando.id, datos);
      if (error) {
        toast.error("Error al actualizar producto");
      } else {
        toast.success("Producto actualizado correctamente");
      }
    } else {
      const { error } = await crearProducto(datos);
      if (error) {
        toast.error("Error al crear producto");
      } else {
        toast.success("Producto creado correctamente");
      }
    }
    setModal(false);
    cargarProductos();
  };

  return (
    <div className="p-8">
      <Navegacion />
      <h2 className="text-3xl font-bold text-center mb-2">Gestión de Productos</h2>
      <Button onClick={handleNuevo} className="mb-4">Nuevo Producto</Button>
      <TablaProductos productos={productos} onEditar={handleEditar} onEliminar={handleEliminar} />
      {modal && (
        <FormularioProducto onSubmit={handleSubmit} initialData={editando} />
      )}
    </div>
  );
}
