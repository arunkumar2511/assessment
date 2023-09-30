# assessment
# After cloning into local please do "npm install"
# After the successful installation of all dependencies, start the server using command "npm start"
# Once you see this message "app started listening at 3000" server initiated successfully with the url http://localhost:3000
# http://localhost:3000/api/v1/migrate-rings?N=1&A=A&B=B&C=C this is the get api with sample payload to get rings on given plates and all the payloads are expected as query params . the logic of the function to swap plate is swapping the target and auxillary plate in the parameter of migraterings function which is been called recurssively and pushing the result of each plate to steps function
# http://localhost:3000/api/v1/fibonacci-series?n=5 this is the get api with sample payload to get fibonacci value of given number n and all the payloads are expected as query params . the logic of the function is a tempm memory variable has been declared which is an object and the same function is been called recurrsively to calculate the sum of fibonacci series for the given input
# Sample api with payload
# http://localhost:3000/api/v1/migrate-rings?N=1&A=A&B=B&C=C - GET Method 
# http://localhost:3000/api/v1/fibonacci-series?n=5 - GET Method
