<template>
    <div class="container m-5">
        <div class="row">
            <div class="col"></div>
            <div class="col-6">


                <div class="card text-center">
                <div class="card-header">
                    Estudiantes
                </div>
                <div class="card-body">
                    <h5 class="card-title m-3">Ver</h5>
                    <button v-on:click="process"  class="btn btn-danger text-end ms-1">Actualizar tabla</button>
            <!--        <form v-on:submit.prevent="processStudentBuscar">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">id</span>
                            <input v-model="getStudentById.id" type="number" class="form-control" placeholder="id" aria-label="id" aria-describedby="basic-addon1">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Nombre</span>
                            <input v-model="getStudentById.name" type="text" class="form-control" placeholder="name" aria-label="name" aria-describedby="basic-addon1">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Codigo</span>
                            <input v-model="getStudentById.cod" type="number" class="form-control" placeholder="cod" aria-label="cod" aria-describedby="basic-addon1">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Curso</span>
                            <input v-model="getStudentById.course" type="number" class="form-control" placeholder="course" aria-label="course" aria-describedby="basic-addon1">
                        </div>                        
                        <button type="submit" class="btn btn-primary mt-4">Submit</button>

                    </form> -->

                    <table class="table mt-5">
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Codigo</th>
                            <th scope="col">Curso</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr v-for="st in allStudents" :key="st.id">
                                <th scope="row">{{st.id}}</th>
                                <td>{{st.name}}</td>
                                <td>{{st.cod}}</td>
                                <td>{{st.course}}</td>
                            </tr>

                        </tbody>
                    </table>
                    

                </div>
                <div class="card-footer text-muted">
                    
                </div>
                </div>



                
            </div>
            <div class="col"></div>
        </div>
    </div>
</template>


<script>
import gql from 'graphql-tag';

export default { 
    name: "StudentCreate",

    data: function() {
        return {
            getStudentById: {
                name: "",
                cod: 0,
                course: 0,
                id: 1,
            },
            allStudents: [],
            Bid: 0,
        };
    },

    methods: {
        async processStudentBuscar() {
            // Call to the graphql mutation
            getStudentById = await this.$apollo.query({
            // Query
            query: gql`
               query ($id: Int!){
                    getStudentById(id: $id) {
                        id
                        name
                        cod
                    }
                }
                `,
            // Parameters
            variables: {
                id: this.getStudentById.id,
            },
            })
            .then((result) => {
                alert("Transacción Realizada de Manera Correcta, Revise Historial");
            })
            .catch((error) => {
                alert("error");
            });
        },
        process() {
            location. reload()
            this.$router.go(0)
         }

    },
    
    apollo:{
        allStudents: {
            query: gql`
                query {
                    allStudents {
                        name
                        id
                        cod
                        course
                    }
                }
            `,
        },
        getStudentById: {
            query: gql`
                query ($id: Int!){
                    getStudentById(id: $id) {
                        id
                        name
                        cod
                    }
                }
            `,
            variables() {
                return {
                id: this.getStudentById.id,
                };
            },
        },
    },

    buscar: function () {
        this.$apollo.queries.getStudentById.refetch();
        this.$apollo.queries.allStudents.refetch();
        location. reload()
        this.$router.go(0)
    }
 
}

</script>

