<script setup>
import TheSideBar from "@/components/ui/TheSideBar.vue";
import {onMounted, ref} from "vue";
import {useLoginStore} from "@/stores/login.js";

const copyright = ref();

const loginStore = useLoginStore(); // Përdor store-in
const user = loginStore.loggedInUser; // Merr të dhënat e përdoruesit

onMounted(() => {
  if (copyright.value) {
    copyright.value.textContent = new Date().getFullYear();
  }
});
</script>

<template>
  <main>
    <section class="pt-5 pb-5" id="layout"  >
      <div class="user-header-wrapper">
        <!-- Bg image -->
        <div class="user-header-bg"></div>

        <!-- User Info Card -->
        <div class="card user-info-card shadow-sm">
          <div class="d-flex align-items-end justify-content-between">
            <div class="d-flex align-items-center">
              <div class="me-2 user-avatar-wrapper">
                <img src="../../assets/images/rma.jpg"
                     class="avatar-xl rounded-circle border border-4 border-white" alt="avatar"/>
              </div>
              <div class="lh-1">
                <h2 class="mb-2 ">
                  <span>{{ user?.firstName }} {{ user?.surname }} </span>


                  <a href="#" data-bs-toggle="tooltip" title="Beginner">
                    <!-- Ikona SVG -->
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"/>
                      <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"/>
                      <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"/>
                    </svg>
                  </a>
                </h2>
                <p class="mb-0 d-block">{{user.username}}</p>
              </div>
            </div>
            <div>
              <a href="auth/settings" class="btn btn-primary btn-sm d-none d-md-block">Account Setting</a>
            </div>
          </div>
        </div>
      </div>

        <!-- Content -->

        <div class="row mt-0 mt-md-4">
          <div class="col-lg-3 col-md-4 col-12">
            <!-- Side navbar -->
            <!--            <TheSideBar></TheSideBar>-->
            <the-side-bar/>
          </div>
          <!--          <th:block th:insert="${content}"></th:block>-->
          <slot name="content"></slot>
          <router-view/>

        </div>

    </section>
  </main>
  <!-- Footer -->
  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="row align-items-center g-0 border-top py-2">
        <!-- Desc -->
        <div class="col-md-6 col-12 text-center text-md-start">
<span>
©
<span id="copyright">

</span>
Geeks. All Rights Reserved.
</span>
        </div>
        <!-- Links -->
        <div class="col-12 col-md-6">
          <nav class="nav nav-footer justify-content-center justify-content-md-end">
            <a class="nav-link active ps-0" href="#!">Privacy</a>
            <a class="nav-link" href="#!">Terms</a>
            <a class="nav-link" href="#!">Feedback</a>
            <a class="nav-link" href="#!">Support</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>

  <!-- Scroll top -->
  <div class="btn-scroll-top">
    <svg class="progress-square svg-content" width="100%" height="100%" viewBox="0 0 40 40">
      <path
          d="M8 1H32C35.866 1 39 4.13401 39 8V32C39 35.866 35.866 39 32 39H8C4.13401 39 1 35.866 1 32V8C1 4.13401 4.13401 1 8 1Z"/>
    </svg>
  </div>

  <!-- Scroll top -->
  <div class="btn-scroll-top">
    <svg class="progress-square svg-content" width="100%" height="100%" viewBox="0 0 40 40">
      <path
          d="M8 1H32C35.866 1 39 4.13401 39 8V32C39 35.866 35.866 39 32 39H8C4.13401 39 1 35.866 1 32V8C1 4.13401 4.13401 1 8 1Z"/>
    </svg>
  </div>
</template>

<style scoped>
#layout{
  margin-left: 90px;
}
.user-header-wrapper {
  position: relative;
  margin-top: -30px;
  margin-left: 3px;
  margin-right: 120px;
}

.user-header-bg {
  background: url('../../assets/images/background-profile.jpg') no-repeat center center;
  background-size: cover;
  height: 180px;
  width: 100%;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

 .user-info-card {
     margin-top: -50px; /* e ngre kartelën lart në foto */
     padding-top: 1rem;
     padding-bottom: 1rem;

     border-bottom-left-radius: 0.5rem;
     border-bottom-right-radius: 0.5rem;
}

.user-avatar-wrapper {
  position: relative;
  margin-top: -10px;
   /* e zhvendos foton sipër kartelës */
}

</style>