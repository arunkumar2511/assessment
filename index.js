const express = require("express");
const Joi = require("joi");
const validator = require('express-joi-validation').createValidator({});
const _ = require("lodash");

const app = express();
const port = 3000;
/* Validation Schema for migrate-rings api */
const migrateSchema = Joi.object({
    N: Joi.number().positive().greater(0).required(),
    A: Joi.string().required(),
    B: Joi.string().required(),
    C: Joi.string().required(),
})
/* Validation Schema for is-balanced api */
const fibonacciSchema = Joi.object({
    n: Joi.string().required()
})
app.listen(port,()=>{
    console.log(`app started listening at ${port}`)
});

app.get('api/v1/migrate-rings',validator.query(migrateSchema),(req,res)=>{
    var steps = [];
    const migrateRings = (n,source,target,aux)=>{
        if(n==1){
            steps.push(`${n}: ${source} to ${target}`)
        }else {
            migrateRings(n-1,source,aux,target);
            steps.push(`${n}: ${source} to ${target}`)
            migrateRings(n-1,source,target,aux);
        }
    }
    const {N,A,B,C} = req.query;
    migrateRings(N,A,B,C)
    return res.status(200).json({
        status:true,
        data:steps
    })
})

app.get('/api/v1/fibonacci-series',validator.query(fibonacciSchema),(req,res)=>{
    const data = {};
    const fibo = (n)=>{
        if(n <= 1) return 1
        if(data[n]){
            return data[n]
        }
        data[n] = fibo(n-1)+fibo(n-2)
        return data[n]
    }
    var {n} = req.query;
    const result = fibo(n)
    return res.status(200).json({
        status:true,
        data:`fibonacci value of ${n} is ${result}`
    });
})
 

