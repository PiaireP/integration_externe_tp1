import { Router } from 'express'
import { ProductFromFouquerayServices } from './productfouqueray.service'
import { BadRequestException, NotFoundException } from '../../utils/exceptions'

//Routeur
const ProductFromFouquerayController = Router()

//Service nécéssaire
const service = new ProductFromFouquerayServices()

//Donne tous ce qui est produit chez Fouqueray
ProductFromFouquerayController.get('/', async (req, res) => {
    try {
        const data = await service.findAllProduct();
        return res
            .status(200)
            .json(data)
    } catch (e) {
        res.status(500).send("Erreur lors de la récupération")
    }
  
})

export { ProductFromFouquerayController }