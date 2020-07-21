<template>
    <div>
        Booking vue
       <div class="columns">
  <div class="column">
    <b-field >
            <b-autocomplete
                v-model="name"
                placeholder="Откуда"
                :keep-first="keepFirst"
                :open-on-focus="openOnFocus"
                :data="filteredDataObj"
                field="user.first_name"
                @select="option => selected = option">
            </b-autocomplete>
        </b-field>

         
  </div>
  <div class="column">
    <b-field >
            <b-autocomplete
                v-model="name"
                placeholder="Куда"
                :keep-first="keepFirst"
                :open-on-focus="openOnFocus"
                :data="filteredDataObj"
                field="user.first_name"
                @select="option => selected = option">
            </b-autocomplete>
        </b-field>
  </div>
  <div class="column">
        <b-field >
            <b-datepicker
                :show-week-number="showWeekNumber"
                placeholder="Дата"
                icon="calendar-today"
                trap-focus>
            </b-datepicker>
        </b-field>
  </div>
  <div class="column">
    <b-field >
            <b-select placeholder="Класс">
                <option
                    v-for="option in data"
                    :value="option.id"
                    :key="option.id">
                    {{ option.user.first_name }}
                </option>
            </b-select>
        </b-field>

  </div>
</div>
       
    </div>
</template>
<script>
export default {
    data() {
            return {
                data,
                keepFirst: false,
                openOnFocus: false,
                name: '',
                selected: null
            }
        }, 
}
</script>
