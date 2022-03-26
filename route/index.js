const renderMW = require('../middleware/renderMW');
const getContainersMW = require('../middleware/container/getContainersMW');
const getContainerMW = require('../middleware/container/getContainerMW');
const saveContainerMW = require('../middleware/container/saveContainerMW');
const deleteContainerMW = require('../middleware/container/deleteContainerMW');
const getItemsMW = require('../middleware/item/getItemsMW');
const getItemMW = require('../middleware/item/getItemMW');
const saveItemMW = require('../middleware/item/saveItemMW');
const deleteItemMW = require('../middleware/item/deleteItemMW');

const ContainerModel = require('../model/container');
const ItemModel = require('../model/item');

module.exports = function (app) {
    const objRepo = {
        ContainerModel: ContainerModel,
        ItemModel: ItemModel
    }

    app.get(
        '/',
        getContainersMW(objRepo),
        renderMW(objRepo, 'index')
    );
    app.use(
        '/container/new',
        saveContainerMW(objRepo),
        renderMW(objRepo)
    );
    app.use(
        '/container/edit/:containerid',
        getContainerMW(objRepo),
        saveContainerMW(objRepo),
        renderMW(objRepo)
    );
    app.get(
        '/container/delete/:containerid',
        getContainerMW(objRepo),
        deleteContainerMW(objRepo),
        renderMW(objRepo)
    );

    app.get(
        '/container/:containerid',
        getContainerMW(objRepo),
        getItemsMW(objRepo),
        renderMW(objRepo, 'container')
    );
    app.use(
        '/container/:containerid/newitem',
        getContainerMW(objRepo),
        saveItemMW(objRepo),
        renderMW(objRepo)
    );
    app.use(
        '/container/:containerid/edititems/',
        getContainerMW(objRepo),
        getItemsMW(objRepo),
        saveItemMW(objRepo),
        renderMW(objRepo)
    );
    app.get(
        '/container/:containerid/deleteitem/:itemid',
        getContainerMW(objRepo),
        getItemMW(objRepo),
        deleteItemMW(objRepo),
        renderMW(objRepo)
    );
}