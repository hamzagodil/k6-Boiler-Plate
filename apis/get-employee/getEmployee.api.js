import http from 'k6/http';
import { check } from 'k6';
import { routes } from '../../data/routes.js';


export function getEmployeeAPI() {
    const url = `${routes.server}/${routes.version}/${routes.getEmployee}`;
    console.log(url);
  
    const params = {
      headers: {
        'Content-Type': 'application/json',
        'accept':'application/json',
      },
    };
  
    const res = http.get(url, params);
    console.log(res.body);
    check(res, {
      'Get Employee API has status 200': (res) => res.status === 200,
    });
    return res  
}