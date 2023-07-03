import { createStore } from 'vuex'

const dataURL = "https://rabiahaucha.github.io/vue-portfolio-JSON.SERVE/index.json";

export default createStore({
  state: {
    Skills :null,
    Testimonials: null,
    Projects:null,
    Education:null,
    Spinner:false,
  },
  getters: {
    
  },
  mutations: {
    setSkills(state,data){
      state.Skills = data;
    },
    setTestimonials(state,data){
      state.Testimonials= data;
    },
    setEducation(state,data){
      state.Education = data;
    },
    setProjects(state,data){
      state.Projects = data;
    },
    setSpinner(state,value){
      state.value = value;
    },

  },
  actions: {
    async fetchSkills(context){
      try{
        let res = await fetch (dataURL);
        let {Skills} = await res.json();

        if(Skills){
          context.commit("setSkills",Skills);
          context.commit("setSpinner",false);
        }else{
          context.commit("setSpinner",true);
        } 
       } catch(e){
          console.log(e.message);
        }    
    },
    async fetchTestimonials(context){
      try{
        let res = await fetch (dataURL);
        let {Testimonials} = await res.json();

        if(Testimonials){
          context.commit("setTestimonials",Testimonials);
          context.commit("setSpinner",false);
        }else{
          context.commit("setSpinner",true);
        } 
       } catch(e){
          console.log(e.message);
        }    
    },
    async fetchProjects(context){
      try{
        let res = await fetch (dataURL);
        let {Projects} = await res.json();

        if(Projects){
          context.commit("setProjects",Projects);
          context.commit("setSpinner",false);
        }else{
          context.commit("setSpinner",true);
        } 
       } catch(e){
          console.log(e.message);
        }    
    },
    async fetchEducation(context){
      try{
        let res = await fetch (dataURL);
        let {Education} = await res.json();

        if(Education){
          context.commit("setEducation",Education);
          context.commit("setSpinner",false);
        }else{
          context.commit("setSpinner",true);
        } 
       } catch(e){
          console.log(e.message);
        }    
       
    },
    
  },
  modules: {
  },
});
