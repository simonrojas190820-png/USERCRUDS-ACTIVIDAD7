import { supabase } from './supabase'

export async function obtenerPermisos() {
  const { data, error } = await supabase.from('permisos').select('*')
  return { data, error }
}

export async function crearPermiso(permiso) {
  const { data, error } = await supabase.from('permisos').insert([permiso]).select()
  return { data: data?.[0], error }
}

export async function actualizarPermiso(id, permiso) {
  const { data, error } = await supabase.from('permisos').update(permiso).eq('id', id).select()
  return { data: data?.[0], error }
}

export async function eliminarPermiso(id) {
  const { error } = await supabase.from('permisos').delete().eq('id', id)
  return { error }
}
