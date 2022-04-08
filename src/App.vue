<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <div id="app" class="app">

    <div class="header">

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Proyecto Prueba</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" v-on:click="studentCreate">Crear</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" v-on:click="studentList">Ver</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </div>
    

    <div class="main-component">
      <router-view   v-on:studentCreate="studentCreate">
        
      </router-view>
    </div>
    

   

  </div>

</template>


<script>
export default {
  name: 'App',

  computed: {
    is_auth: {
      get: function() {
        return this.$route.meta.requiresAuth;
      },
      set: function() { }
    }
  },

  methods:{

    loadLogIn: function(){
      this.$router.push({name: "logIn"})
    },

    loadSignUp: function(){
      this.$router.push({name: "signUp"})
    },

    completedLogIn: function(data) {
			localStorage.setItem("username", data.username);
			localStorage.setItem("token_access", data.token_access);
			localStorage.setItem("token_refresh", data.token_refresh);
			alert("Autenticación Exitosa");
			this.loadHome();
    },

    completedSignUp: function(data) {
			alert("Registro Exitoso");
			this.completedLogIn(data);
    },

    studentCreate: function() {
      this.$router.push({ name: "StudentCreate" });
    },

    studentList: function() {
      this.$router.push({ name: "StudentList" });
    },
    
    loadAccount: function () {
			this.$router.push({ name: "account" });
		},

    loadTransaction: function(){
      this.$router.push({ name: "transaction" });
    },

    logOut: function () {
			localStorage.clear();
			alert("Sesión Cerrada");
      this.loadLogIn();
		},
  }
}
</script>


<style>

  body{
    margin: 0 0 0 0;
  }

 .main-component{
    height: 75vh;
    margin: 0%;
    padding: 0%;

    background: #FDFEFE ;
  }

 
  .footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10px;
    min-height: 100px; 

    background-color: #000000;
    color: #E5E7E9;

  }

  .footer h2{
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
