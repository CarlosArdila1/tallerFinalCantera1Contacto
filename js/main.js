const main = () => {
    const name = document.getElementById("name");
    const mail = document.getElementById("mail");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const submit = document.getElementById("submit");
    const reset = document.getElementById("reset");
    const form = document.getElementById("form");

    form.addEventListener("submit", function(e){
        e.preventDefault();
        console.log("Nombre:  ", name.value);
        console.log("E-mail:  ", mail.value);
        console.log("Asunto:  ", subject.value);
        console.log("Mensaje: ", message.value);
    });

    form.addEventListener("reset", function(e){
        e.preventDefault();
        form.value = "";
    })

    reset.addEventListener("click", function() {
        name.value=null;
        mail.value=null;
        subject.value=null;
        message.value=null;
        console.clear();
      });

}