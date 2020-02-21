// recipe_id, step_number, instruction
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("step")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("step").insert([
        {
          id: 1,
          recipe_id: 1,
          step_number: 1,
          instruction: "Slice chicken breasts into strips"
        },
        {
          id: 2,
          recipe_id: 1,
          step_number: 2,
          instruction:
            "In small bowl, mix: lime juice, garlic, chili powder, and cumin"
        },
        {
          id: 3,
          recipe_id: 1,
          step_number: 3,
          instruction: "Add chicken and marinate for 15 minutes."
        },
        {
          id: 4,
          recipe_id: 1,
          step_number: 4,
          instruction:
            "In skillet, cook onion and chicken with marinade for 3 minutes."
        },
        {
          id: 5,
          recipe_id: 1,
          step_number: 5,
          instruction: "Add peppers, saute for 3 minutes."
        },
        { id: 6, recipe_id: 1, step_number: 6, instruction: "Stir in salsa." },
        {
          id: 7,
          recipe_id: 1,
          step_number: 7,
          instruction: "Divide among tortillas."
        },
        {
          id: 8,
          recipe_id: 1,
          step_number: 8,
          instruction: "Top with cheese."
        },
        {
          id: 9,
          recipe_id: 1,
          step_number: 9,
          instruction: "Roll up and serve."
        }
      ]);
    });
};
