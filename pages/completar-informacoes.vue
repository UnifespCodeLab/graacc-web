<template>
  <v-container class="position-fixed h-100">
    <v-app-bar>
      <template #prepend>
        <v-app-bar-title
          class="font-weight-bold ml-2">Completar Informações</v-app-bar-title>
      </template>
    </v-app-bar>
    <v-main>
      <v-text-field
        v-model="formUser.nomeResponsavel"
        prepend-inner-icon="mdi-account-outline"
        label="Nome do(a) responsável"
        />
        <v-text-field 
        v-model="formUser.idPaciente"
        prepend-inner-icon="mdi-card-account-details-outline"
        label="ID do(a) paciente" 
        />
      <v-btn 
        class="w-100 mb-5"
        >Finalizar</v-btn>
    </v-main>
  </v-container>
</template>

<script lang="ts" setup>
import { useAuthStore } from "~/store/auth";

const auth = useAuthStore();
const { user } = storeToRefs(auth);

const formUser = {
  nomeResponsavel: user.value.nome as string,
  idPaciente: null
};

</script>
