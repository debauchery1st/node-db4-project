const db = require("../data/db-config.js");

/* 
  name   common_mass(FK)   category_id(FK)
  
  milk       cup         dairy

*/

module.exports = {
  addElement, // CREATE
  getElement, // REQUEST
  getElementById, // ''
  updateElement, // UPDATE
  removeElement // DELETE
};

function addElement(element) {
  return db("element").insert(element, "id");
}

function getElement() {
  return db("element");
}

function getElementById(id) {
  return db("element").where({ id });
}

function updateElement(el, id) {
  if (!id) {
    return { error: "id required" };
  }
  return db("element")
    .update(el)
    .where({ id })
    .then(() => getElementById(id));
}

function removeElement(id) {
  return getElementById(id).then(toBeDeleted => {
    return db("element")
      .del()
      .where({ id })
      .then(() => toBeDeleted);
  });
}
