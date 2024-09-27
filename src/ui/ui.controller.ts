import { Controller, Get, Render } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('ui')
export class UiController {
    constructor(private readonly apiService: ApiService) { }

    @Get('')
    @Render('index')
    home() {
        return { message: 'Hello world!', name: "kwame" };
    }


    @Get('/submit ticket')
    @Render('submit ticket/submit ticket')
    submit() {
        return { message: 'Hello world!', name: "kwame" };
    }

    @Get('/homepage')
    @Render('homepage/homepage')
    homepage() {
        return { message: 'Hello world!', name: "kwame" };
    }


    @Get('/timetable')
    @Render('timetable/timetable')
    timetable() {
        this.apiService.listAllocations().subscribe((res) => {
            console.log(res)
        });
        return { message: 'Hello world!', name: "kwame" };
    }

    @Get('/courses')
    @Render('courses/index')
    courses() {
        return { message: 'Hello world!', name: "kwame", courses: [
            { code: 'DCIT 104', name: 'Programming', studyPeriod: 'Level 100 - Second Semester', academicCredits: 3 },
        ] };
    }

    @Get('/allocations')
    @Render('allocations/allocations')
    allocationsPage() {
        return { message: 'Hello world!', name: "kwame" };
    }

    @Get('auth/login')
    @Render('auth/login')
    login() {
        return { message: 'Hello world!', name: "kwame" };
    }

    @Get('auth/forgot-password')
    @Render('auth/forgot-password')
    forgotPassword() {
        return { message: 'Hello world!', name: "kwame" };
    }

    @Get('auth/otp')
    @Render('auth/otp')
    otp() {
        return { message: 'Hello world!', name: "kwame" };
    }

    @Get('/lecturers')
    @Render('lecturers/lecturers-database')
    lecturers() {
        return { message: 'Hello world!', name: "kwame" };
    }

    @Get('/tickets')
    @Render('tickets/view-tickets')
    async viewTickets() {
        const [tickets] = await Promise.all([
            new Promise((resolve, reject) => {
                this.apiService.listTickets().subscribe((res) => {
                    console.log(res)
                })
            })
        ]);

        // [
        //     { studentId: 10122934, name: 'Kwame 1', courseCode: 'DCIT 102', year: '2023', examType: 'Normal', semester: 'Second', lecturerName: 'Dr Pyne 1', status: 'Pending', lowerStatus: 'pending' },
        //     { studentId: 10147508, name: 'Kwame 2', courseCode: 'DCIT 204', year: '2023', examType: 'Main', semester: 'Second', lecturerName: 'Dr Pyne 2', status: 'Open', lowerStatus: 'open' },
        //     { studentId: 10164384, name: 'Kwame 3', courseCode: 'DCIT 302', year: '2022', examType: 'Normal', semester: 'Second', lecturerName: 'Dr Pyne 3', status: 'Pending', lowerStatus: 'pending' },
        //     { studentId: 10156728, name: 'Kwame 4', courseCode: 'DCIT 412', year: '2020', examType: 'Supplementary Resit', semester: 'Second', lecturerName: 'Dr Pyne 4', status: 'Closed', lowerStatus: 'closed' },
        // ]
        
        return {
            message: 'Hello world!',
            name: "kwame",
            tickets,
            statistics: { pending: 84, open: 12, closed: 4 }
        };
    }
}
