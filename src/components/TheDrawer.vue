<template functional>
  <div class="column is-4-tablet is-3-desktop is-2-widescreen drawer-container">
    <nav class="menu">
      <p class="menu-label">Menu</p>

      <ul class="menu-list">
        <li>
          <router-link to="/" tag="a" exact-active-class="is-active">
            <span class="icon">
              <font-awesome-icon icon="envelope" />
            </span>
            Inicio
          </router-link>
        </li>
        <li>
          <router-link to="/profile" tag="a" exact-active-class="is-active">
            <span class="icon">
              <font-awesome-icon icon="user-circle" />
            </span>
            Perfil
          </router-link>
        </li>
        <li>
          <router-link to="/newMessage" exact-active-class="is-active">
            <span class="icon">
              <font-awesome-icon icon="comment" />
            </span>
            Enviar Mensaje
          </router-link>
        </li>
        <li>
          <router-link to="/messages" tag="a" exact-active-class="is-active">
            <span class="icon">
              <font-awesome-icon icon="inbox" />
            </span>
            Recibidos
          </router-link>
        </li>
        <li>
          <router-link to="/messagesSent" tag="a" exact-active-class="is-active">
            <span class="icon">
              <font-awesome-icon icon="paper-plane" />
            </span>
            Enviados
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "the-drawer"
};
</script>

<style lang="scss">
.menu-list {
  li {
    a {
      display: flex;
      align-items: center;
    }
  }
}
.drawer-container {
  border-right: 1px solid whitesmoke;
}
</style>
