exports.success = function (req , res , messege , status){
    res.status(status || 200).send({
        error: ' ',
        body: messege
    });
}


exports.error = function (req, res, messege, status, details){
    console.error('response error' + details);
    res.status(status || 500).send({
        error: messege,
        body: ''
    });
}