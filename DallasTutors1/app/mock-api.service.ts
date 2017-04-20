import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class MockApiService implements InMemoryDbService {

    dataStore = {
        default: {
            users: [
                {
                    id: 1,
                    name: "John Lawrimore",
                    email: "jlawrimore@smu.edu",
                    phoneNumbers: [
                        { number: '2145551212', type: 'mobile' },
                        { number: '9725551212', type: 'home' },
                        { number: '8175551212', type: 'fax' }
                    ]
                },
                {
                    id: 2,
                    name: "Joe Smith",
                    email: "jsmith@smu.edu",
                    phoneNumbers: [
                        { number: '2145551212', type: 'mobile' },
                        { number: '9725551212', type: 'home' },
                        { number: '8175551212', type: 'fax' }
                    ]
                },
                {
                    id: 3,
                    name: "Tom Jones",
                    email: "tjones@smu.edu",
                    phoneNumbers: [
                        { number: '2145551212', type: 'mobile' },
                        { number: '9725551212', type: 'home' },
                        { number: '8175551212', type: 'fax' }
                    ]
                }
            ]
        },
        empty: {
            users: []
        }
    };

    createDb() {
        return this.dataStore['default'];
    }
}