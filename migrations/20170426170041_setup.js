exports.up = function (knex, Promise) {
  //user
  const p1 = knex.schema.createTable('user', function (table) {
    table.increments('id').primary();
    // 1,普通用户，2，有权限用户，3 。。。
    table.enu('type', [1, 2, 3]).default(1);
    table.string('name');
    table.string('password').default('123456');
    table.string('account').unique();
    table.timestamp('create_at').default(knex.fn.now());
    table.timestamp('update_at').nullable();
  });
  //question
  const p2 = knex.schema.createTable('question', function (table) {
    table.increments('id').primary();
    /*1 单选 ，2多选，3，简答*/
    table.enu('type', [1, 2, 3]).default(1);
    table.integer('create_by').default(1); //庄洪宇
    table.string('title').notNull();
    table.json('content').notNull();
    table.boolean('is_close').default(false);
    table.integer('min_score').default(0);
    table.integer('max_score').default(5);
    table.integer('low_line').default(3);
    table.integer('high_line').default(4);
    table.timestamp('create_at').default(knex.fn.now());
    table.timestamp('update_at').nullable();
  });
  // questionnaire
  const p3 = knex.schema.createTable('questionnaire', function (table) {
    table.increments('id').primary();
    table.integer('create_by').default(1);
    // 1 ,测评问卷 ，99 普通问卷
    table.enu('type', [1, 2, 3, 4, 99]).default(1);
    // 问卷描述
    table.text('description');
    //题目列表
    table.json('question_ids').notNull();
    table.timestamp('create_at').default(knex.fn.now());
    table.timestamp('update_at').nullable();
  });
  //answer
  const p4 = knex.schema.createTable('answer', function (table) {
    table.increments('id').primary();

    //答题人
    table.integer('answer_by').notNull();
    //被测人
    table.integer('answer_to').notNull();
    // 自评 1 ，测评上级 2  测评平级，3，测评下级,4 ,普通问卷 99
    table.enu('type', [1, 2, 3, 4, 99]).notNull();
    //问卷id
    table.integer('questionnaire_id').notNull();
    // 问卷答案
    table.json('result').notNull();
    table.timestamp('create_at').default(knex.fn.now());
    table.timestamp('update_at').nullable();
  });
// main title
  const p5 = knex.schema.createTable('main_title', function (table) {
    table.increments('id').primary();
    table.text('content').notNull();
    table.timestamp('create_at').default(knex.fn.now());
    table.timestamp('update_at').nullable();
  });

  // sub title
  const p6 = knex.schema.createTable('sub_title', function (table) {
    table.increments('id').primary();
    table.integer('parent_id').notNull();
    table.text('content').notNull();
    table.timestamp('create_at').default(knex.fn.now());
    table.timestamp('update_at').nullable();
  });
  //evalution
  const p7 = knex.schema.createTable('evalution', function (table) {
    table.increments('id').primary();
    // 答案id ，针对某条问卷答案的评价
    table.integer('answer_id').notNull();
    //评价者
    table.integer('create_by').notNull();
    table.text('content').notNull();
    table.timestamp('create_at').default(knex.fn.now());
    table.timestamp('update_at').nullable();
  });
  return Promise.all([p1, p2, p3, p4, p5, p6, p7]);

};

exports.down = function (knex, Promise) {
  const p1 = knex.schema.dropTable('user');
  const p2 = knex.schema.dropTable('question');
  const p3 = knex.schema.dropTable('questionnaire');
  const p4 = knex.schema.dropTable('answer')
  const p5 = knex.schema.dropTable('main_title');
  const p6 = knex.schema.dropTable('sub_title');
  const p7 = knex.schema.dropTable('evalution');
  return Promise.all([p1, p2, p3, p4, p5, p6, p7]);
};
