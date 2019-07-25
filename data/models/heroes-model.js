const db = require('..//dbConfig.js');

module.exports = {
    insert,
    getAll
}

async function insert(hobbit) {
    const [id] = await db('heroes').insert(hobbit);
  
    return db('heroes').where({ id }).first();
  }
  
  async function update(id, changes) {
    return null;
  }
  
  function remove(id) {
    return null;
  }
  
  function getAll() {
    return db('heroes');
  }
  
  function findById(id) {
    return null;
  }
  