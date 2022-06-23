const vm = new Vue({
  el: '#app',
  data() {
      return {
          info: [],
          errors: [],
          textState: true,
          textState1: false,
          textState2: false,
          textState3: false,
          textState4: false
    
      };
  },
  mounted() {
      axios.get('https://randomuser.me/api/')
     .then(responce => {
       this.info = responce.data.results
       console.log(this.info)
     })
     .catch(e => {
       this.errors.push(e)
     })
  },
  methods:{
    hover(){
      textState = !textState;
    }
  }       
})
//src="https://c.wallhere.com/photos/22/27/2560x1600_px_landscape_nature-1077192.jpg!d"