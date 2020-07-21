<template>
  <div id="app" class="app-container">
    <div class="sidebar-container">
      <b-menu>
    <b-menu-list label="Menu">
      <b-menu-item icon="information-outline" label="Справочник"></b-menu-item>
      <b-menu-item icon="map-outline" label="Карта" @click="pushToMap"></b-menu-item>
      <!-- <b-menu-item icon="settings" :active="isActive" expanded>
        <template slot="label" slot-scope="props">
          Administrator
          <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
        </template>
        <b-menu-item icon="account" label="Users"></b-menu-item>
        <b-menu-item icon="cellphone-link">
          <template slot="label">
            Devices
            <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
              <b-icon icon="dots-vertical" slot="trigger"></b-icon>
              <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
              <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
              <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
            </b-dropdown>
          </template>
        </b-menu-item>
        <b-menu-item icon="cash-multiple" label="Payments" disabled></b-menu-item>
      </b-menu-item> -->
      <b-menu-item icon="account" label="Бронирование" @click="pushBooking">
      </b-menu-item>
    </b-menu-list>
    <b-menu-list>
      <b-menu-item label="Expo" icon="link" tag="router-link" target="_blank" to="/expo"></b-menu-item>
    </b-menu-list>
    <b-menu-list label="Actions">
      <b-menu-item label="Logout"></b-menu-item>
    </b-menu-list>
  </b-menu>
             </div>
             <div class="view-container">
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
       open: true,
      overlay: true,
      fullheight: true,
      fullwidth: false,
      right: false,
      reduce: false,
      expandOnHover: false,
      mobile: true
    }
  },
  methods: {
    pushBooking() {
      console.log('Push to booking')
      this.$router.push({path: '/booking'})
    },
    pushToMap() {
        this.$router.push({path: '/'})
    }
  }
}
</script>

<style >
* {
  box-sizing: border-box;
}
.app-container {
  display: flex;
}
/* .sidebar-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
} */

.sidebar-container {
  background-color: white;
  width: 20%;
  height: 100vh;
  /* z-index: 10; */
}

.view-container {
  
  width: 80%;
  height: 100vh;
}
.menu {
  margin-left: 20px;
  margin-top: 30px;
}
</style>
