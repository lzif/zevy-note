import { Kysely } from 'kysely';
import { XataDialect, type Model } from '@xata.io/kysely';
import { XataClient, type DatabaseSchema } from './xata';
import { XATA_DATABASE_URL, XATA_API_KEY, XATA_BRANCH } from '$env/static/private';

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
	if (instance) return instance;

	instance = new XataClient({
		databaseURL: XATA_DATABASE_URL,
		apiKey: XATA_API_KEY,
		branch: XATA_BRANCH
	});
	return instance;
};

const db = new Kysely<Model<DatabaseSchema>>({
	dialect: new XataDialect({ xata: getXataClient() })
});

export default db;
