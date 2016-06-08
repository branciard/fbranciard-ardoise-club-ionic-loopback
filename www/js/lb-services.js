// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {'use strict';

var urlBase = "http://fbranciard-coursera-loopback-api.mybluemix.net/api";
var authHeader = 'authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.DailyBoard
 * @header lbServices.DailyBoard
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `DailyBoard` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "DailyBoard",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/DailyBoards/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#prototype$__findById__dailyItems
         * @methodOf lbServices.DailyBoard
         *
         * @description
         *
         * Find a related item by id for dailyItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for dailyItems
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        "prototype$__findById__dailyItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/DailyBoards/:id/dailyItems/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#prototype$__destroyById__dailyItems
         * @methodOf lbServices.DailyBoard
         *
         * @description
         *
         * Delete a related item by id for dailyItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for dailyItems
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__dailyItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/DailyBoards/:id/dailyItems/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#prototype$__updateById__dailyItems
         * @methodOf lbServices.DailyBoard
         *
         * @description
         *
         * Update a related item by id for dailyItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for dailyItems
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        "prototype$__updateById__dailyItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/DailyBoards/:id/dailyItems/:fk",
          method: "PUT"
        },

        // INTERNAL. Use DailyBoard.shop() instead.
        "prototype$__get__shop": {
          url: urlBase + "/DailyBoards/:id/shop",
          method: "GET"
        },

        // INTERNAL. Use DailyBoard.profiles.findById() instead.
        "prototype$__findById__profiles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/DailyBoards/:id/profiles/:fk",
          method: "GET"
        },

        // INTERNAL. Use DailyBoard.profiles.destroyById() instead.
        "prototype$__destroyById__profiles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/DailyBoards/:id/profiles/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use DailyBoard.profiles.updateById() instead.
        "prototype$__updateById__profiles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/DailyBoards/:id/profiles/:fk",
          method: "PUT"
        },

        // INTERNAL. Use DailyBoard.profiles.link() instead.
        "prototype$__link__profiles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/DailyBoards/:id/profiles/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use DailyBoard.profiles.unlink() instead.
        "prototype$__unlink__profiles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/DailyBoards/:id/profiles/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use DailyBoard.profiles.exists() instead.
        "prototype$__exists__profiles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/DailyBoards/:id/profiles/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#prototype$__get__dailyItems
         * @methodOf lbServices.DailyBoard
         *
         * @description
         *
         * Queries dailyItems of DailyBoard.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        "prototype$__get__dailyItems": {
          isArray: true,
          url: urlBase + "/DailyBoards/:id/dailyItems",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#prototype$__create__dailyItems
         * @methodOf lbServices.DailyBoard
         *
         * @description
         *
         * Creates a new instance in dailyItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        "prototype$__create__dailyItems": {
          url: urlBase + "/DailyBoards/:id/dailyItems",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#prototype$__delete__dailyItems
         * @methodOf lbServices.DailyBoard
         *
         * @description
         *
         * Deletes all dailyItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__dailyItems": {
          url: urlBase + "/DailyBoards/:id/dailyItems",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#prototype$__count__dailyItems
         * @methodOf lbServices.DailyBoard
         *
         * @description
         *
         * Counts dailyItems of DailyBoard.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__dailyItems": {
          url: urlBase + "/DailyBoards/:id/dailyItems/count",
          method: "GET"
        },

        // INTERNAL. Use DailyBoard.profiles() instead.
        "prototype$__get__profiles": {
          isArray: true,
          url: urlBase + "/DailyBoards/:id/profiles",
          method: "GET"
        },

        // INTERNAL. Use DailyBoard.profiles.create() instead.
        "prototype$__create__profiles": {
          url: urlBase + "/DailyBoards/:id/profiles",
          method: "POST"
        },

        // INTERNAL. Use DailyBoard.profiles.destroyAll() instead.
        "prototype$__delete__profiles": {
          url: urlBase + "/DailyBoards/:id/profiles",
          method: "DELETE"
        },

        // INTERNAL. Use DailyBoard.profiles.count() instead.
        "prototype$__count__profiles": {
          url: urlBase + "/DailyBoards/:id/profiles/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#create
         * @methodOf lbServices.DailyBoard
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/DailyBoards",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#createMany
         * @methodOf lbServices.DailyBoard
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/DailyBoards",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#upsert
         * @methodOf lbServices.DailyBoard
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/DailyBoards",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#exists
         * @methodOf lbServices.DailyBoard
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/DailyBoards/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#findById
         * @methodOf lbServices.DailyBoard
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/DailyBoards/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#find
         * @methodOf lbServices.DailyBoard
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/DailyBoards",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#findOne
         * @methodOf lbServices.DailyBoard
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/DailyBoards/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#updateAll
         * @methodOf lbServices.DailyBoard
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/DailyBoards/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#deleteById
         * @methodOf lbServices.DailyBoard
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/DailyBoards/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#count
         * @methodOf lbServices.DailyBoard
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/DailyBoards/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#prototype$updateAttributes
         * @methodOf lbServices.DailyBoard
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/DailyBoards/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#createChangeStream
         * @methodOf lbServices.DailyBoard
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/DailyBoards/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Shop.dailyBoard() instead.
        "::get::Shop::dailyBoard": {
          url: urlBase + "/Shops/:id/dailyBoard",
          method: "GET"
        },

        // INTERNAL. Use Shop.dailyBoard.create() instead.
        "::create::Shop::dailyBoard": {
          url: urlBase + "/Shops/:id/dailyBoard",
          method: "POST"
        },

        // INTERNAL. Use Shop.dailyBoard.createMany() instead.
        "::createMany::Shop::dailyBoard": {
          isArray: true,
          url: urlBase + "/Shops/:id/dailyBoard",
          method: "POST"
        },

        // INTERNAL. Use Shop.dailyBoard.update() instead.
        "::update::Shop::dailyBoard": {
          url: urlBase + "/Shops/:id/dailyBoard",
          method: "PUT"
        },

        // INTERNAL. Use Shop.dailyBoard.destroy() instead.
        "::destroy::Shop::dailyBoard": {
          url: urlBase + "/Shops/:id/dailyBoard",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.dailyBoards.findById() instead.
        "::findById::Profile::dailyBoards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/dailyBoards/:fk",
          method: "GET"
        },

        // INTERNAL. Use Profile.dailyBoards.destroyById() instead.
        "::destroyById::Profile::dailyBoards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/dailyBoards/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.dailyBoards.updateById() instead.
        "::updateById::Profile::dailyBoards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/dailyBoards/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Profile.dailyBoards.link() instead.
        "::link::Profile::dailyBoards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/dailyBoards/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Profile.dailyBoards.unlink() instead.
        "::unlink::Profile::dailyBoards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/dailyBoards/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.dailyBoards.exists() instead.
        "::exists::Profile::dailyBoards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/dailyBoards/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Profile.dailyBoards() instead.
        "::get::Profile::dailyBoards": {
          isArray: true,
          url: urlBase + "/Profiles/:id/dailyBoards",
          method: "GET"
        },

        // INTERNAL. Use Profile.dailyBoards.create() instead.
        "::create::Profile::dailyBoards": {
          url: urlBase + "/Profiles/:id/dailyBoards",
          method: "POST"
        },

        // INTERNAL. Use Profile.dailyBoards.createMany() instead.
        "::createMany::Profile::dailyBoards": {
          isArray: true,
          url: urlBase + "/Profiles/:id/dailyBoards",
          method: "POST"
        },

        // INTERNAL. Use Profile.dailyBoards.destroyAll() instead.
        "::delete::Profile::dailyBoards": {
          url: urlBase + "/Profiles/:id/dailyBoards",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.dailyBoards.count() instead.
        "::count::Profile::dailyBoards": {
          url: urlBase + "/Profiles/:id/dailyBoards/count",
          method: "GET"
        },

        // INTERNAL. Use DailyBoardSubscription.dailyBoard() instead.
        "::get::DailyBoardSubscription::dailyBoard": {
          url: urlBase + "/DailyBoardSubscriptions/:id/dailyBoard",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#updateOrCreate
         * @methodOf lbServices.DailyBoard
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#update
         * @methodOf lbServices.DailyBoard
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#destroyById
         * @methodOf lbServices.DailyBoard
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#removeById
         * @methodOf lbServices.DailyBoard
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.DailyBoard#modelName
    * @propertyOf lbServices.DailyBoard
    * @description
    * The name of the model represented by this $resource,
    * i.e. `DailyBoard`.
    */
    R.modelName = "DailyBoard";


        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#shop
         * @methodOf lbServices.DailyBoard
         *
         * @description
         *
         * Fetches belongsTo relation shop.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R.shop = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::get::DailyBoard::shop"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.DailyBoard.profiles
     * @header lbServices.DailyBoard.profiles
     * @object
     * @description
     *
     * The object `DailyBoard.profiles` groups methods
     * manipulating `Profile` instances related to `DailyBoard`.
     *
     * Call {@link lbServices.DailyBoard#profiles DailyBoard.profiles()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#profiles
         * @methodOf lbServices.DailyBoard
         *
         * @description
         *
         * Queries profiles of DailyBoard.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        R.profiles = function() {
          var TargetResource = $injector.get("Profile");
          var action = TargetResource["::get::DailyBoard::profiles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard.profiles#count
         * @methodOf lbServices.DailyBoard.profiles
         *
         * @description
         *
         * Counts profiles of DailyBoard.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.profiles.count = function() {
          var TargetResource = $injector.get("Profile");
          var action = TargetResource["::count::DailyBoard::profiles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard.profiles#create
         * @methodOf lbServices.DailyBoard.profiles
         *
         * @description
         *
         * Creates a new instance in profiles of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        R.profiles.create = function() {
          var TargetResource = $injector.get("Profile");
          var action = TargetResource["::create::DailyBoard::profiles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard.profiles#createMany
         * @methodOf lbServices.DailyBoard.profiles
         *
         * @description
         *
         * Creates a new instance in profiles of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        R.profiles.createMany = function() {
          var TargetResource = $injector.get("Profile");
          var action = TargetResource["::createMany::DailyBoard::profiles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard.profiles#destroyAll
         * @methodOf lbServices.DailyBoard.profiles
         *
         * @description
         *
         * Deletes all profiles of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.profiles.destroyAll = function() {
          var TargetResource = $injector.get("Profile");
          var action = TargetResource["::delete::DailyBoard::profiles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard.profiles#destroyById
         * @methodOf lbServices.DailyBoard.profiles
         *
         * @description
         *
         * Delete a related item by id for profiles.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for profiles
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.profiles.destroyById = function() {
          var TargetResource = $injector.get("Profile");
          var action = TargetResource["::destroyById::DailyBoard::profiles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard.profiles#exists
         * @methodOf lbServices.DailyBoard.profiles
         *
         * @description
         *
         * Check the existence of profiles relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for profiles
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        R.profiles.exists = function() {
          var TargetResource = $injector.get("Profile");
          var action = TargetResource["::exists::DailyBoard::profiles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard.profiles#findById
         * @methodOf lbServices.DailyBoard.profiles
         *
         * @description
         *
         * Find a related item by id for profiles.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for profiles
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        R.profiles.findById = function() {
          var TargetResource = $injector.get("Profile");
          var action = TargetResource["::findById::DailyBoard::profiles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard.profiles#link
         * @methodOf lbServices.DailyBoard.profiles
         *
         * @description
         *
         * Add a related item by id for profiles.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for profiles
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        R.profiles.link = function() {
          var TargetResource = $injector.get("Profile");
          var action = TargetResource["::link::DailyBoard::profiles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard.profiles#unlink
         * @methodOf lbServices.DailyBoard.profiles
         *
         * @description
         *
         * Remove the profiles relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for profiles
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.profiles.unlink = function() {
          var TargetResource = $injector.get("Profile");
          var action = TargetResource["::unlink::DailyBoard::profiles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard.profiles#updateById
         * @methodOf lbServices.DailyBoard.profiles
         *
         * @description
         *
         * Update a related item by id for profiles.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for profiles
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        R.profiles.updateById = function() {
          var TargetResource = $injector.get("Profile");
          var action = TargetResource["::updateById::DailyBoard::profiles"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.NoWasteBoard
 * @header lbServices.NoWasteBoard
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `NoWasteBoard` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "NoWasteBoard",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/NoWasteBoards/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#prototype$__findById__noWasteItems
         * @methodOf lbServices.NoWasteBoard
         *
         * @description
         *
         * Find a related item by id for noWasteItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for noWasteItems
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        "prototype$__findById__noWasteItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/NoWasteBoards/:id/noWasteItems/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#prototype$__destroyById__noWasteItems
         * @methodOf lbServices.NoWasteBoard
         *
         * @description
         *
         * Delete a related item by id for noWasteItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for noWasteItems
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__noWasteItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/NoWasteBoards/:id/noWasteItems/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#prototype$__updateById__noWasteItems
         * @methodOf lbServices.NoWasteBoard
         *
         * @description
         *
         * Update a related item by id for noWasteItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for noWasteItems
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        "prototype$__updateById__noWasteItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/NoWasteBoards/:id/noWasteItems/:fk",
          method: "PUT"
        },

        // INTERNAL. Use NoWasteBoard.shop() instead.
        "prototype$__get__shop": {
          url: urlBase + "/NoWasteBoards/:id/shop",
          method: "GET"
        },

        // INTERNAL. Use NoWasteBoard.profiles.findById() instead.
        "prototype$__findById__profiles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/NoWasteBoards/:id/profiles/:fk",
          method: "GET"
        },

        // INTERNAL. Use NoWasteBoard.profiles.destroyById() instead.
        "prototype$__destroyById__profiles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/NoWasteBoards/:id/profiles/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use NoWasteBoard.profiles.updateById() instead.
        "prototype$__updateById__profiles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/NoWasteBoards/:id/profiles/:fk",
          method: "PUT"
        },

        // INTERNAL. Use NoWasteBoard.profiles.link() instead.
        "prototype$__link__profiles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/NoWasteBoards/:id/profiles/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use NoWasteBoard.profiles.unlink() instead.
        "prototype$__unlink__profiles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/NoWasteBoards/:id/profiles/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use NoWasteBoard.profiles.exists() instead.
        "prototype$__exists__profiles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/NoWasteBoards/:id/profiles/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#prototype$__get__noWasteItems
         * @methodOf lbServices.NoWasteBoard
         *
         * @description
         *
         * Queries noWasteItems of NoWasteBoard.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        "prototype$__get__noWasteItems": {
          isArray: true,
          url: urlBase + "/NoWasteBoards/:id/noWasteItems",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#prototype$__create__noWasteItems
         * @methodOf lbServices.NoWasteBoard
         *
         * @description
         *
         * Creates a new instance in noWasteItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        "prototype$__create__noWasteItems": {
          url: urlBase + "/NoWasteBoards/:id/noWasteItems",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#prototype$__delete__noWasteItems
         * @methodOf lbServices.NoWasteBoard
         *
         * @description
         *
         * Deletes all noWasteItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__noWasteItems": {
          url: urlBase + "/NoWasteBoards/:id/noWasteItems",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#prototype$__count__noWasteItems
         * @methodOf lbServices.NoWasteBoard
         *
         * @description
         *
         * Counts noWasteItems of NoWasteBoard.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__noWasteItems": {
          url: urlBase + "/NoWasteBoards/:id/noWasteItems/count",
          method: "GET"
        },

        // INTERNAL. Use NoWasteBoard.profiles() instead.
        "prototype$__get__profiles": {
          isArray: true,
          url: urlBase + "/NoWasteBoards/:id/profiles",
          method: "GET"
        },

        // INTERNAL. Use NoWasteBoard.profiles.create() instead.
        "prototype$__create__profiles": {
          url: urlBase + "/NoWasteBoards/:id/profiles",
          method: "POST"
        },

        // INTERNAL. Use NoWasteBoard.profiles.destroyAll() instead.
        "prototype$__delete__profiles": {
          url: urlBase + "/NoWasteBoards/:id/profiles",
          method: "DELETE"
        },

        // INTERNAL. Use NoWasteBoard.profiles.count() instead.
        "prototype$__count__profiles": {
          url: urlBase + "/NoWasteBoards/:id/profiles/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#create
         * @methodOf lbServices.NoWasteBoard
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/NoWasteBoards",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#createMany
         * @methodOf lbServices.NoWasteBoard
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/NoWasteBoards",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#upsert
         * @methodOf lbServices.NoWasteBoard
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/NoWasteBoards",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#exists
         * @methodOf lbServices.NoWasteBoard
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/NoWasteBoards/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#findById
         * @methodOf lbServices.NoWasteBoard
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/NoWasteBoards/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#find
         * @methodOf lbServices.NoWasteBoard
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/NoWasteBoards",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#findOne
         * @methodOf lbServices.NoWasteBoard
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/NoWasteBoards/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#updateAll
         * @methodOf lbServices.NoWasteBoard
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/NoWasteBoards/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#deleteById
         * @methodOf lbServices.NoWasteBoard
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/NoWasteBoards/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#count
         * @methodOf lbServices.NoWasteBoard
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/NoWasteBoards/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#prototype$updateAttributes
         * @methodOf lbServices.NoWasteBoard
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/NoWasteBoards/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#createChangeStream
         * @methodOf lbServices.NoWasteBoard
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/NoWasteBoards/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Shop.noWasteBoard() instead.
        "::get::Shop::noWasteBoard": {
          url: urlBase + "/Shops/:id/noWasteBoard",
          method: "GET"
        },

        // INTERNAL. Use Shop.noWasteBoard.create() instead.
        "::create::Shop::noWasteBoard": {
          url: urlBase + "/Shops/:id/noWasteBoard",
          method: "POST"
        },

        // INTERNAL. Use Shop.noWasteBoard.createMany() instead.
        "::createMany::Shop::noWasteBoard": {
          isArray: true,
          url: urlBase + "/Shops/:id/noWasteBoard",
          method: "POST"
        },

        // INTERNAL. Use Shop.noWasteBoard.update() instead.
        "::update::Shop::noWasteBoard": {
          url: urlBase + "/Shops/:id/noWasteBoard",
          method: "PUT"
        },

        // INTERNAL. Use Shop.noWasteBoard.destroy() instead.
        "::destroy::Shop::noWasteBoard": {
          url: urlBase + "/Shops/:id/noWasteBoard",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.noWasteBoards.findById() instead.
        "::findById::Profile::noWasteBoards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/noWasteBoards/:fk",
          method: "GET"
        },

        // INTERNAL. Use Profile.noWasteBoards.destroyById() instead.
        "::destroyById::Profile::noWasteBoards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/noWasteBoards/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.noWasteBoards.updateById() instead.
        "::updateById::Profile::noWasteBoards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/noWasteBoards/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Profile.noWasteBoards.link() instead.
        "::link::Profile::noWasteBoards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/noWasteBoards/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Profile.noWasteBoards.unlink() instead.
        "::unlink::Profile::noWasteBoards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/noWasteBoards/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.noWasteBoards.exists() instead.
        "::exists::Profile::noWasteBoards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/noWasteBoards/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Profile.noWasteBoards() instead.
        "::get::Profile::noWasteBoards": {
          isArray: true,
          url: urlBase + "/Profiles/:id/noWasteBoards",
          method: "GET"
        },

        // INTERNAL. Use Profile.noWasteBoards.create() instead.
        "::create::Profile::noWasteBoards": {
          url: urlBase + "/Profiles/:id/noWasteBoards",
          method: "POST"
        },

        // INTERNAL. Use Profile.noWasteBoards.createMany() instead.
        "::createMany::Profile::noWasteBoards": {
          isArray: true,
          url: urlBase + "/Profiles/:id/noWasteBoards",
          method: "POST"
        },

        // INTERNAL. Use Profile.noWasteBoards.destroyAll() instead.
        "::delete::Profile::noWasteBoards": {
          url: urlBase + "/Profiles/:id/noWasteBoards",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.noWasteBoards.count() instead.
        "::count::Profile::noWasteBoards": {
          url: urlBase + "/Profiles/:id/noWasteBoards/count",
          method: "GET"
        },

        // INTERNAL. Use NoWasteBoardSubscription.noWasteBoard() instead.
        "::get::NoWasteBoardSubscription::noWasteBoard": {
          url: urlBase + "/NoWasteBoardSubscriptions/:id/noWasteBoard",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#updateOrCreate
         * @methodOf lbServices.NoWasteBoard
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#update
         * @methodOf lbServices.NoWasteBoard
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#destroyById
         * @methodOf lbServices.NoWasteBoard
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#removeById
         * @methodOf lbServices.NoWasteBoard
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.NoWasteBoard#modelName
    * @propertyOf lbServices.NoWasteBoard
    * @description
    * The name of the model represented by this $resource,
    * i.e. `NoWasteBoard`.
    */
    R.modelName = "NoWasteBoard";


        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#shop
         * @methodOf lbServices.NoWasteBoard
         *
         * @description
         *
         * Fetches belongsTo relation shop.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R.shop = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::get::NoWasteBoard::shop"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.NoWasteBoard.profiles
     * @header lbServices.NoWasteBoard.profiles
     * @object
     * @description
     *
     * The object `NoWasteBoard.profiles` groups methods
     * manipulating `Profile` instances related to `NoWasteBoard`.
     *
     * Call {@link lbServices.NoWasteBoard#profiles NoWasteBoard.profiles()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#profiles
         * @methodOf lbServices.NoWasteBoard
         *
         * @description
         *
         * Queries profiles of NoWasteBoard.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        R.profiles = function() {
          var TargetResource = $injector.get("Profile");
          var action = TargetResource["::get::NoWasteBoard::profiles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard.profiles#count
         * @methodOf lbServices.NoWasteBoard.profiles
         *
         * @description
         *
         * Counts profiles of NoWasteBoard.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.profiles.count = function() {
          var TargetResource = $injector.get("Profile");
          var action = TargetResource["::count::NoWasteBoard::profiles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard.profiles#create
         * @methodOf lbServices.NoWasteBoard.profiles
         *
         * @description
         *
         * Creates a new instance in profiles of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        R.profiles.create = function() {
          var TargetResource = $injector.get("Profile");
          var action = TargetResource["::create::NoWasteBoard::profiles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard.profiles#createMany
         * @methodOf lbServices.NoWasteBoard.profiles
         *
         * @description
         *
         * Creates a new instance in profiles of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        R.profiles.createMany = function() {
          var TargetResource = $injector.get("Profile");
          var action = TargetResource["::createMany::NoWasteBoard::profiles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard.profiles#destroyAll
         * @methodOf lbServices.NoWasteBoard.profiles
         *
         * @description
         *
         * Deletes all profiles of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.profiles.destroyAll = function() {
          var TargetResource = $injector.get("Profile");
          var action = TargetResource["::delete::NoWasteBoard::profiles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard.profiles#destroyById
         * @methodOf lbServices.NoWasteBoard.profiles
         *
         * @description
         *
         * Delete a related item by id for profiles.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for profiles
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.profiles.destroyById = function() {
          var TargetResource = $injector.get("Profile");
          var action = TargetResource["::destroyById::NoWasteBoard::profiles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard.profiles#exists
         * @methodOf lbServices.NoWasteBoard.profiles
         *
         * @description
         *
         * Check the existence of profiles relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for profiles
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        R.profiles.exists = function() {
          var TargetResource = $injector.get("Profile");
          var action = TargetResource["::exists::NoWasteBoard::profiles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard.profiles#findById
         * @methodOf lbServices.NoWasteBoard.profiles
         *
         * @description
         *
         * Find a related item by id for profiles.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for profiles
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        R.profiles.findById = function() {
          var TargetResource = $injector.get("Profile");
          var action = TargetResource["::findById::NoWasteBoard::profiles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard.profiles#link
         * @methodOf lbServices.NoWasteBoard.profiles
         *
         * @description
         *
         * Add a related item by id for profiles.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for profiles
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        R.profiles.link = function() {
          var TargetResource = $injector.get("Profile");
          var action = TargetResource["::link::NoWasteBoard::profiles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard.profiles#unlink
         * @methodOf lbServices.NoWasteBoard.profiles
         *
         * @description
         *
         * Remove the profiles relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for profiles
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.profiles.unlink = function() {
          var TargetResource = $injector.get("Profile");
          var action = TargetResource["::unlink::NoWasteBoard::profiles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard.profiles#updateById
         * @methodOf lbServices.NoWasteBoard.profiles
         *
         * @description
         *
         * Update a related item by id for profiles.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for profiles
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        R.profiles.updateById = function() {
          var TargetResource = $injector.get("Profile");
          var action = TargetResource["::updateById::NoWasteBoard::profiles"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Shop
 * @header lbServices.Shop
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Shop` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Shop",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Shops/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Shop.dailyBoard() instead.
        "prototype$__get__dailyBoard": {
          url: urlBase + "/Shops/:id/dailyBoard",
          method: "GET"
        },

        // INTERNAL. Use Shop.dailyBoard.create() instead.
        "prototype$__create__dailyBoard": {
          url: urlBase + "/Shops/:id/dailyBoard",
          method: "POST"
        },

        // INTERNAL. Use Shop.dailyBoard.update() instead.
        "prototype$__update__dailyBoard": {
          url: urlBase + "/Shops/:id/dailyBoard",
          method: "PUT"
        },

        // INTERNAL. Use Shop.dailyBoard.destroy() instead.
        "prototype$__destroy__dailyBoard": {
          url: urlBase + "/Shops/:id/dailyBoard",
          method: "DELETE"
        },

        // INTERNAL. Use Shop.noWasteBoard() instead.
        "prototype$__get__noWasteBoard": {
          url: urlBase + "/Shops/:id/noWasteBoard",
          method: "GET"
        },

        // INTERNAL. Use Shop.noWasteBoard.create() instead.
        "prototype$__create__noWasteBoard": {
          url: urlBase + "/Shops/:id/noWasteBoard",
          method: "POST"
        },

        // INTERNAL. Use Shop.noWasteBoard.update() instead.
        "prototype$__update__noWasteBoard": {
          url: urlBase + "/Shops/:id/noWasteBoard",
          method: "PUT"
        },

        // INTERNAL. Use Shop.noWasteBoard.destroy() instead.
        "prototype$__destroy__noWasteBoard": {
          url: urlBase + "/Shops/:id/noWasteBoard",
          method: "DELETE"
        },

        // INTERNAL. Use Shop.profile() instead.
        "prototype$__get__profile": {
          url: urlBase + "/Shops/:id/profile",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#create
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Shops",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#createMany
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Shops",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#upsert
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Shops",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#exists
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Shops/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#findById
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Shops/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#find
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Shops",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#findOne
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Shops/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#updateAll
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Shops/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#deleteById
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Shops/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#count
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Shops/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#prototype$updateAttributes
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Shops/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#createChangeStream
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Shops/change-stream",
          method: "POST"
        },

        // INTERNAL. Use DailyBoard.shop() instead.
        "::get::DailyBoard::shop": {
          url: urlBase + "/DailyBoards/:id/shop",
          method: "GET"
        },

        // INTERNAL. Use NoWasteBoard.shop() instead.
        "::get::NoWasteBoard::shop": {
          url: urlBase + "/NoWasteBoards/:id/shop",
          method: "GET"
        },

        // INTERNAL. Use Profile.shop() instead.
        "::get::Profile::shop": {
          url: urlBase + "/Profiles/:id/shop",
          method: "GET"
        },

        // INTERNAL. Use Profile.shop.create() instead.
        "::create::Profile::shop": {
          url: urlBase + "/Profiles/:id/shop",
          method: "POST"
        },

        // INTERNAL. Use Profile.shop.createMany() instead.
        "::createMany::Profile::shop": {
          isArray: true,
          url: urlBase + "/Profiles/:id/shop",
          method: "POST"
        },

        // INTERNAL. Use Profile.shop.update() instead.
        "::update::Profile::shop": {
          url: urlBase + "/Profiles/:id/shop",
          method: "PUT"
        },

        // INTERNAL. Use Profile.shop.destroy() instead.
        "::destroy::Profile::shop": {
          url: urlBase + "/Profiles/:id/shop",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Shop#updateOrCreate
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Shop#update
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Shop#destroyById
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Shop#removeById
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Shop#modelName
    * @propertyOf lbServices.Shop
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Shop`.
    */
    R.modelName = "Shop";

    /**
     * @ngdoc object
     * @name lbServices.Shop.dailyBoard
     * @header lbServices.Shop.dailyBoard
     * @object
     * @description
     *
     * The object `Shop.dailyBoard` groups methods
     * manipulating `DailyBoard` instances related to `Shop`.
     *
     * Call {@link lbServices.Shop#dailyBoard Shop.dailyBoard()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Shop#dailyBoard
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Fetches hasOne relation dailyBoard.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        R.dailyBoard = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::get::Shop::dailyBoard"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.dailyBoard#create
         * @methodOf lbServices.Shop.dailyBoard
         *
         * @description
         *
         * Creates a new instance in dailyBoard of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        R.dailyBoard.create = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::create::Shop::dailyBoard"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.dailyBoard#createMany
         * @methodOf lbServices.Shop.dailyBoard
         *
         * @description
         *
         * Creates a new instance in dailyBoard of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        R.dailyBoard.createMany = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::createMany::Shop::dailyBoard"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.dailyBoard#destroy
         * @methodOf lbServices.Shop.dailyBoard
         *
         * @description
         *
         * Deletes dailyBoard of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.dailyBoard.destroy = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::destroy::Shop::dailyBoard"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.dailyBoard#update
         * @methodOf lbServices.Shop.dailyBoard
         *
         * @description
         *
         * Update dailyBoard of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        R.dailyBoard.update = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::update::Shop::dailyBoard"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Shop.noWasteBoard
     * @header lbServices.Shop.noWasteBoard
     * @object
     * @description
     *
     * The object `Shop.noWasteBoard` groups methods
     * manipulating `NoWasteBoard` instances related to `Shop`.
     *
     * Call {@link lbServices.Shop#noWasteBoard Shop.noWasteBoard()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Shop#noWasteBoard
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Fetches hasOne relation noWasteBoard.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        R.noWasteBoard = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::get::Shop::noWasteBoard"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.noWasteBoard#create
         * @methodOf lbServices.Shop.noWasteBoard
         *
         * @description
         *
         * Creates a new instance in noWasteBoard of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        R.noWasteBoard.create = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::create::Shop::noWasteBoard"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.noWasteBoard#createMany
         * @methodOf lbServices.Shop.noWasteBoard
         *
         * @description
         *
         * Creates a new instance in noWasteBoard of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        R.noWasteBoard.createMany = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::createMany::Shop::noWasteBoard"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.noWasteBoard#destroy
         * @methodOf lbServices.Shop.noWasteBoard
         *
         * @description
         *
         * Deletes noWasteBoard of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.noWasteBoard.destroy = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::destroy::Shop::noWasteBoard"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.noWasteBoard#update
         * @methodOf lbServices.Shop.noWasteBoard
         *
         * @description
         *
         * Update noWasteBoard of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        R.noWasteBoard.update = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::update::Shop::noWasteBoard"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop#profile
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Fetches belongsTo relation profile.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        R.profile = function() {
          var TargetResource = $injector.get("Profile");
          var action = TargetResource["::get::Shop::profile"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Profile
 * @header lbServices.Profile
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Profile` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Profile",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Profiles/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Profile#prototype$__findById__accessTokens
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Profile#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Profile#prototype$__updateById__accessTokens
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Profile.shop() instead.
        "prototype$__get__shop": {
          url: urlBase + "/Profiles/:id/shop",
          method: "GET"
        },

        // INTERNAL. Use Profile.shop.create() instead.
        "prototype$__create__shop": {
          url: urlBase + "/Profiles/:id/shop",
          method: "POST"
        },

        // INTERNAL. Use Profile.shop.update() instead.
        "prototype$__update__shop": {
          url: urlBase + "/Profiles/:id/shop",
          method: "PUT"
        },

        // INTERNAL. Use Profile.shop.destroy() instead.
        "prototype$__destroy__shop": {
          url: urlBase + "/Profiles/:id/shop",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.noWasteBoards.findById() instead.
        "prototype$__findById__noWasteBoards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/noWasteBoards/:fk",
          method: "GET"
        },

        // INTERNAL. Use Profile.noWasteBoards.destroyById() instead.
        "prototype$__destroyById__noWasteBoards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/noWasteBoards/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.noWasteBoards.updateById() instead.
        "prototype$__updateById__noWasteBoards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/noWasteBoards/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Profile.noWasteBoards.link() instead.
        "prototype$__link__noWasteBoards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/noWasteBoards/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Profile.noWasteBoards.unlink() instead.
        "prototype$__unlink__noWasteBoards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/noWasteBoards/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.noWasteBoards.exists() instead.
        "prototype$__exists__noWasteBoards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/noWasteBoards/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Profile.dailyBoards.findById() instead.
        "prototype$__findById__dailyBoards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/dailyBoards/:fk",
          method: "GET"
        },

        // INTERNAL. Use Profile.dailyBoards.destroyById() instead.
        "prototype$__destroyById__dailyBoards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/dailyBoards/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.dailyBoards.updateById() instead.
        "prototype$__updateById__dailyBoards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/dailyBoards/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Profile.dailyBoards.link() instead.
        "prototype$__link__dailyBoards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/dailyBoards/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Profile.dailyBoards.unlink() instead.
        "prototype$__unlink__dailyBoards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/dailyBoards/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.dailyBoards.exists() instead.
        "prototype$__exists__dailyBoards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/dailyBoards/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name lbServices.Profile#prototype$__get__accessTokens
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Queries accessTokens of Profile.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Profiles/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Profile#prototype$__create__accessTokens
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Profiles/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Profile#prototype$__delete__accessTokens
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Profiles/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Profile#prototype$__count__accessTokens
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Counts accessTokens of Profile.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Profiles/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use Profile.noWasteBoards() instead.
        "prototype$__get__noWasteBoards": {
          isArray: true,
          url: urlBase + "/Profiles/:id/noWasteBoards",
          method: "GET"
        },

        // INTERNAL. Use Profile.noWasteBoards.create() instead.
        "prototype$__create__noWasteBoards": {
          url: urlBase + "/Profiles/:id/noWasteBoards",
          method: "POST"
        },

        // INTERNAL. Use Profile.noWasteBoards.destroyAll() instead.
        "prototype$__delete__noWasteBoards": {
          url: urlBase + "/Profiles/:id/noWasteBoards",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.noWasteBoards.count() instead.
        "prototype$__count__noWasteBoards": {
          url: urlBase + "/Profiles/:id/noWasteBoards/count",
          method: "GET"
        },

        // INTERNAL. Use Profile.dailyBoards() instead.
        "prototype$__get__dailyBoards": {
          isArray: true,
          url: urlBase + "/Profiles/:id/dailyBoards",
          method: "GET"
        },

        // INTERNAL. Use Profile.dailyBoards.create() instead.
        "prototype$__create__dailyBoards": {
          url: urlBase + "/Profiles/:id/dailyBoards",
          method: "POST"
        },

        // INTERNAL. Use Profile.dailyBoards.destroyAll() instead.
        "prototype$__delete__dailyBoards": {
          url: urlBase + "/Profiles/:id/dailyBoards",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.dailyBoards.count() instead.
        "prototype$__count__dailyBoards": {
          url: urlBase + "/Profiles/:id/dailyBoards/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Profile#create
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Profiles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Profile#createMany
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Profiles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Profile#upsert
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Profiles",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Profile#exists
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Profiles/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Profile#findById
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Profiles/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Profile#find
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Profiles",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Profile#findOne
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Profiles/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Profile#updateAll
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Profiles/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Profile#deleteById
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Profiles/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Profile#count
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Profiles/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Profile#prototype$updateAttributes
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Profiles/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Profile#createChangeStream
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Profiles/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Profile#login
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Profiles/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Profile#logout
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Profiles/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Profile#confirm
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Profiles/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Profile#resetPassword
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Profiles/reset",
          method: "POST"
        },

        // INTERNAL. Use DailyBoard.profiles.findById() instead.
        "::findById::DailyBoard::profiles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/DailyBoards/:id/profiles/:fk",
          method: "GET"
        },

        // INTERNAL. Use DailyBoard.profiles.destroyById() instead.
        "::destroyById::DailyBoard::profiles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/DailyBoards/:id/profiles/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use DailyBoard.profiles.updateById() instead.
        "::updateById::DailyBoard::profiles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/DailyBoards/:id/profiles/:fk",
          method: "PUT"
        },

        // INTERNAL. Use DailyBoard.profiles.link() instead.
        "::link::DailyBoard::profiles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/DailyBoards/:id/profiles/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use DailyBoard.profiles.unlink() instead.
        "::unlink::DailyBoard::profiles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/DailyBoards/:id/profiles/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use DailyBoard.profiles.exists() instead.
        "::exists::DailyBoard::profiles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/DailyBoards/:id/profiles/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use DailyBoard.profiles() instead.
        "::get::DailyBoard::profiles": {
          isArray: true,
          url: urlBase + "/DailyBoards/:id/profiles",
          method: "GET"
        },

        // INTERNAL. Use DailyBoard.profiles.create() instead.
        "::create::DailyBoard::profiles": {
          url: urlBase + "/DailyBoards/:id/profiles",
          method: "POST"
        },

        // INTERNAL. Use DailyBoard.profiles.createMany() instead.
        "::createMany::DailyBoard::profiles": {
          isArray: true,
          url: urlBase + "/DailyBoards/:id/profiles",
          method: "POST"
        },

        // INTERNAL. Use DailyBoard.profiles.destroyAll() instead.
        "::delete::DailyBoard::profiles": {
          url: urlBase + "/DailyBoards/:id/profiles",
          method: "DELETE"
        },

        // INTERNAL. Use DailyBoard.profiles.count() instead.
        "::count::DailyBoard::profiles": {
          url: urlBase + "/DailyBoards/:id/profiles/count",
          method: "GET"
        },

        // INTERNAL. Use NoWasteBoard.profiles.findById() instead.
        "::findById::NoWasteBoard::profiles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/NoWasteBoards/:id/profiles/:fk",
          method: "GET"
        },

        // INTERNAL. Use NoWasteBoard.profiles.destroyById() instead.
        "::destroyById::NoWasteBoard::profiles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/NoWasteBoards/:id/profiles/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use NoWasteBoard.profiles.updateById() instead.
        "::updateById::NoWasteBoard::profiles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/NoWasteBoards/:id/profiles/:fk",
          method: "PUT"
        },

        // INTERNAL. Use NoWasteBoard.profiles.link() instead.
        "::link::NoWasteBoard::profiles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/NoWasteBoards/:id/profiles/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use NoWasteBoard.profiles.unlink() instead.
        "::unlink::NoWasteBoard::profiles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/NoWasteBoards/:id/profiles/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use NoWasteBoard.profiles.exists() instead.
        "::exists::NoWasteBoard::profiles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/NoWasteBoards/:id/profiles/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use NoWasteBoard.profiles() instead.
        "::get::NoWasteBoard::profiles": {
          isArray: true,
          url: urlBase + "/NoWasteBoards/:id/profiles",
          method: "GET"
        },

        // INTERNAL. Use NoWasteBoard.profiles.create() instead.
        "::create::NoWasteBoard::profiles": {
          url: urlBase + "/NoWasteBoards/:id/profiles",
          method: "POST"
        },

        // INTERNAL. Use NoWasteBoard.profiles.createMany() instead.
        "::createMany::NoWasteBoard::profiles": {
          isArray: true,
          url: urlBase + "/NoWasteBoards/:id/profiles",
          method: "POST"
        },

        // INTERNAL. Use NoWasteBoard.profiles.destroyAll() instead.
        "::delete::NoWasteBoard::profiles": {
          url: urlBase + "/NoWasteBoards/:id/profiles",
          method: "DELETE"
        },

        // INTERNAL. Use NoWasteBoard.profiles.count() instead.
        "::count::NoWasteBoard::profiles": {
          url: urlBase + "/NoWasteBoards/:id/profiles/count",
          method: "GET"
        },

        // INTERNAL. Use Shop.profile() instead.
        "::get::Shop::profile": {
          url: urlBase + "/Shops/:id/profile",
          method: "GET"
        },

        // INTERNAL. Use NoWasteBoardSubscription.profile() instead.
        "::get::NoWasteBoardSubscription::profile": {
          url: urlBase + "/NoWasteBoardSubscriptions/:id/profile",
          method: "GET"
        },

        // INTERNAL. Use DailyBoardSubscription.profile() instead.
        "::get::DailyBoardSubscription::profile": {
          url: urlBase + "/DailyBoardSubscriptions/:id/profile",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Profile#getCurrent
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Profiles" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Profile#updateOrCreate
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Profile#update
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Profile#destroyById
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Profile#removeById
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Profile#getCachedCurrent
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Profile#login} or
         * {@link lbServices.Profile#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Profile instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile#isAuthenticated
         * @methodOf lbServices.Profile
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile#getCurrentId
         * @methodOf lbServices.Profile
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Profile#modelName
    * @propertyOf lbServices.Profile
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Profile`.
    */
    R.modelName = "Profile";

    /**
     * @ngdoc object
     * @name lbServices.Profile.shop
     * @header lbServices.Profile.shop
     * @object
     * @description
     *
     * The object `Profile.shop` groups methods
     * manipulating `Shop` instances related to `Profile`.
     *
     * Call {@link lbServices.Profile#shop Profile.shop()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Profile#shop
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Fetches hasOne relation shop.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R.shop = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::get::Profile::shop"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.shop#create
         * @methodOf lbServices.Profile.shop
         *
         * @description
         *
         * Creates a new instance in shop of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R.shop.create = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::create::Profile::shop"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.shop#createMany
         * @methodOf lbServices.Profile.shop
         *
         * @description
         *
         * Creates a new instance in shop of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R.shop.createMany = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::createMany::Profile::shop"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.shop#destroy
         * @methodOf lbServices.Profile.shop
         *
         * @description
         *
         * Deletes shop of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.shop.destroy = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::destroy::Profile::shop"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.shop#update
         * @methodOf lbServices.Profile.shop
         *
         * @description
         *
         * Update shop of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R.shop.update = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::update::Profile::shop"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Profile.noWasteBoards
     * @header lbServices.Profile.noWasteBoards
     * @object
     * @description
     *
     * The object `Profile.noWasteBoards` groups methods
     * manipulating `NoWasteBoard` instances related to `Profile`.
     *
     * Call {@link lbServices.Profile#noWasteBoards Profile.noWasteBoards()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Profile#noWasteBoards
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Queries noWasteBoards of Profile.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        R.noWasteBoards = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::get::Profile::noWasteBoards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.noWasteBoards#count
         * @methodOf lbServices.Profile.noWasteBoards
         *
         * @description
         *
         * Counts noWasteBoards of Profile.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.noWasteBoards.count = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::count::Profile::noWasteBoards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.noWasteBoards#create
         * @methodOf lbServices.Profile.noWasteBoards
         *
         * @description
         *
         * Creates a new instance in noWasteBoards of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        R.noWasteBoards.create = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::create::Profile::noWasteBoards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.noWasteBoards#createMany
         * @methodOf lbServices.Profile.noWasteBoards
         *
         * @description
         *
         * Creates a new instance in noWasteBoards of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        R.noWasteBoards.createMany = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::createMany::Profile::noWasteBoards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.noWasteBoards#destroyAll
         * @methodOf lbServices.Profile.noWasteBoards
         *
         * @description
         *
         * Deletes all noWasteBoards of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.noWasteBoards.destroyAll = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::delete::Profile::noWasteBoards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.noWasteBoards#destroyById
         * @methodOf lbServices.Profile.noWasteBoards
         *
         * @description
         *
         * Delete a related item by id for noWasteBoards.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for noWasteBoards
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.noWasteBoards.destroyById = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::destroyById::Profile::noWasteBoards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.noWasteBoards#exists
         * @methodOf lbServices.Profile.noWasteBoards
         *
         * @description
         *
         * Check the existence of noWasteBoards relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for noWasteBoards
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        R.noWasteBoards.exists = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::exists::Profile::noWasteBoards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.noWasteBoards#findById
         * @methodOf lbServices.Profile.noWasteBoards
         *
         * @description
         *
         * Find a related item by id for noWasteBoards.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for noWasteBoards
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        R.noWasteBoards.findById = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::findById::Profile::noWasteBoards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.noWasteBoards#link
         * @methodOf lbServices.Profile.noWasteBoards
         *
         * @description
         *
         * Add a related item by id for noWasteBoards.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for noWasteBoards
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        R.noWasteBoards.link = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::link::Profile::noWasteBoards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.noWasteBoards#unlink
         * @methodOf lbServices.Profile.noWasteBoards
         *
         * @description
         *
         * Remove the noWasteBoards relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for noWasteBoards
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.noWasteBoards.unlink = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::unlink::Profile::noWasteBoards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.noWasteBoards#updateById
         * @methodOf lbServices.Profile.noWasteBoards
         *
         * @description
         *
         * Update a related item by id for noWasteBoards.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for noWasteBoards
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        R.noWasteBoards.updateById = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::updateById::Profile::noWasteBoards"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Profile.dailyBoards
     * @header lbServices.Profile.dailyBoards
     * @object
     * @description
     *
     * The object `Profile.dailyBoards` groups methods
     * manipulating `DailyBoard` instances related to `Profile`.
     *
     * Call {@link lbServices.Profile#dailyBoards Profile.dailyBoards()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Profile#dailyBoards
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Queries dailyBoards of Profile.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        R.dailyBoards = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::get::Profile::dailyBoards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.dailyBoards#count
         * @methodOf lbServices.Profile.dailyBoards
         *
         * @description
         *
         * Counts dailyBoards of Profile.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.dailyBoards.count = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::count::Profile::dailyBoards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.dailyBoards#create
         * @methodOf lbServices.Profile.dailyBoards
         *
         * @description
         *
         * Creates a new instance in dailyBoards of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        R.dailyBoards.create = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::create::Profile::dailyBoards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.dailyBoards#createMany
         * @methodOf lbServices.Profile.dailyBoards
         *
         * @description
         *
         * Creates a new instance in dailyBoards of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        R.dailyBoards.createMany = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::createMany::Profile::dailyBoards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.dailyBoards#destroyAll
         * @methodOf lbServices.Profile.dailyBoards
         *
         * @description
         *
         * Deletes all dailyBoards of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.dailyBoards.destroyAll = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::delete::Profile::dailyBoards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.dailyBoards#destroyById
         * @methodOf lbServices.Profile.dailyBoards
         *
         * @description
         *
         * Delete a related item by id for dailyBoards.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for dailyBoards
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.dailyBoards.destroyById = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::destroyById::Profile::dailyBoards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.dailyBoards#exists
         * @methodOf lbServices.Profile.dailyBoards
         *
         * @description
         *
         * Check the existence of dailyBoards relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for dailyBoards
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        R.dailyBoards.exists = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::exists::Profile::dailyBoards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.dailyBoards#findById
         * @methodOf lbServices.Profile.dailyBoards
         *
         * @description
         *
         * Find a related item by id for dailyBoards.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for dailyBoards
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        R.dailyBoards.findById = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::findById::Profile::dailyBoards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.dailyBoards#link
         * @methodOf lbServices.Profile.dailyBoards
         *
         * @description
         *
         * Add a related item by id for dailyBoards.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for dailyBoards
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        R.dailyBoards.link = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::link::Profile::dailyBoards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.dailyBoards#unlink
         * @methodOf lbServices.Profile.dailyBoards
         *
         * @description
         *
         * Remove the dailyBoards relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for dailyBoards
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.dailyBoards.unlink = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::unlink::Profile::dailyBoards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.dailyBoards#updateById
         * @methodOf lbServices.Profile.dailyBoards
         *
         * @description
         *
         * Update a related item by id for dailyBoards.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for dailyBoards
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        R.dailyBoards.updateById = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::updateById::Profile::dailyBoards"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.NoWasteBoardSubscription
 * @header lbServices.NoWasteBoardSubscription
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `NoWasteBoardSubscription` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "NoWasteBoardSubscription",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/NoWasteBoardSubscriptions/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use NoWasteBoardSubscription.profile() instead.
        "prototype$__get__profile": {
          url: urlBase + "/NoWasteBoardSubscriptions/:id/profile",
          method: "GET"
        },

        // INTERNAL. Use NoWasteBoardSubscription.noWasteBoard() instead.
        "prototype$__get__noWasteBoard": {
          url: urlBase + "/NoWasteBoardSubscriptions/:id/noWasteBoard",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoardSubscription#create
         * @methodOf lbServices.NoWasteBoardSubscription
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoardSubscription` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/NoWasteBoardSubscriptions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoardSubscription#createMany
         * @methodOf lbServices.NoWasteBoardSubscription
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoardSubscription` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/NoWasteBoardSubscriptions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoardSubscription#upsert
         * @methodOf lbServices.NoWasteBoardSubscription
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoardSubscription` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/NoWasteBoardSubscriptions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoardSubscription#exists
         * @methodOf lbServices.NoWasteBoardSubscription
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/NoWasteBoardSubscriptions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoardSubscription#findById
         * @methodOf lbServices.NoWasteBoardSubscription
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoardSubscription` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/NoWasteBoardSubscriptions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoardSubscription#find
         * @methodOf lbServices.NoWasteBoardSubscription
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoardSubscription` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/NoWasteBoardSubscriptions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoardSubscription#findOne
         * @methodOf lbServices.NoWasteBoardSubscription
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoardSubscription` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/NoWasteBoardSubscriptions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoardSubscription#updateAll
         * @methodOf lbServices.NoWasteBoardSubscription
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/NoWasteBoardSubscriptions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoardSubscription#deleteById
         * @methodOf lbServices.NoWasteBoardSubscription
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoardSubscription` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/NoWasteBoardSubscriptions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoardSubscription#count
         * @methodOf lbServices.NoWasteBoardSubscription
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/NoWasteBoardSubscriptions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoardSubscription#prototype$updateAttributes
         * @methodOf lbServices.NoWasteBoardSubscription
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoardSubscription` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/NoWasteBoardSubscriptions/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoardSubscription#createChangeStream
         * @methodOf lbServices.NoWasteBoardSubscription
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/NoWasteBoardSubscriptions/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoardSubscription#updateOrCreate
         * @methodOf lbServices.NoWasteBoardSubscription
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoardSubscription` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoardSubscription#update
         * @methodOf lbServices.NoWasteBoardSubscription
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoardSubscription#destroyById
         * @methodOf lbServices.NoWasteBoardSubscription
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoardSubscription` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoardSubscription#removeById
         * @methodOf lbServices.NoWasteBoardSubscription
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoardSubscription` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.NoWasteBoardSubscription#modelName
    * @propertyOf lbServices.NoWasteBoardSubscription
    * @description
    * The name of the model represented by this $resource,
    * i.e. `NoWasteBoardSubscription`.
    */
    R.modelName = "NoWasteBoardSubscription";


        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoardSubscription#profile
         * @methodOf lbServices.NoWasteBoardSubscription
         *
         * @description
         *
         * Fetches belongsTo relation profile.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        R.profile = function() {
          var TargetResource = $injector.get("Profile");
          var action = TargetResource["::get::NoWasteBoardSubscription::profile"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoardSubscription#noWasteBoard
         * @methodOf lbServices.NoWasteBoardSubscription
         *
         * @description
         *
         * Fetches belongsTo relation noWasteBoard.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `NoWasteBoard` object.)
         * </em>
         */
        R.noWasteBoard = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::get::NoWasteBoardSubscription::noWasteBoard"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.DailyBoardSubscription
 * @header lbServices.DailyBoardSubscription
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `DailyBoardSubscription` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "DailyBoardSubscription",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/DailyBoardSubscriptions/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use DailyBoardSubscription.profile() instead.
        "prototype$__get__profile": {
          url: urlBase + "/DailyBoardSubscriptions/:id/profile",
          method: "GET"
        },

        // INTERNAL. Use DailyBoardSubscription.dailyBoard() instead.
        "prototype$__get__dailyBoard": {
          url: urlBase + "/DailyBoardSubscriptions/:id/dailyBoard",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoardSubscription#create
         * @methodOf lbServices.DailyBoardSubscription
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoardSubscription` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/DailyBoardSubscriptions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoardSubscription#createMany
         * @methodOf lbServices.DailyBoardSubscription
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoardSubscription` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/DailyBoardSubscriptions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoardSubscription#upsert
         * @methodOf lbServices.DailyBoardSubscription
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoardSubscription` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/DailyBoardSubscriptions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoardSubscription#exists
         * @methodOf lbServices.DailyBoardSubscription
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/DailyBoardSubscriptions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoardSubscription#findById
         * @methodOf lbServices.DailyBoardSubscription
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoardSubscription` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/DailyBoardSubscriptions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoardSubscription#find
         * @methodOf lbServices.DailyBoardSubscription
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoardSubscription` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/DailyBoardSubscriptions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoardSubscription#findOne
         * @methodOf lbServices.DailyBoardSubscription
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoardSubscription` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/DailyBoardSubscriptions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoardSubscription#updateAll
         * @methodOf lbServices.DailyBoardSubscription
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/DailyBoardSubscriptions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoardSubscription#deleteById
         * @methodOf lbServices.DailyBoardSubscription
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoardSubscription` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/DailyBoardSubscriptions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoardSubscription#count
         * @methodOf lbServices.DailyBoardSubscription
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/DailyBoardSubscriptions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoardSubscription#prototype$updateAttributes
         * @methodOf lbServices.DailyBoardSubscription
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoardSubscription` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/DailyBoardSubscriptions/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyBoardSubscription#createChangeStream
         * @methodOf lbServices.DailyBoardSubscription
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/DailyBoardSubscriptions/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.DailyBoardSubscription#updateOrCreate
         * @methodOf lbServices.DailyBoardSubscription
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoardSubscription` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.DailyBoardSubscription#update
         * @methodOf lbServices.DailyBoardSubscription
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.DailyBoardSubscription#destroyById
         * @methodOf lbServices.DailyBoardSubscription
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoardSubscription` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.DailyBoardSubscription#removeById
         * @methodOf lbServices.DailyBoardSubscription
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoardSubscription` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.DailyBoardSubscription#modelName
    * @propertyOf lbServices.DailyBoardSubscription
    * @description
    * The name of the model represented by this $resource,
    * i.e. `DailyBoardSubscription`.
    */
    R.modelName = "DailyBoardSubscription";


        /**
         * @ngdoc method
         * @name lbServices.DailyBoardSubscription#profile
         * @methodOf lbServices.DailyBoardSubscription
         *
         * @description
         *
         * Fetches belongsTo relation profile.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Profile` object.)
         * </em>
         */
        R.profile = function() {
          var TargetResource = $injector.get("Profile");
          var action = TargetResource["::get::DailyBoardSubscription::profile"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DailyBoardSubscription#dailyBoard
         * @methodOf lbServices.DailyBoardSubscription
         *
         * @description
         *
         * Fetches belongsTo relation dailyBoard.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DailyBoard` object.)
         * </em>
         */
        R.dailyBoard = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::get::DailyBoardSubscription::dailyBoard"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch(err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
