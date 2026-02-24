export default async function confirmAccount(id_usuario: number) {
  const { $api } = useNuxtApp();

  const response = await $api("/usuarios/confirmar", {
    method: "POST",
    body: { id_usuario }
  });

  return response;
}