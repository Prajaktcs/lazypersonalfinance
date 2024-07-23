import {sql} from "drizzle-orm";
import {integer, sqliteTable, text} from "drizzle-orm/sqlite-core";


// Users table
export const users = sqliteTable('users', {
    id: integer('id').primaryKey({autoIncrement: true}),
    username: text('username').unique(),
    email: text('email').notNull(),
    created_at: integer('created_at', {mode: 'timestamp'}).notNull(),
    updated_at: integer('created_at', {mode: 'timestamp'}).default(sql`CURRENT_TIMESTAMP`)
});

// Categories table for organizing transactions
export const categories = sqliteTable('categories', {
    id: integer('id').primaryKey({autoIncrement: true}),
    name: text('name').notNull(),
    description: text('description'),
    created_at: integer('created_at', {mode: 'timestamp'}).notNull(),
    updated_at: integer('created_at', {mode: 'timestamp'}).default(sql`CURRENT_TIMESTAMP`)
});

export const accountTypes = sqliteTable('account_types', {
    id: integer('id').primaryKey({autoIncrement: true}),
    name: text('name').notNull(),
    created_at: integer('created_at', {mode: 'timestamp'}).notNull(),
    updated_at: integer('created_at', {mode: 'timestamp'}).default(sql`CURRENT_TIMESTAMP`)
})

// Accounts table to manage multiple accounts
export const accounts = sqliteTable('accounts', {
    id: integer('id').primaryKey({autoIncrement: true}),
    user_id: integer('user_id').references(() => users.id),
    name: text('name').notNull(),
    balance: integer('balance').notNull(),
    type: integer('type_id').references(() => accountTypes.id),
    created_at: integer('created_at', {mode: 'timestamp'}).notNull(),
    updated_at: integer('created_at', {mode: 'timestamp'}).default(sql`CURRENT_TIMESTAMP`)
});

// Transactions table for recording all transactions
export const transactions = sqliteTable('transactions', {
    id: integer('id').primaryKey({autoIncrement: true}),
    category_id: integer('category_id').references(() => categories.id),
    account_id: integer('account_id').references(() => accounts.id),
    amount: integer('amount').notNull(),
    description: text('description'),
    date: integer('date', {mode: 'timestamp'}).notNull(),
    created_at: integer('created_at', {mode: 'timestamp'}).notNull(),
    updated_at: integer('created_at', {mode: 'timestamp'}).default(sql`CURRENT_TIMESTAMP`)
});
