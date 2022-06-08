function setup() {

    noCanvas();
    const video = createCapture(VIDEO);
    video.size(320, 240);
    const button = document.getElementById('submit');
    button.addEventListener('click', async event => {
        const UserName = document.getElementById('UserName').value;
        const PassWord = document.getElementById("PassWord").value;
        console.log(PassWord + "Penis")
        console.log(UserName)
        video.loadPixels();
        const image64 = video.canvas.toDataURL();
        const data = { UserName, PassWord };
        sessionStorage.setItem("UserName", UserName);
        sessionStorage.setItem("PassWord", PassWord);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const response = await fetch('/Login', options);
        const json = await response.json();
        console.log(json);
        console.log(sessionStorage.getItem("UserName"))
        console.log(sessionStorage.getItem("PassWord"))
    });

};