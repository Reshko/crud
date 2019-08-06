<template>
    <div>
        <div class="container">
            <div>
                <table class="table table-borderless">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(person, index) in persons" v-if="!person.top" >
                        <td>{{++index}}</td>
                        <td>{{person.name}}</td>
                        <td>{{person.surname}}</td>
                        <td>{{person.number}}</td>
                        <td><button class="btn btn-danger" type="button" v-on:click="$emit('Del',--index)">Delete</button></td>
                    </tr>
                </tbody>
                </table>
            </div>
            <hr>
            <hr>
            <div>
            <table class="table table-borderless">
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(person, index) in persons" v-if="person.top" >
                    <td>{{++index}}</td>
                    <td>{{person.name}}</td>
                    <td>{{person.surname}}</td>
                    <td>{{person.number}}</td>
                    <td><button class="btn btn-danger" type="button" v-on:click="$emit('Del',--index)">Delete</button></td>
                </tr>
            </tbody>
            </table>
            </div>    
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props:["persons"]
}
</script>

<style>

</style>
