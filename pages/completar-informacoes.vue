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
        v-model="user.nomeResponsavel"
        prepend-inner-icon="mdi-account-outline"
        label="Nome do(a) responsável"
        />
        <v-text-field 
        v-model="user.idPaciente"
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
const user = {
    nomeResponsavel: "",
    idPaciente: null
};

</script>
