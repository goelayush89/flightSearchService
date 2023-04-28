const { CityService } = require('../services/index.js');
const cityService = new CityService();
//post (reqbody)
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'successfully created a city',
            err: {}
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to create a city',
            err: error
        })

    }
};
//delete (params.id)
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'successfully deleted a city',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'unable to delete a city',
            err: error
        })
    }
};

//get -> city/:id
const get = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        console.log(city);
        return res.status(200).json({
            data: city,
            success: true,
            message: 'successfully fetched a city',
            err: {}
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to fetch a city',
            err: error
        })

    }
};

//patch - >./city/:id  data
const update = async (req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'successfully updated a city',
            err: {}
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to update a city',
            err: error
        })

    }
};

const getAll = async (req, res) => {
    try {
        const response = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'successfully fetched all the cities',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to fetch  cities',
            err: error
        })
    }
}
module.exports = {
    create,
    destroy,
    update,
    get,
    getAll
};
