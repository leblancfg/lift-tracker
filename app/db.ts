// db.ts

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('gym_tracker.db');

const initializeDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INT, weight INT, sex STRING)',
      [],
      () => {
        console.log('User table created successfully');
      },
      (_, error) => {
        console.error('Error creating user table: ', error);
      }
    );
  });
};

export { db, initializeDatabase };
