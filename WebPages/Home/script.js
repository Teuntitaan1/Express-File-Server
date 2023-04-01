// fetches all available files from the file server
fetch("http://localhost:3000/AllWebsites").then((response) => {response.json().then((Data) => {
    Data.forEach((Page) => {
        document.getElementById("ALLWEBSITES").innerHTML += 
        `
            <li>
                <a href="http://localhost:3000/${Page.name}">${Page.name}</a>
            </li>
        `
    });
});});

// fetches all available files from the file server
fetch("http://localhost:3000/AllFiles").then((response) => {response.json().then((Data) => {
    Data.forEach((File) => {
        document.getElementById("ALLFILES").innerHTML += 
        `
            <li>
                <a href="http://localhost:3000/${File.name}">${File.name}</a>
            </li>
        `
    });
});});

