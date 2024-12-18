const baseUrl = 'http://localhost:8080';


const myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("Content-Type", "application/json");

function unauthorizedHandler(result) {
    if (result.statusCode == 401) {
        window.location.href = `/ui/auth/login?next=${encodeURIComponent(window.location.pathname)}`
        return true;
    }

    return false;
}

function loginHandler(e) {
    const raw = JSON.stringify({
        "username": document.getElementById('email').value,
        "password": document.getElementById('password').value
    });

    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("Content-Type", "application/json");



    const requestOptions = {
        method: "POST",
        credentials: 'include',
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("/auth/login", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            localStorage.setItem('access_token', result.access_token);
            window.location.href = new URLSearchParams(window.location.search).get('next') || "/ui/timetable";
        })
        .catch((error) => console.error(error));

}

function listAllocations() {
    myHeaders.append('authorization', `Bearer ${localStorage.getItem('access_token')}`);
    return fetch(`${baseUrl}/allocations`, {
        method: "GET",
        credentials: 'include',
        headers: myHeaders,
    })
        .then((response) => response.json())
        .then((result) => {
            if (unauthorizedHandler(result)) return;
            console.log(result);


        })
        .catch((error) => {
            console.error(error);
        });
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
            if (unauthorizedHandler(result)) return;
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
            if (unauthorizedHandler(result)) return;
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
            if (unauthorizedHandler(result)) return;
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
            if (unauthorizedHandler(result)) return;
            console.log(result);

        })
        .catch((error) => console.error(error));
}