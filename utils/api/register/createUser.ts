import type UserRegister from "~/interfaces/userRegister"

export default async function createUser(user: UserRegister) {
  const { $api } = useNuxtApp()

  const response: User = await $api('/usuarios/cadastrar', {
    method: 'POST',
    body: user,
  })
  return (response)
}
