import { supabase } from './supabase'

export async function obtenerProductos() {
  const { data, error } = await supabase.from('productos').select('*')
  return { data, error }
}

export async function crearProducto(producto) {
  const { data, error } = await supabase.from('productos').insert([producto]).select()
  return { data: data?.[0], error }
}

export async function actualizarProducto(id, producto) {
  const { data, error } = await supabase.from('productos').update(producto).eq('id', id).select()
  return { data: data?.[0], error }
}

export async function eliminarProducto(id) {
  const { error } = await supabase.from('productos').delete().eq('id', id)
  return { error }
}
