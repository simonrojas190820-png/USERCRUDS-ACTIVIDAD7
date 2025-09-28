import Link from "next/link";

export default function Navegacion() {
  return (
    <nav style={{ marginBottom: 20 }}>
      <Link href="/roles" style={{ marginRight: 10 }}>Roles</Link>
      <Link href="/permisos" style={{ marginRight: 10 }}>Permisos</Link>
      <Link href="/productos" style={{ marginRight: 10 }}>Productos</Link>
      <Link href="/categorias" style={{ marginRight: 10 }}>Categorías</Link>
    </nav>
  );
}
