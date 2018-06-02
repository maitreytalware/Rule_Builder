var conditions, actions, nameField, ageField, occupationField, submit, allData;
(function($) {
  var occupationOptions = [ "Software Engineer", "Biz Dev", "Marketing" ];

  function getInitialData() {
    return {"variables": [
            { "name": "giftcard_id",
              "label": "The id of giftcard",
              "field_type": "numeric",
              "options": []},
 
            { "name": "giftcard_number",
              "label": "the number of giftcard",
              "field_type": "string",
              "options": []},
 
            { "name": "giftcard_type",
              "label": "the giftcard type",
              "field_type": "select",
              "options": ["digital","physical"]},
 
            { "name": "giftcard_amount",
              "label": "the giftcard amount",
              "field_type": "numeric",
              "options": []},                            


            { "name": "current_month",
              "label": "Current Month",
              "field_type": "string",
              "options": []},

            { "name": "goes_well_with",
              "label": "Goes Well With",
              "field_type": "select",
              "options": ["Eggnog", "Cookies", "Beef Jerkey"]}

                        ],
          "actions": [
            { "name": "put_on_sale",
              "label": "Put on sale",
              "params": [{name: "sale_percentage", "label": "Sale percentage", "fieldType" : "numeric"}]},
            { "name": "order_more",
              "label": "Order more",
              "params": [{name: "number_to_order", "label": "Number to order", "fieldType" : "numeric"}]}
          ],
          "variable_type_operators": {
            "numeric": [ {"name": "equal_to",
                          "label": "is Equal to",
                          "input_type": "numeric"},
                         {"name": "less_than",
                          "label": "is Less than",
                          "input_type": "numeric"},
                         {"name": "greater_than",
                          "label": "is Greater than",
                          "input_type": "numeric"}],
            "string": [ { "name": "equal_to",
                          "label": "is Equal to",
                          "input_type": "text"},
                        { "name": "not_equal",
                          "label": "is Not Equal to",
                          "input_type": "text"}],
            "select": [ { "name": "contains",
                          "label": "is",
                          "input_type": "select"},
                        { "name": "does_not_contain",
                          "label": "is not",
                          "input_type": "select"}]
          }
    };
  };

  function onReady() {
    conditions = $("#conditions");
    actions = $("#actions");
    nameField = $("#nameField");
    occupationField = $("#occupationField");
    ageField = $("#ageField");
    submit = $("#submit");
    allData = getInitialData();

    initializeConditions(allData);
    initializeActions(allData);
    initializeForm();
  }

  function initializeConditions(data) {
    conditions.conditionsBuilder(data)
  }

  function initializeActions(data) {
    actions.actionsBuilder(data);
  }

  function initializeForm() {
    for(var i=0; i < occupationOptions.length; i++) {
      var o = occupationOptions[i];
      occupationField.append($("<option>", {value: o.name, text: o.label}));
    }

    submit.click(function(e) {
      e.preventDefault();
      console.log("CONDITIONS");
      console.log(JSON.stringify(conditions.conditionsBuilder("data")));
      //console.log(conditions.conditionsBuilder("data"));

      console.log("ACTIONS");
      console.log(JSON.stringify(actions.actionsBuilder("data")));
    });
  }
  $(onReady);
})(jQuery);
