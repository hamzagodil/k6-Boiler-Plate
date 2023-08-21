import http from 'k6/http';
import { check } from 'k6';
import { routes } from '../../data/routes.js';

export function postEmployeeAPI() {
    const url = `${routes.server}/${routes.version}/${routes.createEmployee}`;
   console.log(url)
    const payload = JSON.stringify({
      "name":"test",
      "salary":"123",
      "age":"23"
    });
  
    const params = {
      headers: {
        'Content-Type': 'application/json',
        'accept':'application/json'
      },
    };

    const res = http.post(url, payload, params);
    console.log(res.body);
    check(res, {
      'Create User API has status 200': (res) => res.status === 200,
      'Create User API has valid keys': (res) => JSON.parse(res.body).hasOwnProperty('data') && JSON.parse(res.body).hasOwnProperty('success'),
    });
    return res
}