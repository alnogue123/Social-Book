import { NoteAdapter } from "../insfraestructure/adapter/NoteAdapter";

import { CreateHandler } from "../domain/commands/create.handler";
import { AppCreateHandler } from "../application/commands/appCreate.handler";

import { GetAllHandler } from "../domain/queries/getAllhandler";
import { AppGetAllHandler } from "../application/queries/AppgetAll.handler";

import { GetByIdHandler } from "../domain/queries/getByidhandler";
import { AppGetByIdHander } from "../application/queries/app.get-byid.handler";

import { UpdateHandler } from "../domain/commands/update.handler";
import { AppUpdateHandler } from "../application/commands/appUpdate.handler";

import { DeleteHandler } from "../domain/commands/delete.handler";
import { AppDeleteHandler } from "../application/commands/appDelete.hamdler";

const adapter = new NoteAdapter();

export const container = {
    createCommand: new AppCreateHandler(new CreateHandler(adapter)),
    getAllQuery: new AppGetAllHandler(new GetAllHandler(adapter)),
    getByIdQuery: new AppGetByIdHander(new GetByIdHandler(adapter)),
    updateCommand: new AppUpdateHandler(new UpdateHandler(adapter)),
    deleteCommand: new AppDeleteHandler(new DeleteHandler(adapter)),
}