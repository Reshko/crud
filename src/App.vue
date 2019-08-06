<template>
  <div id="app">
    <app-InputText
      v-on:Add = "Add"
      v-on:Sort = "Sort"
    ></app-InputText>

    <app-OutPutText
      v-on:Del = "Del"
      :persons="persons"
    ></app-OutPutText>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      persons:[],
    }
  },
  mounted:function(){
    this.onLoad();
  },
  methods:{
    Add:function(person){
      this.persons.push(person);
      this.$http
        .post("http://localhost:3000/notes",person)
        .then(res => console.log(res))
      console.log(this.persons);
    },
    Del:function(index){
      this.persons.splice(index,1);
      this.$http
        .delete(`http://localhost:3000/notes/${++index}`)
    },
    Sort:function(){
      this.persons.sort(
          (prev,next) => (prev.surname > next.surname ? 1 : -1)
        );
    },
    onLoad:function(){
      this.$http
        .get("http://localhost:3000/notes")
        .then(res => res.json())
        .then(res => (this.persons = res));
    }
  },
  computed:{
      PeopleFilter(){
          return this.persons.filter(peopl =>{
              return peopl.name.toLowerCase().indexOf(this.search.toLowerCase()) !==-1
          })
      }
  }
}
</script>

