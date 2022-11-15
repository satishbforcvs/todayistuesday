const chai = require('chai')
const app = require('../../app')
let chaiHttp = require('chai-http');
const expect = chai.expect
chai.use(chaiHttp)


describe('The demo-test', function() {
    it('respond to /', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res.status).to.be.equal(200)
                expect(res.body.status).to.be.equal('Success')
                expect(res.body.message).to.be.equal('Hello from Node.JS!')
                done();
            })
    })
})
