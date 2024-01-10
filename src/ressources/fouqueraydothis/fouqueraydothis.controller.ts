import { Router } from 'express'
import { FouquerayDoThisServices } from './fouqueraydothis.service'
import { LegumesServices } from '../legumes/legumes.service'

//Creation router
const FouqerayDoThisController = Router()

//Services nécéssaire
const service = new FouquerayDoThisServices()
const legumesService = new LegumesServices();


//Retourne si le produit passer en paramètre est réalisé chez Fouqeray
FouqerayDoThisController.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).send('ID non valide');
        }

        const legume = legumesService.finOneById(id);
        if (!legume) {
            return res.status(404).send('Légume introuvable');
        }
        var productsSearch = await service.findBio(legume.name);

        if(productsSearch) {
            res.send("Oui");
        } else {
            res.send("Non");
        }
    } catch (e) {
        res.status(500).send("Erreur lors de la récupération")
    }
  
})

export { FouqerayDoThisController }