# Normal Use

## Installation + Setup:
### Install k6 on your system from k6.io

## Execute API Tests:
### $ k6 run test.js 

## Execute Performance Tests:
### $ k6 run ./performance/*.performance.js

# User With Reports

## Installation + Setup:
### Install k6 on your system from k6.io
### Install Docker on you system.
### $ docker-compose up
### On your browser go to http://localhost:3000/login
### Login to Grafana and go to dashboard
 

## Execute API Tests:
### $ k6 run --out influxdb=http://localhost:8086 ./test.js

## Execute Performance Tests:
### $ k6 run --out influxdb=http://localhost:8086 ./performance/*.performance.js

