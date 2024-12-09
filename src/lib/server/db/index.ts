import { Kysely } from "kysely";
import { XataDialect, type Model } from "@xata.io/kysely";
import { type DatabaseSchema, getXataClient } from "./xata";
const xata = getXataClient();

const db = new Kysely<Model<DatabaseSchema>>({
  dialect: new XataDialect({ xata }),
});

export default db;
