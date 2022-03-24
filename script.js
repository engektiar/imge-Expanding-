 const plans=document.querySelectorAll('.plan');
 plans.forEach((plan)=>{
  plan.addEventListener('click',()=>{
    removeActiveClasses()
    plan.classList.add('active');
  })
 })
 function removeActiveClasses(){
  plans.forEach(plan=>{
     plan.classList.remove('active');
   })
 }