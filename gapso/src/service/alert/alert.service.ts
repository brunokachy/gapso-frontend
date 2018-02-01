import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService {
    private subject = new Subject<any>();
    private keepAfterNavigationChange = false;
    interval: any;

    constructor(private router: Router) {
        // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                } else {
                    // clear alert
                    this.subject.next();
                }
            }
        });
    }

    success(message: string, keepAfterNavigationChange = false) {
        clearInterval(this.interval);
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
        this.interval = setInterval(() => {
            this.clearAlert()
        }, 5000);
    }

    error(message: string, keepAfterNavigationChange = false) {
        clearInterval(this.interval);
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
        this.interval = setInterval(() => {
            this.clearAlert()
        }, 5000);
    }

    clearAlert() {
        this.subject.next()
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
