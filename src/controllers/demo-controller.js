exports.hello = function (_req, res) {
    return res.status(200).json({
        status: 'Success',
        message: 'Hello from Node.JS!'
    })
}
