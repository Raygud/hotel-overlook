function setup() {

   
    const button = document.getElementById('submit');
    button.addEventListener('click', async event => {
        UserName = sessionStorage.getItem("UserName")
        PassWord = sessionStorage.getItem("PassWord")
        const data = { UserName, PassWord };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const response = await fetch('/MemberSite', options);
        const json = await response.json();
        console.log(json);
    });

};

function Penis(){
    console.log(sessionStorage.getItem("UserName"))
        console.log(sessionStorage.getItem("PassWord"))
}