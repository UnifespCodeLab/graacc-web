export default async function confirmAccount(email: string) {
  const { $api } = useNuxtApp();
  const token = useCookie("token");

  const response = await $api("/usuarios/confirmar", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
    body: { email }
  });

  return response;
}