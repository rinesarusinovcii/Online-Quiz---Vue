<script setup>
import TheSideBar from "@/components/ui/TheSideBar.vue";
import {onMounted, ref} from "vue";

const copyright = ref();
defineProps({
  user: {
    type: Object,
    required: true,
    default: () => ({
      name: '',
      surname: '',
      username: '',
      avatarUrl: '/assets/images/default-avatar.png'
    })
  }
})

onMounted(() => {
  if (copyright.value) {
    copyright.value.textContent = new Date().getFullYear();
  }
});
</script>

<template>
  <main>
    <section class="pt-5 pb-5">
      <div class="container">
        <!-- User info -->
        <div class="row align-items-center">
          <div class="col-xl-12 col-lg-12 col-md-12 col-12">
            <!-- Background -->
            <div class="rounded-top"
                 style="background: url(../../assets/images/background-profile.jpg) no-repeat; background-size: cover;"
            ></div>

            <!-- Card -->
            <div class="card px-4 pt-2 pb-4 shadow-sm rounded-top-0 rounded-bottom-0 rounded-bottom-md-2">
              <div class="d-flex align-items-end justify-content-between">
                <div class="d-flex align-items-center">
                  <!-- Optional Avatar -->
                  <!-- <div class="me-2 position-relative d-flex justify-content-end align-items-end mt-n5">
                    <img :src="user.avatarUrl" class="avatar-xl rounded-circle border border-4 border-white" alt="avatar"/>
                  </div> -->

                  <!-- User Info -->
                  <div class="lh-1">
                    <h2 class="mb-0">
                      {{ user.name }} {{ user.surname }}
                      <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Beginner">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                          <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                          <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                        </svg>
                      </a>
                    </h2>
                    <p class="mb-0 d-block">@{{ user.username }}</p>
                  </div>
                </div>

                <!-- Settings Button -->
                <div>
                  <RouterLink to="/auth/settings" class="btn btn-primary btn-sm d-none d-md-block">
                    Account Setting
                  </RouterLink>
                </div>
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

</style>