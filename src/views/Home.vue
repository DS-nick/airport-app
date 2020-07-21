<template>
  <div class="hello">
    <Map />

    <div class="table-container">
      <b-table :data="airports" :columns="columns"></b-table>
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
      airports: [
        { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
                    { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
                    { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
                    { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
                    { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
      ],
      columns: [
         {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'first_name',
                        label: 'First Name',
                    },
                    {
                        field: 'last_name',
                        label: 'Last Name',
                    },
                    {
                        field: 'date',
                        label: 'Date',
                        centered: true
                    },
                    {
                        field: 'gender',
                        label: 'Gender',
                    }
      ]
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
  left: 20%;
  width: 100%;
  background-color: white;
  height: 30%;
}
</style>
