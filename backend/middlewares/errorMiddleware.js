const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        msg: err?.message,
        stack: process.env.Node_ENV === 'production' ? null : err?.stack,
    })
}


const notFound = (req, res, next)=> {
    const error = new Error(`Path not found - ${req?.orginalUrl}`)
    res.status(404)
    next(error)
}
module.exports =  {errorHandler, notFound}