import { CommentAdapter } from "../../insfraestructure/adapter/commentAdapter";

import { CreateHandler } from "../../domain/commands/create.handler";
import { AppCreateHandler } from "../commands/appCreate.handler";

import { GetAllHandler } from "../../domain/queries/getAllhandler";
import { AppGetAllHandler } from "../queries/AppgetAll.handler";

import { GetByIdHandler } from "../../domain/queries/getByidhandler";
import { AppGetByIdHander } from "../queries/app.get-byid.handler";

import { UpdateHandler } from "../../domain/commands/update.handler";
import { AppUpdateHandler } from "../commands/appUpdate.handler";

import { DeleteHandler } from "../../domain/commands/delete.handler";
import { AppDeleteHandler } from "../commands/appDelete.hamdler";

const adapter = new CommentAdapter();

export const container = {
    createCommand: new AppCreateHandler(new CreateHandler(adapter)),
    getAllQuery: new AppGetAllHandler(new GetAllHandler(adapter)),
    getByIdQuery: new AppGetByIdHander(new GetByIdHandler(adapter)),
    updateCommand: new AppUpdateHandler(new UpdateHandler(adapter)),
    deleteCommand: new AppDeleteHandler(new DeleteHandler(adapter)),
}