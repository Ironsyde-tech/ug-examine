import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { Observable } from "rxjs";

@Injectable()
export class ApiService {
    private readonly baseUrl = 'http://localhost:8080';
    // private readonly baseUrl = 'http://httpbin.org';
    private readonly logger = new Logger(ApiService.name);

    constructor(private readonly httpService: HttpService) { }

    listAllocations(): Observable<AxiosResponse<any>> {
        return this.httpService.get(`${this.baseUrl}/allocations`);
    }

    listTickets(): Observable<AxiosResponse<any>> {
        return this.httpService.get(`${this.baseUrl}/tickets`);
    }

    listCourses(): Observable<AxiosResponse<any>> {
        return this.httpService.get(`${this.baseUrl}/courses`);
    }



    getTicketStats(): Promise<any> {
        return Promise.resolve({ pending: 84, open: 12, closed: 4 });
    }
}