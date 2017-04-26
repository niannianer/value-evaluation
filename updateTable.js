exports.up = function (knex, Promise) {
  //user
  const p1 = knex.schema.createTable('user', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.string('password');
    table.string('account');
    table.timestamp('creat_at').default(knex.fn.now());
    table.timestamp('update_at').default(knex.fn.now());
  });
//question
  const p2 = knex.schema.createTable('question', function (table) {
    table.increments('id').primary();
    /*1 单选 ，2多选，3，简答*/
    table.enu('type', [1, 2, 3]);
    table.string('create_by');
    table.json('content');
    table.integer('min_score').default(999);
    table.integer('max_score').default(0);
    table.timestamp('creat_at').default(knex.fn.now());
    table.timestamp('update_at').default(knex.fn.now());
  });
  // questionnaire
  const p3 = knex.schema.createTable('questionnaire', function (table) {
    table.increments('id').primary();
    table.string('create_by');
    //题目列表
    table.json('question_ids');
    table.timestamp('creat_at').default(knex.fn.now());
    table.timestamp('update_at').default(knex.fn.now());
  });
  //answer
  const p4 = knex.schema.createTable('answer', function (table) {
    table.increments('id').primary();
    table.string('create_by');
    table.string('answer_by');
    table.string('answer_to');
    // -1 ，测评上级 0 测评平级，0，测评下级
    table.enu('type', [-1, 0, 1]);

    table.timestamp('creat_at').default(knex.fn.now());
    table.timestamp('update_at').default(knex.fn.now());
  });
// main title
  const p5 = knex.schema.createTable('main_title', function (table) {
    table.increments('id').primary();
    table.string('create_by');
    table.text('content');
    table.timestamp('creat_at').default(knex.fn.now());
    table.timestamp('update_at').default(knex.fn.now());
  });

  // sub title
  const p6 = knex.schema.createTable('sub_title', function (table) {
    table.increments('id').primary();
    table.integer('parent_id');
    table.string('create_by');
    table.text('content');
    table.timestamp('creat_at').default(knex.fn.now());
    table.timestamp('update_at').default(knex.fn.now());
  });
  // advice
  const p7 = knex.schema.createTable('advice', function (table) {
    table.increments('id').primary();
    table.string('create_by');
    table.integer('questionnaire_id');
    table.text('content');
    table.timestamp('creat_at').default(knex.fn.now());
    table.timestamp('update_at').default(knex.fn.now());

  });
  //evalution
  const p8 = knex.schema.createTable('evalution', function (table) {
    table.increments('id').primary();
    table.integer('advice_id');
    table.string('create_by');
    table.text('content');
    table.timestamp('creat_at').default(knex.fn.now());
    table.timestamp('update_at').default(knex.fn.now());
  });
  return Promise.all([p1, p2, p3, p4, p5, p6, p7, p8]);

};

exports.down = function (knex, Promise) {
  const p1 = knex.schema.dropTable('user');
  const p2 = knex.schema.dropTable('question');
  const p3 = knex.schema.dropTable('questionnaire');
  const p4 = knex.schema.dropTable('answer')
  const p5 = knex.schema.dropTable('main_title');
  const p6 = knex.schema.dropTable('sub_title');
  const p7 = knex.schema.dropTable('advice');
  const p8 = knex.schema.dropTable('evalution');
  return Promise.all([p1, p2, p3, p4, p5, p6, p7, p8]);
};
