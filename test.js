import { group } from 'k6';
import { postEmployeeAPI } from './apis/create-user/postEmployee.api.js';
import { getEmployeeAPI } from './apis/get-employee/getEmployee.api.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export default function () {


  group('GET APIs', function () {
    getEmployeeAPI();
  });

  group('POST APIs', function () {
    postEmployeeAPI();
  });
   
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}