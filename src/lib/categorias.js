import { supabase } from './supabase'

export async function obtenerCategorias() {
  const { data, error } = await supabase.from('categorias').select('*')
  return { data, error }
}

export async function crearCategoria(categoria) {
  const { data, error } = await supabase.from('categorias').insert([categoria]).select()
  return { data: data?.[0], error }
}

export async function actualizarCategoria(id, categoria) {
  const { data, error } = await supabase.from('categorias').update(categoria).eq('id', id).select()
  return { data: data?.[0], error }
}

export async function eliminarCategoria(id) {
  const { error } = await supabase.from('categorias').delete().eq('id', id)
  return { error }
}
