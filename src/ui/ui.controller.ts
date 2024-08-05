import { Controller, Get, Render } from '@nestjs/common';

@Controller('ui')
export class UiController {
    @Get('')
    @Render('index')
    home() {
        return { message: 'Hello world!' };
    }

    @Get('/courses')
    @Render('courses/index')
    courses() {
        return { message: 'Hello world!' };
    }

    @Get('/allocations')
    @Render('allocations/allocations')
    allocationsPage() {
        console.log('Hello')
        return { message: 'Hello world!' };
    }

    @Get('auth/login')
    @Render('auth/login')
    login() {
        return { message: 'Hello world!' };
    }

    @Get('auth/forgot-password')
    @Render('auth/forgot-password')
    forgotPassword() {
        return { message: 'Hello world!' };
    }

    @Get('auth/otp')
    @Render('auth/otp')
    otp() {
        return { message: 'Hello world!' };
    }

    @Get('/lecturers')
    @Render('lecturers/lecturers-database')
    lecturers() {
        return { message: 'Hello world!' };
    }

    @Get('/tickets')
    @Render('tickets/view-tickets')
    viewTickets() {
        return { message: 'Hello world!' };
    }
}
