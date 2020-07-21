<template>
  <div class="hello">
    <Map />

    <div class="table-container">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="airport in airports" :key="airport.airport_code">
            <th scope="row">1</th>
            <td>{{ airport.airport_code }}</td>
            <td>{{ airport.airport_name.ru }}</td>
            <td>@{{ airport.timezone }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Map from "../components/Map.vue";

export default {
  name: "Home",
  components: {
    Map,
  },
  data() {
    return {
      airports: [],
    };
  },

  metaInfo: {
    title: "App",
    titleTemplate: "%s | Home",
    meta: [
      {
        name: "description",
        content: "Home page description",
      },
      {
        property: "og:title",
        content: "Home",
        template: "%s - Home page",
        vmid: "og:title",
      },
    ],
  },
  created() {
    // this.$store.dispatch("getUsers");
    // this.airports = this.$store.state.users;
    // console.log(this.$store.state);
  },
  beforeMount() {
    // this.$store.dispatch("getUsers");
    // this.airports = this.$store.state.users;
    // console.log(this.$store.state);
  },
};
</script>

<style>
.table-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  height: 30%;
}
</style>
