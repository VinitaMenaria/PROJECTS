const errorHandler=(err,req,res,next)=>{
    let statusCode=500;
    let errorMessage=err.message;
    console.log('global handler runs')
    if(err.name==='validationError'){
        console.log('error',err.error)
        console.log(Object.values(err.errors))
        const message=Object.values(err.errors).map(val=>val.message);

        statusCode=400;
        errMessage=messages;
    }
    else{
        console.log(err.message);
    }
    
    res.status(statusCode).json({
        message:errorMessage
     });
}

     module.exports=errorHandler
  