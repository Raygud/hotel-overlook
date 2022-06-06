let DataRefresh = 0;
let a = 0
async function getData() {

    const response = await fetch("/api");
    const data = await response.json();
    // console.log(data);
    // console.log(data.length + " Length")
    // console.log("penis")
    // console.log(DataRefresh, data.length)
    if (DataRefresh < data.length) {
        if (DataRefresh != 0) {
            a = DataRefresh
        }
        for (let i = a; i < data.length; i++) {
            console.log(data[i].Lon + "Lon")
            const container = document.createElement("div");
            const mood = document.createElement("p");
            const lat = document.createElement("p");
            const lon = document.createElement("p");
            const date = document.createElement("p");
            const image = document.createElement("img");
            container.setAttribute("class", "container")
            mood.setAttribute("class", "mood")
            lat.setAttribute("class", "lat")
            lon.setAttribute("class", "lon")
            date.setAttribute("class", "date")
            const dateString = new Date(data[i].Timestamp).toLocaleString();

            mood.textContent = `Mood: ${data[i].Mood}`;
            lat.textContent = `Latitude: ${data[i].Lat}°`
            lon.textContent = `Longitude: ${data[i].Lon}°`
            date.textContent = `Date: ${dateString}`;
            image.src = data[i].Image64

            container.append(mood, lat, lon, date, image);
            document.body.append(container);
            console.log("penis")
        }
        DataRefresh = data.length
    }
    else {
    }


    // for (item of data) {

    //     const container = document.createElement("div");
    //     const mood = document.createElement("p");
    //     const lat = document.createElement("p");
    //     const lon = document.createElement("p");
    //     const date = document.createElement("p");
    //     const image = document.createElement("img");
    //     container.setAttribute("class", "container")
    //     mood.setAttribute("class", "mood")
    //     lat.setAttribute("class", "lat")
    //     lon.setAttribute("class", "lon")
    //     date.setAttribute("class", "date")
    //     const dateString = new Date(item.timestamp).toLocaleString();

    //     mood.textContent = `Mood: ${item.mood}`;
    //     lat.textContent = `Latitude: ${item.lat}°`
    //     lon.textContent = `Longitude: ${item.lon}°`
    //     date.textContent = `Date: ${dateString}`;
    //     image.src = item.image64

    //     container.append(mood, lat, lon, date, image);
    //     document.body.append(container);
    //     console.log("penis")
    // }
}

getData()
getData()
setInterval(getData, 1000);