import { supabase } from './supabase'

export async function obtenerRoles() {
  const { data, error } = await supabase.from('roles').select('*')
  return { data, error }
}

export async function crearRole(role) {
  const { data, error } = await supabase.from('roles').insert([role]).select()
  return { data: data?.[0], error }
}

export async function actualizarRole(id, role) {
  const { data, error } = await supabase.from('roles').update(role).eq('id', id).select()
  return { data: data?.[0], error }
}

export async function eliminarRole(id) {
  const { error } = await supabase.from('roles').delete().eq('id', id)
  return { error }
}
