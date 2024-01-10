import express from 'express';
import { config } from '../config';
import { LegumesController } from './ressources/legumes/legumes.controller';
import { UnknownRoutesHandler } from './middlewares/unknowRoutes.handler';
import { ExceptionsHandler } from './middlewares/exceptions.handler';
import { ProductFromFouquerayController } from './ressources/fouqueraygregate/productfouqueray.controller';
import { FouqerayDoThisController } from './ressources/fouqueraydothis/fouqueraydothis.controller';

const app = express();

app.use(express.json())

app.use('/legumes', LegumesController)
app.use('/fouqueray', ProductFromFouquerayController)
app.use('/fouquerayDoThis', FouqerayDoThisController);
app.all('*', UnknownRoutesHandler)




// Gestion des erreurs, doit être le dernier `app.use`
app.use(ExceptionsHandler)

// Démarrage du serveur
app.listen(config.API_PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${config.API_PORT}`);
});
