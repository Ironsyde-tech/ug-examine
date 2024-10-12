const baseUrl = 'http://localhost:8080';


const myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("Content-Type", "application/json");


function listAllocations() {
    myHeaders.append('authorization', `Bearer ${localStorage.getItem('access_token')}`);
    return fetch(`${baseUrl}/allocations`, {
        method: "GET",
        credentials: 'include',
        headers: myHeaders,
    })
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            
        })
        .catch((error) => console.error(error));
}

function listTickets() {
    myHeaders.append('authorization', `Bearer ${localStorage.getItem('access_token')}`);
    return fetch(`${baseUrl}/tickets`, {
        method: "GET",
        credentials: 'include',
        headers: myHeaders,
    })
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            
        })
        .catch((error) => console.error(error));
}

function getTicketStats() {
    return Promise.resolve({ pending: 84, open: 12, closed: 4 });
}

function listCourses() {
    myHeaders.append('authorization', `Bearer ${localStorage.getItem('access_token')}`);
    return fetch(`${baseUrl}/courses`, {
        method: "GET",
        credentials: 'include',
        headers: myHeaders,
    })
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            
        })
        .catch((error) => console.error(error));
}

function viewTimetable() {
    myHeaders.append('authorization', `Bearer ${localStorage.getItem('access_token')}`);
    return fetch(`${baseUrl}/timetable`, {
        method: "GET",
        credentials: 'include',
        headers: myHeaders,
    })
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            
        })
        .catch((error) => console.error(error));
}

function listLecturers() {
    myHeaders.append('authorization', `Bearer ${localStorage.getItem('access_token')}`);
    return fetch(`${baseUrl}/lecturers`, {
        method: "GET",
        credentials: 'include',
        headers: myHeaders,
    })
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            
        })
        .catch((error) => console.error(error));
}