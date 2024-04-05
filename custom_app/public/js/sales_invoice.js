frm.fields_dict['items'].grid.get_field("item_code").get_query = function() {
    return {
        query: "custom_app.controllers.queries.item_query"
    }
};
