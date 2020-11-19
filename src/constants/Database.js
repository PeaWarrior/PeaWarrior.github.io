import React from 'react';
import { SiPostgresql, SiMysql, SiMongodb } from 'react-icons/si';

export const Database = [
  {
    id: 1,
    name: 'Postgresql',
    icon: <SiPostgresql fill='#336791' title='PostgreSQL' />,
  },
  {
    id: 2,
    name: 'MySQL',
    icon: <SiMysql fill='#4479A1' title='MySQL' />,
  },
  {
    id: 3,
    name: 'MongoDB',
    icon: <SiMongodb fill='#47A248' title='MongoDB' />,
  },
];
