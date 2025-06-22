import {neon} from '@neondatabase/serverless';

import 'dotenv/config';

//creates sql connection using our db
export const sql = neon(process.env.DATABASE_URL);