import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', function (table) {
    table.uuid('uuid').defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('name');
    table.string('email').notNullable().unique()
    table.string('password').notNullable();
    table.timestamps();
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users')
}

