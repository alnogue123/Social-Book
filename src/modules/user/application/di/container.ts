import { UserAdapter } from "../../insfraestructure/adapter/UserAdapter";

import { CreateHandler } from "../../domain/commands/create.handler";


import { GetAllHandler } from "../../domain/queries/getAllhandler";
import { AppGetAllHandler } from "../queries/AppgetAll.handler";

import { AppGetByQueryHandler } from "../queries/app.getbyqueryhandler";
import { GetByQueryHandler } from "../../domain/queries/getbyqueryhandler";

import { GetByIdHandler } from "../../domain/queries/getByidhandler";
import { AppGetByIdHander } from "../queries/app.get-byid.handler";

import { UpdateHandler } from "../../domain/commands/update.handler";


import { DeleteHandler } from "../../domain/commands/delete.handler";
import { AppCreateHandler } from "../commands/create/appCreate.handler";
import { AppUpdateHandler } from "../commands/update/appUpdate.handler";
import { AppDeleteHandler } from "../commands/delete/appDelete.hamdler";


const adapter = new UserAdapter();

export const container = {
    createCommand: new AppCreateHandler(new CreateHandler(adapter)),
    getAllQuery: new AppGetAllHandler(new GetAllHandler(adapter)),
    GetByQuery: new AppGetByQueryHandler(new GetByQueryHandler(adapter)),
    getByIdQuery: new AppGetByIdHander(new GetByIdHandler(adapter)),
    updateCommand: new AppUpdateHandler(new UpdateHandler(adapter)),
    deleteCommand: new AppDeleteHandler(new DeleteHandler(adapter)),
}