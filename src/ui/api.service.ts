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

    listCourses(req): Observable<AxiosResponse<any>> {
        
        const token = req.headers['cookie'].split(';').find(o => o.startsWith('access_token='))?.replace('access_token=', '')?.trim();
        
        return this.httpService.get(`${this.baseUrl}/courses`, {
            headers: {
                authorization: `Bearer ${token}`,
            }
        });
    }



    getTicketStats(): Promise<any> {
        return Promise.resolve({ pending: 84, open: 12, closed: 4 });
    }
}