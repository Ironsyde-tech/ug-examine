let baseUrl = 'http://localhost:8080';


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



function logoutHandler() {
    localStorage.clear();
    setDomainCookie('access_token', localStorage.getItem('access_token'), -1, window.location.hostname);
    window.location.href = `/ui/auth/login?next=${encodeURIComponent(window.location.pathname)}`;
    return true;
}

function setDomainCookie(name, value, days, domain) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/; domain=${domain}`;
}

function loginHandler(e) {
    localStorage.clear();
    setDomainCookie('access_token', localStorage.getItem('access_token'), -1, window.location.hostname);

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
            setDomainCookie('access_token', localStorage.getItem('access_token'), 7, window.location.hostname);
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
    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('authorization', `Bearer ${localStorage.getItem('access_token')}`);
    
    return fetch(`${baseUrl}/courses`, {
        method: "GET",
        credentials: 'include',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          },
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




function initAddCourseHandler() {
    $('.add-course-form button.confirm').off('click');
    $('.add-course-form button.confirm').on('click', (e) => {
        e.preventDefault();

        const data = {
            code: $('#course_code').val(),
            name: $('#course_name').val(),
            period: $('#course_period').val(),
            credits: $('#course_credits').val(),
            campus: "main"
        };

        console.log(data);

        myHeaders.append('authorization', `Bearer ${localStorage.getItem('access_token')}`);
        fetch(`${baseUrl}/courses`, {
            method: "POST",
            credentials: 'include',
            headers: myHeaders,
           body:JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((result) => {
                if (unauthorizedHandler(result)) return;
                console.log(result);

            })
            .catch((error) => console.error(error));


    });
}

function initAddLecturerHandler() {
    $('.add-lecturer-form button.confirm').off('click');
    $('.add-lecturer-form button.confirm').on('click', (e) => {
        e.preventDefault();

        const data = {
            code: $('#course_code').val(),
            name: $('#course_name').val(),
            period: $('#course_period').val(),
            credits: $('#course_credits').val(),
        };

        console.log(data);

        myHeaders.append('authorization', `Bearer ${localStorage.getItem('access_token')}`);
        fetch(`${baseUrl}/course`, {
            method: "POST",
            credentials: 'include',
            headers: myHeaders,
            data
        })
            .then((response) => response.json())
            .then((result) => {
                if (unauthorizedHandler(result)) return;
                console.log(result);
                toastr.success('Added', 'Course Added');

            })
            .catch((error) => console.error(error));


    })
}

function initAddAllocationHandler() {
    $('.add-allocation-form button.confirm').off('click');
    $('.add-allocation-form button.confirm').on('click', (e) => {
        e.preventDefault();

        const data = {
            code: $('#course_code').val(),
            name: $('#course_name').val(),
            period: $('#course_period').val(),
            credits: $('#course_credits').val(),
        };

        console.log(data);

        myHeaders.append('authorization', `Bearer ${localStorage.getItem('access_token')}`);
        fetch(`${baseUrl}/course`, {
            method: "POST",
            credentials: 'include',
            headers: myHeaders,
            data
        })
            .then((response) => response.json())
            .then((result) => {
                if (unauthorizedHandler(result)) return;
                console.log(result);

            })
            .catch((error) => console.error(error));


    })
}