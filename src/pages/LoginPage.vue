<template>

<div class="absolute-center ">
  <q-card class="bg-grey text-center">
     <div class= "text-center text-h5 text-bold text-italic">
    Login Page
  </div>

 <div>
   
    <div class="q-pa-md">
      <div class="q-gutter-md row items-start">
      <q-input v-model= "name" label="Username" style="width:300px" />
      </div>
    </div>

      <q-input v-model= "pass" label="Password" filled :type="isPwd ? 'Password' : 'text'">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
  </div>

    <div class="q-pa-md" color="black">
    <div class="q-gutter-sm">
      <q-radio v-model="shape" val="Admin" label="Admin" />
      <q-radio v-model="shape" val="Director" label="Director" />
    </div>
    <div class="q-px-sm">
      Your selection is: <strong>{{ shape }}</strong>
    </div>
  </div>

  <div class="q-pa-md q-gutter-sm">
    <q-btn color="grey-5" text-color="black" label="login" style="width:250px"/>
  </div>
  </q-card>
  
<div class="q-pa-md q-gutter-sm">
    <q-btn color="grey-5" text-color="black" label="back" to= "LandingPage"/>
</div>

</div>

</template>

<script>
export default {
  data () {
    return {
      name: '',
      pass: '',
      isPwd: true,
      shape: ''
    }
  }
}
</script>