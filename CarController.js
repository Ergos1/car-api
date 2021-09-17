import Car from './Car.js'

class CarController{
    //Post
    async create(req, res){
        try{
            const {name, description, price, images_link} = req.body
            const car = await Car.create({name, description, price, images_link})
            res.status(200).json({status: 200, id: car._id})
        } catch(e){
            res.status(500).json({status: 500, message: e})
        }
    }
    //Get
    async getAll(req, res){
        try{
            let {page = 1, sort_by_price = 0, sort_by_date = 0} = req.query
            const cars = await Car.find({},
                {name: 1, image_link: {$arrayElemAt: ["$images_link", 0]}, price: 1})
                .skip((Number(page)-1)*10)
                .limit(10)
                .sort(
                    {   
                    ...(sort_by_date != 0 ? {create_date: Number(sort_by_date)} : {}),
                    ...(sort_by_price != 0 ? {price: Number(sort_by_price)}: {})
                    }
                )
            
            res.status(200).json({
                "page": page,
                "cars": cars
            })
        }catch(e){
            res.status(500).json({message: e})
        }
    }
    //Get by id
    async getOne(req, res){
        try{
            const {id} = req.params
            const {fields=-1} = req.query
            const car = await Car.findById(
                id, 
                {
                    name: 1, 
                    price: 1,  
                    ...(Number(fields)==1 ? {description:1, images_link: 1} : {image_link: {$arrayElemAt: ["$images_link", 0]}})
                }
            )
            if(!car){
                res.status(404).json({message:"Not found"})
            }
            return res.status(200).json(car)
        }catch(e){
            res.status(500).json({message: e})
        }
    }
    // Sorry for this
    // async fill(req, res){
    //     try{
    //         let i = 'a'.charCodeAt(0)
    //         for(; i < 15 + 'a'.charCodeAt(0); i++){
    //             await Car.create({
    //                 name: String.fromCharCode(i),
    //                 price: Math.random()*1000,
    //                 description: "lorem",
    //                 images_link: ["https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg", "https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg", "https://nastol.net/wallpaper/big/68/7070694-bugatti-veyron-sport-car-avto-doroga-pustynya.jpg"]
    //             })
    //         }
    //         res.json({message: "ALL GOOD"})
    //     } catch(e){
    //         res.json(e)
    //     }
    // }
}

export default new CarController()
