<template>
  <v-layout class="h-100 d-flex flex-column justify-center align-center">
    <div class="glow">
      <div class="glow-effect l top-0" />
      <div class="glow-effect r t" />
    </div>
    <v-progress-circular v-if="loading" indeterminate />
    <v-container
      v-else
      class="text-center d-flex flex-column justify-center align-center ga-4"
    >
      <div class="image-container">
        <img src="/assets/images/sample.jpg">
      </div>
      <h3>John Doe</h3>
      <h3 style="color: #4b4b4b">Responsável: {{ user.nome }}</h3>
      <v-btn
        class="w-100"
        color="#F8F8F8"
        text="Atualizar dados"
        prepend-icon="mdi-pencil-outline"
      />
      <v-btn
        class="w-100"
        color="#F8F8F8"
        text="Preferências de notificações"
        prepend-icon="mdi-bell-outline"
      />
      <v-btn
        class="w-100"
        color="#F8F8F8"
        text="Desconectar"
        prepend-icon="mdi-exit-to-app"
        to="/login"
        @click="logUserOut()"
      />
      <TheHeader />
    </v-container>
  </v-layout>
</template>

<script lang="ts">
import getUserInfo from "~/utils/api/user/getUserInfo";
import { useAuthStore } from "~/store/auth";

export default defineComponent({
  name: "Profile",
  data() {
    return {
      user: ref({
        nome: "",
        email: "",
      }),
      auth: useAuthStore(),
      loading: ref(false),
    };
  },
  async mounted() {
    this.loading = true;
    this.user = await getUserInfo();
    this.loading = false;
  },
  methods: {
    logUserOut() {
      try {
        this.loading = true;
        this.auth.logUserOut();
      } catch (e) {
        console.error(e);
        this.loading = false;
      }
    },
  },
});
</script>

<style scoped>
.glow-effect {
  position: absolute;
  height: 1px;
  width: 1px;
  opacity: 15%;
  z-index: -1;
  box-shadow:
    0 0 100px 5rem #80d9ff,
    0 0 140px 6rem #009ee0;
}

.glow-effect.r.t {
  top: 0px;
  box-shadow:
    0 0 100px 5rem #e32585,
    0 0 140px 6rem #e858a1;
}

.glow-effect.r {
  right: 5px;
}

.glow-effect.l {
  left: 5px;
}

.v-btn {
  justify-content: flex-start;
  text-align: left;
}

.image-container {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
