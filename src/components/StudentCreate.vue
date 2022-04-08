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
                    <h5 class="card-title">Crear</h5>
                    
                    <form class="m-3" v-on:submit.prevent="processStudentCreate">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Nombre</span>
                            <input v-model="student.name" type="text" class="form-control" placeholder="name" aria-label="name" aria-describedby="basic-addon1">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Codigo</span>
                            <input v-model="student.cod" type="number" class="form-control" placeholder="cod" aria-label="cod" aria-describedby="basic-addon1">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Curso</span>
                            <input v-model="student.course" type="number" class="form-control" placeholder="course" aria-label="course" aria-describedby="basic-addon1">
                        </div>                        
                        <button type="submit" class="btn btn-primary mt-4">Crear</button>
                    </form>

                </div>
                <div class="card-footer" v-on:submit.prevent="processStudentSearch">
                  
                        <div class="row m-5">
                            <div class="col">
                                <div class="input-group">
                                    <span class="input-group-text" id="basic-addon1">Id</span>
                                    <input v-model="bId" type="number" class="form-control" placeholder="course" aria-label="course" aria-describedby="basic-addon1">
                                </div>
                            </div>
                            <div class="col">
                                <button v-on:click="processStudentSearch"  class="btn btn-primary text-end">Buscar</button>
                                <button v-on:click="processStudentDelete"  class="btn btn-danger text-end ms-1">Eliminar</button>
                            </div>
                           
                        </div>
                   
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
            student: {
                name: "",
                cod: 0,
                course: 0,
                id: 0,
            },
            getStudentById: {
                name: "",
                cod: 0,
                course: 0,
                id: 0,
            },
            bId: 0,
        };
    },

    methods: {
        async processStudentCreate() {
            // Call to the graphql mutation
            const result = await this.$apollo.mutate({
            // Query
            mutation: gql`
                mutation ($studentData: StudentData) {
                    createStudents(studentData: $studentData) {
                        name
                        id
                    }
                }
                `,
            // Parameters
            variables: {
                studentData: this.student,
            },
            })
            .then((result) => {
                alert("Transacción Realizada de Manera Correcta, codigo estudiante : " + result.data.createStudents.id);
                this.student.name = ""; this.student.cod = 0; this.student.course;
            })
            .catch((error) => {
                alert("error");
            });
        },
        async processStudentDelete() {
            // Call to the graphql mutation
            const result = await this.$apollo.mutate({
            // Query
            mutation: gql`
                mutation ($deleteStudentByIdId: Int!) {
                    deleteStudentByID(id: $deleteStudentByIdId) {
                        name
                        id
                    }
                }
            `,
            // Parameters
            variables: {
                deleteStudentByIdId: this.bId,
            },
            })
            .then((result) => {
                alert("Transacción Realizada de Manera Correcta, Revise Historial");
                location. reload()
                this.$router.go(0)
            })
            .catch((error) => {
                alert("No se encontro, vuelva a intentar");
            });
        },
        async processStudentSearch() {
            // Call to the graphql mutation
            const result = await this.$apollo.query({
            // Query
            query: gql`
               query ($id: Int!){
                    getStudentById(id: $id) {
                        id
                        name
                        cod
                        course
                    }
                }
                `,
            // Parameters
            variables: {
                id: this.bId,
            },
            })
            .then((result) => {
                alert("Transacción Realizada de Manera Correcta, Revise Historial");
                this.student = result.data.getStudentById;
            })
            .catch((error) => {
                alert("No se encontro, vuelva a intentar");
            });
        }
    },
 
}

</script>
