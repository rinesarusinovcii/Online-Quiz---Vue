<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-md shadow-sm mb-4 mb-lg-0 sidenav">
    <!-- Menu -->
    <a class="d-xl-none d-lg-none d-md-none text-inherit fw-bold" href="#">Menu</a>
    <!-- Button -->
    <button
        class="navbar-toggler d-md-none icon-shape icon-sm rounded bg-primary text-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidenav"
        aria-controls="sidenav"
        aria-expanded="false"
        aria-label="Toggle navigation">
      <span class="fe fe-menu"></span>
    </button>
    <!-- Collapse navbar -->
    <div class="collapse navbar-collapse" id="sidenav">
      <div class="navbar-nav flex-column">
        <span class="navbar-header">Subscription</span>
        <ul class="list-unstyled ms-n2 mb-4">
          <!-- Nav item -->
          <li class="nav-item">
            <router-link to="/" class="nav-link">

              <i class="bi bi-grid-fill m-1" ></i>
             Home
            </router-link>
          </li>
          <!-- Nav item -->
          <li class="nav-item">
            <router-link :to="{name:'new-quiz'}" class="nav-link">
              <i class="bi bi-plus-circle m-1"></i>
              Create Quiz
            </router-link>
          </li>
          <!-- Nav item -->
          <li class="nav-item">
            <router-link :to="{name:'quiz'}" class="nav-link">
              <i class="bi bi-card-list m-1"></i>
             All Quizzes
            </router-link>
          </li>
          <!-- Nav item -->
          <li class="nav-item">
            <router-link :to="{name:'question'}" class="nav-link">
              <i class="bi bi-list-check m-1"></i>
              <span>All Question</span>
            </router-link>
          </li>
          <!-- Nav item -->
          <li class="nav-item active">
            <a class="nav-link" href="student-quiz.html">
              <i class="fe fe-help-circle nav-icon"></i>
              My Quiz Attempt
            </a>
          </li>
        </ul>
        <!-- Navbar header -->
        <span class="navbar-header">

          Account Settings</span>
        <ul class="list-unstyled ms-n2 mb-0">
          <!-- Nav item -->
          <li class="nav-item">
            <a class="nav-link" href="edit-profile">
              <i class=" fe fe-settings nav-icon"></i>
            Edit Profile
            </a>
          </li>
          <!-- Nav item -->
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="fe fe-trash nav-icon"></i>
              Delete Profile
            </a>
          </li>
          <!-- Nav item -->
          <li class="nav-item">
            <a class="nav-link" href="security.html">
              <i class="fe fe-user nav-icon"></i>
              Security
            </a>
          </li>
          <!-- Nav item -->
          <li class="nav-item">
            <a class="nav-link" href="social-profile.html">
              <i class="fe fe-refresh-cw nav-icon"></i>
              Social Profiles
            </a>
          </li>
          <!-- Nav item -->
          <li class="nav-item">
            <a class="nav-link" href="notifications.html">
              <i class="fe fe-bell nav-icon"></i>
              Notifications
            </a>
          </li>
          <!-- Nav item -->
          <li class="nav-item">
            <a class="nav-link" href="profile-privacy.html">
              <i class="fe fe-lock nav-icon"></i>
              Profile Privacy
            </a>
          </li>
          <!-- Nav item -->

          <!-- Nav item -->
          <li class="nav-item">
            <a class="nav-link" href="linked-accounts.html">
              <i class="fe fe-user nav-icon"></i>
              Linked Accounts
            </a>
          </li>
          <!-- Nav item -->
          <!--                                    <li class="nav-item">-->
          <!--                                        <a class="nav-link" th:href="@{/logout}">-->
          <!--                                            <i class="fe fe-power nav-icon"></i>-->
          <!--                                            Sign Out-->
          <!--                                        </a>-->
          <!--                                    </li>-->
          <form>
            <!--            <button class="dropdown-item" type="submit" formaction="/logout" formmethod="post">Log Out</button>-->
          </form>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>