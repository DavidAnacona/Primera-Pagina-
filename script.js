var funcion = (event)=>{
  
    event.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var numero = document.getElementById('numero').value;
    const serviceID = 'default_service';
    const templateID = 'template_eerbkeo';

    emailjs.send(serviceID,templateID,{nombre,email,numero})
        .then(function(res){
                alert('ha enviado sus datos');
        },function(error){
                alert('Error');
        });
}