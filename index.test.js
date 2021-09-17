import request from 'supertest'
import app from './index.js'

it("should return one car by id with succsess", ()=>{
    request(app)
        .get('/api/cars/614503f9e5821b2a72e9f977')
        .then( (data)=> {
            except(data).to.equal({"_id":"614503f9e5821b2a72e9f977","name":"a","price":707.3248769995593,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"})
        })
})

it("should return one car by id and with optional fields with succsess", ()=>{
    request(app)
        .get('/api/cars/614503f9e5821b2a72e9f977?fields=1')
        .then( (data)=> {
            except(data).to.equal({"_id":"614503f9e5821b2a72e9f977","name":"a","price":707.3248769995593,"description":"lorem","images_link":["https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg","https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg","https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"]})
        })
})

it("should no return one car by id and and return message not found", ()=>{
    request(app)
        .get('/api/cars/6144ec8536960f1c10315b91')
        .then( (data)=> {
            except(data).to.equal({"message":"Not found"})
        })
})

it("should no return one car by id and and return error message", ()=>{
    request(app)
        .get('/api/cars/a')
        .then( (data)=> {
            except(data).to.equal({"message":{"stringValue":"\"a\"","valueType":"string","kind":"ObjectId","value":"a","path":"_id","reason":{},"name":"CastError","message":"Cast to ObjectId failed for value \"a\" (type string) at path \"_id\" for model \"car\""}})
        })
})


it("should return list of car in page 1, in count 10 with succsess", ()=>{
    request(app)
        .get('/api/cars')
        .then( (data)=> {
            except(data).to.equal({"page":1,"cars":[{"_id":"614503f9e5821b2a72e9f977","name":"a","price":707.3248769995593,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"},{"_id":"614503f9e5821b2a72e9f979","name":"b","price":817.8196158915647,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"},{"_id":"614503f9e5821b2a72e9f97b","name":"c","price":990.4496216183855,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"},{"_id":"614503fae5821b2a72e9f97d","name":"d","price":861.02595102448,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"},{"_id":"614503fae5821b2a72e9f97f","name":"e","price":577.7832972731278,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"},{"_id":"614503fae5821b2a72e9f981","name":"f","price":407.6783292004984,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"},{"_id":"614503fae5821b2a72e9f983","name":"g","price":645.4687381083215,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"},{"_id":"614503fae5821b2a72e9f985","name":"h","price":909.0484512323096,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"},{"_id":"614503fbe5821b2a72e9f987","name":"i","price":729.005322167728,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"},{"_id":"614503fbe5821b2a72e9f989","name":"j","price":809.2669427176103,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"}]})
        })
})

it("should return list of car in page 2, in count 5 with succsess", ()=>{
    request(app)
        .get('/api/cars?page=2')
        .then( (data)=> {
            except(data).to.equal({"page":"2","cars":[{"_id":"614503fbe5821b2a72e9f98b","name":"k","price":940.5905964329544,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"},{"_id":"614503fbe5821b2a72e9f98d","name":"l","price":927.9166584185261,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"},{"_id":"614503fbe5821b2a72e9f98f","name":"m","price":744.0845554763309,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"},{"_id":"614503fce5821b2a72e9f991","name":"n","price":885.808552324651,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"},{"_id":"614503fce5821b2a72e9f993","name":"o","price":793.1279902978642,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"}]})
        })
})

it("should return empty list of car in page 3 with succsess", ()=>{
    request(app)
        .get('/api/cars?page=3')
        .then( (data)=> {
            except(data).to.equal({"page":"3","cars":[]})
        })
})

it("should return list of car in page 2, by price inc with success", ()=>{
    request(app)
        .get('/api/cars?page=2&sort_by_price=1')
        .then( (data)=> {
            except(data).to.equal({"page":"2","cars":[{"_id":"614503fce5821b2a72e9f991","name":"n","price":885.808552324651,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"},{"_id":"614503fae5821b2a72e9f985","name":"h","price":909.0484512323096,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"},{"_id":"614503fbe5821b2a72e9f98d","name":"l","price":927.9166584185261,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"},{"_id":"614503fbe5821b2a72e9f98b","name":"k","price":940.5905964329544,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"},{"_id":"614503f9e5821b2a72e9f97b","name":"c","price":990.4496216183855,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"}]})
        })
})

it("should return list of car in page 2, by date inc with success", ()=>{
    request(app)
        .get('/api/cars?page=2&sort_by_date=1')
        .then( (data)=> {
            except(data).to.equal({"page":"2","cars":[{"_id":"614503fbe5821b2a72e9f98b","name":"k","price":940.5905964329544,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"},{"_id":"614503fbe5821b2a72e9f98d","name":"l","price":927.9166584185261,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"},{"_id":"614503fbe5821b2a72e9f98f","name":"m","price":744.0845554763309,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"},{"_id":"614503fce5821b2a72e9f991","name":"n","price":885.808552324651,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"},{"_id":"614503fce5821b2a72e9f993","name":"o","price":793.1279902978642,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"}]})
        })
})

it("should return list of car in page 2, by price desc with success", ()=>{
    request(app)
        .get('/api/cars?page=2&sort_by_price=1')
        .then( (data)=> {
            except(data).to.equal({"page":"2","cars":[{"_id":"614503fbe5821b2a72e9f987","name":"i","price":729.005322167728,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"},{"_id":"614503f9e5821b2a72e9f977","name":"a","price":707.3248769995593,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"},{"_id":"614503fae5821b2a72e9f983","name":"g","price":645.4687381083215,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"},{"_id":"614503fae5821b2a72e9f97f","name":"e","price":577.7832972731278,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"},{"_id":"614503fae5821b2a72e9f981","name":"f","price":407.6783292004984,"image_link":"https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"}]})
        })
})


it("should return message error because field description is missing", ()=>{
    request(app)
        .post('/api/cars', {name:"Yera", price: 10000000, images_link: ["h","e"]})
        .then( (data)=> {
            except(data).to.equal({"status":500,"message":{"errors":{"description":{"name":"ValidatorError","message":"Path `description` is required.","properties":{"message":"Path `description` is required.","type":"required","path":"description"},"kind":"required","path":"description"}},"_message":"car validation failed","name":"ValidationError","message":"car validation failed: description: Path `description` is required."}})
        })
})