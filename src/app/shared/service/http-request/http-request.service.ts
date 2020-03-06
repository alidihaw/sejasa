import { Injectable } from '@angular/core';

import * as _ from 'lodash';

@Injectable()
export class HttpRequestService
{
    constructor(
    ) {}

    getBase64(file): Promise<any> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = async () => {
                resolve(reader.result);
            };
            reader.onerror = (error) => {
                console.log('Error: ', error);
            };
        })
    }

    makeRequest(url, method = 'GET'): Promise<any> {
        const request = new XMLHttpRequest();
        return new Promise(async (resolve, reject) => {
            request.onload = async () => {
                if (request.readyState !== 4) return;
                if (request.status >= 200 && request.status < 300) {
                    const base64 = await this.getBase64(request.response);
                    resolve(base64);
                } else {
                    reject({
                        status: request.status,
                        statusText: request.statusText
                    });
                }
            };
            request.responseType = 'blob';
            request.open(method || 'GET', url, true);
            request.send();
        });
    }
}
