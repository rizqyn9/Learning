exports.get_API = (req,res,next) => {
    res.json({
        name : "RIZQY PRASTYA",
        pass : 12334
    })
    next()
}