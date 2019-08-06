<template>
    <div class="container">
        <h1>Telephone number</h1>


        <div class="block">
            <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModalCenter">
            Add
            </button>
        </div>

        <div class="input">
            <input type="text" class="form-control" id="search" aria-describedby="emailHelp" placeholder="Enter person" size="80" v-model="search">
        </div>

         <div class="sort">
            <button type="button" class="btn btn-warning" v-on:click="$emit('Sort')">
            Sort
            </button>
        </div>

        
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <!-- МОД ОКНО -->
            <div class="modal-body">
                <form>
                <div class="form-group">
                    <input type="text" class="form-control" id="inputname" placeholder="Enter name" v-model="person.name">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="inputsurname" placeholder="Enter surname" v-model="person.surname">
                </div>
                <div class="form-group">
                    <masked-input
                    placeholder="Please enter your number" 
                    id="number" 
                    type="text" 
                    class="form-control" 
                    v-model="person.number"
                    :mask="['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-',/\d/, /\d/]"
                    :guide="false"
                    ></masked-input>


                    <!-- <input type="number" class="form-control" id="inputnumber" placeholder="Enter number" v-model="person.number"> -->
                </div>
                </form>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" v-model="person.top">
                    <label class="form-check-label" for="defaultCheck1">
                        favorites
                    </label>
                </div>
            </div>
            <div class="modal-footer">
                <button v-on:click="$emit('Add',{...person}); person.name='';person.surname='';person.number=''" type="button" class="btn btn-primary" >Save</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            person:{
                name:'',
                surname:'',
                number:'',
                top:false,
            },
            search:""
        };
    }
}
</script>

<style>
.block{
    display: inline-block;
}
.input{
    display: inline-block;
}
.sort{
    display: inline-block;
}
</style>
