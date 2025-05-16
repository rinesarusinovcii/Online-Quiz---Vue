<template>
  <div class="d-flex align-items-center justify-content-center vh-100 bg-light-gradient text-center">
    <div>
      <h1 class="display-1 fw-bold text-primary">404</h1>
      <p class="lead text-secondary">Faqja që po kërkoni nuk ekziston.</p>
      <p class="text-muted">Ju lutem kontrolloni adresën ose kthehuni në faqen kryesore.</p>
      <router-link to="/" class="btn btn-primary mt-3">
        Kthehu në kryefaqe
      </router-link>
    </div>
  </div>
</template>

<style scoped>
/* Shtojmë pak animacion të butë për efekt vizual */
h1 {
  animation: pop 0.6s ease;
}

@keyframes pop {
  0% {
    transform: scale(0.7);
    opacity: 0.3;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
