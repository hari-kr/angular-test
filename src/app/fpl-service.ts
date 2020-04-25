import { Injectable } from "@angular/core";
import { FPLServiceBridge } from "./fpl-service-bridge";
import { FplResponse, GWData } from './data-models';
import { of, Observable } from "rxjs";
import { map, take, retry } from 'rxjs/operators'

@Injectable()
export class FplService {

    private totalData: any;
    private isProcessed: boolean = false;
    constructor(private bridge: FPLServiceBridge) {
        this.getData().then(response => {
            this.totalData = response;
        })
    }

    private getData(): Promise<FplResponse> {
        let promise = new Promise<FplResponse>((resolve, reject) => {
            this.bridge.getAllData().toPromise().then(response => {
                this.isProcessed = true;
                resolve(this.mapToModel(response));
            })
        });
        return promise;
    }

    private mapToModel(response:any) : FplResponse {
        let result = new FplResponse();
        if(!response) {
            return undefined;
        }
        return result as FplResponse;
    }

    public async getGameweekData(gw: number): Promise<any> {
        if (gw < 1 || gw > 38) {
            return undefined;
        }
        if (!this.isProcessed) {
            let result = await this.getData();
            return result;
        }
        else {
            return new Promise(resolve => {
                resolve(this.totalData);
            })
        }
    }
}