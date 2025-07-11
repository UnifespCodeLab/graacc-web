import type User from "~/interfaces/user";

export default async function getUserInfo() {
  const { $api } = useNuxtApp();
  const token = useCookie("token");

  const response: User = await $api("/auth/usuario/listar", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  });
  return response;
}
