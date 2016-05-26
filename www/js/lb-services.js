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

        // INTERNAL. Use DailyBoard.dailyItems.findById() instead.
        "prototype$__findById__dailyItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/DailyBoards/:id/dailyItems/:fk",
          method: "GET"
        },

        // INTERNAL. Use DailyBoard.dailyItems.destroyById() instead.
        "prototype$__destroyById__dailyItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/DailyBoards/:id/dailyItems/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use DailyBoard.dailyItems.updateById() instead.
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

        // INTERNAL. Use DailyBoard.dailyItems() instead.
        "prototype$__get__dailyItems": {
          isArray: true,
          url: urlBase + "/DailyBoards/:id/dailyItems",
          method: "GET"
        },

        // INTERNAL. Use DailyBoard.dailyItems.create() instead.
        "prototype$__create__dailyItems": {
          url: urlBase + "/DailyBoards/:id/dailyItems",
          method: "POST"
        },

        // INTERNAL. Use DailyBoard.dailyItems.destroyAll() instead.
        "prototype$__delete__dailyItems": {
          url: urlBase + "/DailyBoards/:id/dailyItems",
          method: "DELETE"
        },

        // INTERNAL. Use DailyBoard.dailyItems.count() instead.
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

        // INTERNAL. Use DailyItem.dailyboard() instead.
        "::get::DailyItem::dailyboard": {
          url: urlBase + "/DailyItems/:id/dailyboard",
          method: "GET"
        },

        // INTERNAL. Use Shop.dailyboard() instead.
        "::get::Shop::dailyboard": {
          url: urlBase + "/Shops/:id/dailyboard",
          method: "GET"
        },

        // INTERNAL. Use Shop.dailyboard.create() instead.
        "::create::Shop::dailyboard": {
          url: urlBase + "/Shops/:id/dailyboard",
          method: "POST"
        },

        // INTERNAL. Use Shop.dailyboard.createMany() instead.
        "::createMany::Shop::dailyboard": {
          isArray: true,
          url: urlBase + "/Shops/:id/dailyboard",
          method: "POST"
        },

        // INTERNAL. Use Shop.dailyboard.update() instead.
        "::update::Shop::dailyboard": {
          url: urlBase + "/Shops/:id/dailyboard",
          method: "PUT"
        },

        // INTERNAL. Use Shop.dailyboard.destroy() instead.
        "::destroy::Shop::dailyboard": {
          url: urlBase + "/Shops/:id/dailyboard",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.dailyboards.findById() instead.
        "::findById::Profile::dailyboards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/dailyboards/:fk",
          method: "GET"
        },

        // INTERNAL. Use Profile.dailyboards.destroyById() instead.
        "::destroyById::Profile::dailyboards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/dailyboards/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.dailyboards.updateById() instead.
        "::updateById::Profile::dailyboards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/dailyboards/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Profile.dailyboards.link() instead.
        "::link::Profile::dailyboards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/dailyboards/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Profile.dailyboards.unlink() instead.
        "::unlink::Profile::dailyboards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/dailyboards/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.dailyboards.exists() instead.
        "::exists::Profile::dailyboards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/dailyboards/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Profile.dailyboards() instead.
        "::get::Profile::dailyboards": {
          isArray: true,
          url: urlBase + "/Profiles/:id/dailyboards",
          method: "GET"
        },

        // INTERNAL. Use Profile.dailyboards.create() instead.
        "::create::Profile::dailyboards": {
          url: urlBase + "/Profiles/:id/dailyboards",
          method: "POST"
        },

        // INTERNAL. Use Profile.dailyboards.createMany() instead.
        "::createMany::Profile::dailyboards": {
          isArray: true,
          url: urlBase + "/Profiles/:id/dailyboards",
          method: "POST"
        },

        // INTERNAL. Use Profile.dailyboards.destroyAll() instead.
        "::delete::Profile::dailyboards": {
          url: urlBase + "/Profiles/:id/dailyboards",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.dailyboards.count() instead.
        "::count::Profile::dailyboards": {
          url: urlBase + "/Profiles/:id/dailyboards/count",
          method: "GET"
        },

        // INTERNAL. Use DailyBoardSubscription.dailyboard() instead.
        "::get::DailyBoardSubscription::dailyboard": {
          url: urlBase + "/DailyBoardSubscriptions/:id/dailyboard",
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
     * @ngdoc object
     * @name lbServices.DailyBoard.dailyItems
     * @header lbServices.DailyBoard.dailyItems
     * @object
     * @description
     *
     * The object `DailyBoard.dailyItems` groups methods
     * manipulating `DailyItem` instances related to `DailyBoard`.
     *
     * Call {@link lbServices.DailyBoard#dailyItems DailyBoard.dailyItems()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.DailyBoard#dailyItems
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
         * This usually means the response is a `DailyItem` object.)
         * </em>
         */
        R.dailyItems = function() {
          var TargetResource = $injector.get("DailyItem");
          var action = TargetResource["::get::DailyBoard::dailyItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard.dailyItems#count
         * @methodOf lbServices.DailyBoard.dailyItems
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
        R.dailyItems.count = function() {
          var TargetResource = $injector.get("DailyItem");
          var action = TargetResource["::count::DailyBoard::dailyItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard.dailyItems#create
         * @methodOf lbServices.DailyBoard.dailyItems
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
         * This usually means the response is a `DailyItem` object.)
         * </em>
         */
        R.dailyItems.create = function() {
          var TargetResource = $injector.get("DailyItem");
          var action = TargetResource["::create::DailyBoard::dailyItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard.dailyItems#createMany
         * @methodOf lbServices.DailyBoard.dailyItems
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
         * This usually means the response is a `DailyItem` object.)
         * </em>
         */
        R.dailyItems.createMany = function() {
          var TargetResource = $injector.get("DailyItem");
          var action = TargetResource["::createMany::DailyBoard::dailyItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard.dailyItems#destroyAll
         * @methodOf lbServices.DailyBoard.dailyItems
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
        R.dailyItems.destroyAll = function() {
          var TargetResource = $injector.get("DailyItem");
          var action = TargetResource["::delete::DailyBoard::dailyItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard.dailyItems#destroyById
         * @methodOf lbServices.DailyBoard.dailyItems
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
        R.dailyItems.destroyById = function() {
          var TargetResource = $injector.get("DailyItem");
          var action = TargetResource["::destroyById::DailyBoard::dailyItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard.dailyItems#findById
         * @methodOf lbServices.DailyBoard.dailyItems
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
         * This usually means the response is a `DailyItem` object.)
         * </em>
         */
        R.dailyItems.findById = function() {
          var TargetResource = $injector.get("DailyItem");
          var action = TargetResource["::findById::DailyBoard::dailyItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DailyBoard.dailyItems#updateById
         * @methodOf lbServices.DailyBoard.dailyItems
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
         * This usually means the response is a `DailyItem` object.)
         * </em>
         */
        R.dailyItems.updateById = function() {
          var TargetResource = $injector.get("DailyItem");
          var action = TargetResource["::updateById::DailyBoard::dailyItems"];
          return action.apply(R, arguments);
        };

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
 * @name lbServices.DailyItem
 * @header lbServices.DailyItem
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `DailyItem` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "DailyItem",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/DailyItems/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use DailyItem.dailyboard() instead.
        "prototype$__get__dailyboard": {
          url: urlBase + "/DailyItems/:id/dailyboard",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyItem#create
         * @methodOf lbServices.DailyItem
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
         * This usually means the response is a `DailyItem` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/DailyItems",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyItem#createMany
         * @methodOf lbServices.DailyItem
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
         * This usually means the response is a `DailyItem` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/DailyItems",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyItem#upsert
         * @methodOf lbServices.DailyItem
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
         * This usually means the response is a `DailyItem` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/DailyItems",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyItem#exists
         * @methodOf lbServices.DailyItem
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
          url: urlBase + "/DailyItems/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyItem#findById
         * @methodOf lbServices.DailyItem
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
         * This usually means the response is a `DailyItem` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/DailyItems/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyItem#find
         * @methodOf lbServices.DailyItem
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
         * This usually means the response is a `DailyItem` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/DailyItems",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyItem#findOne
         * @methodOf lbServices.DailyItem
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
         * This usually means the response is a `DailyItem` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/DailyItems/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyItem#updateAll
         * @methodOf lbServices.DailyItem
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
          url: urlBase + "/DailyItems/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyItem#deleteById
         * @methodOf lbServices.DailyItem
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
         * This usually means the response is a `DailyItem` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/DailyItems/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyItem#count
         * @methodOf lbServices.DailyItem
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
          url: urlBase + "/DailyItems/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyItem#prototype$updateAttributes
         * @methodOf lbServices.DailyItem
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
         * This usually means the response is a `DailyItem` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/DailyItems/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.DailyItem#createChangeStream
         * @methodOf lbServices.DailyItem
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
          url: urlBase + "/DailyItems/change-stream",
          method: "POST"
        },

        // INTERNAL. Use DailyBoard.dailyItems.findById() instead.
        "::findById::DailyBoard::dailyItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/DailyBoards/:id/dailyItems/:fk",
          method: "GET"
        },

        // INTERNAL. Use DailyBoard.dailyItems.destroyById() instead.
        "::destroyById::DailyBoard::dailyItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/DailyBoards/:id/dailyItems/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use DailyBoard.dailyItems.updateById() instead.
        "::updateById::DailyBoard::dailyItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/DailyBoards/:id/dailyItems/:fk",
          method: "PUT"
        },

        // INTERNAL. Use DailyBoard.dailyItems() instead.
        "::get::DailyBoard::dailyItems": {
          isArray: true,
          url: urlBase + "/DailyBoards/:id/dailyItems",
          method: "GET"
        },

        // INTERNAL. Use DailyBoard.dailyItems.create() instead.
        "::create::DailyBoard::dailyItems": {
          url: urlBase + "/DailyBoards/:id/dailyItems",
          method: "POST"
        },

        // INTERNAL. Use DailyBoard.dailyItems.createMany() instead.
        "::createMany::DailyBoard::dailyItems": {
          isArray: true,
          url: urlBase + "/DailyBoards/:id/dailyItems",
          method: "POST"
        },

        // INTERNAL. Use DailyBoard.dailyItems.destroyAll() instead.
        "::delete::DailyBoard::dailyItems": {
          url: urlBase + "/DailyBoards/:id/dailyItems",
          method: "DELETE"
        },

        // INTERNAL. Use DailyBoard.dailyItems.count() instead.
        "::count::DailyBoard::dailyItems": {
          url: urlBase + "/DailyBoards/:id/dailyItems/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.DailyItem#updateOrCreate
         * @methodOf lbServices.DailyItem
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
         * This usually means the response is a `DailyItem` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.DailyItem#update
         * @methodOf lbServices.DailyItem
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
         * @name lbServices.DailyItem#destroyById
         * @methodOf lbServices.DailyItem
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
         * This usually means the response is a `DailyItem` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.DailyItem#removeById
         * @methodOf lbServices.DailyItem
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
         * This usually means the response is a `DailyItem` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.DailyItem#modelName
    * @propertyOf lbServices.DailyItem
    * @description
    * The name of the model represented by this $resource,
    * i.e. `DailyItem`.
    */
    R.modelName = "DailyItem";


        /**
         * @ngdoc method
         * @name lbServices.DailyItem#dailyboard
         * @methodOf lbServices.DailyItem
         *
         * @description
         *
         * Fetches belongsTo relation dailyboard.
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
        R.dailyboard = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::get::DailyItem::dailyboard"];
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

        // INTERNAL. Use NoWasteBoard.noWasteItems.findById() instead.
        "prototype$__findById__noWasteItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/NoWasteBoards/:id/noWasteItems/:fk",
          method: "GET"
        },

        // INTERNAL. Use NoWasteBoard.noWasteItems.destroyById() instead.
        "prototype$__destroyById__noWasteItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/NoWasteBoards/:id/noWasteItems/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use NoWasteBoard.noWasteItems.updateById() instead.
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

        // INTERNAL. Use NoWasteBoard.noWasteItems() instead.
        "prototype$__get__noWasteItems": {
          isArray: true,
          url: urlBase + "/NoWasteBoards/:id/noWasteItems",
          method: "GET"
        },

        // INTERNAL. Use NoWasteBoard.noWasteItems.create() instead.
        "prototype$__create__noWasteItems": {
          url: urlBase + "/NoWasteBoards/:id/noWasteItems",
          method: "POST"
        },

        // INTERNAL. Use NoWasteBoard.noWasteItems.destroyAll() instead.
        "prototype$__delete__noWasteItems": {
          url: urlBase + "/NoWasteBoards/:id/noWasteItems",
          method: "DELETE"
        },

        // INTERNAL. Use NoWasteBoard.noWasteItems.count() instead.
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

        // INTERNAL. Use NoWasteItem.nowasteboard() instead.
        "::get::NoWasteItem::nowasteboard": {
          url: urlBase + "/NoWasteItems/:id/nowasteboard",
          method: "GET"
        },

        // INTERNAL. Use Shop.nowasteboard() instead.
        "::get::Shop::nowasteboard": {
          url: urlBase + "/Shops/:id/nowasteboard",
          method: "GET"
        },

        // INTERNAL. Use Shop.nowasteboard.create() instead.
        "::create::Shop::nowasteboard": {
          url: urlBase + "/Shops/:id/nowasteboard",
          method: "POST"
        },

        // INTERNAL. Use Shop.nowasteboard.createMany() instead.
        "::createMany::Shop::nowasteboard": {
          isArray: true,
          url: urlBase + "/Shops/:id/nowasteboard",
          method: "POST"
        },

        // INTERNAL. Use Shop.nowasteboard.update() instead.
        "::update::Shop::nowasteboard": {
          url: urlBase + "/Shops/:id/nowasteboard",
          method: "PUT"
        },

        // INTERNAL. Use Shop.nowasteboard.destroy() instead.
        "::destroy::Shop::nowasteboard": {
          url: urlBase + "/Shops/:id/nowasteboard",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.nowasteboards.findById() instead.
        "::findById::Profile::nowasteboards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/nowasteboards/:fk",
          method: "GET"
        },

        // INTERNAL. Use Profile.nowasteboards.destroyById() instead.
        "::destroyById::Profile::nowasteboards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/nowasteboards/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.nowasteboards.updateById() instead.
        "::updateById::Profile::nowasteboards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/nowasteboards/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Profile.nowasteboards.link() instead.
        "::link::Profile::nowasteboards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/nowasteboards/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Profile.nowasteboards.unlink() instead.
        "::unlink::Profile::nowasteboards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/nowasteboards/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.nowasteboards.exists() instead.
        "::exists::Profile::nowasteboards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/nowasteboards/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Profile.nowasteboards() instead.
        "::get::Profile::nowasteboards": {
          isArray: true,
          url: urlBase + "/Profiles/:id/nowasteboards",
          method: "GET"
        },

        // INTERNAL. Use Profile.nowasteboards.create() instead.
        "::create::Profile::nowasteboards": {
          url: urlBase + "/Profiles/:id/nowasteboards",
          method: "POST"
        },

        // INTERNAL. Use Profile.nowasteboards.createMany() instead.
        "::createMany::Profile::nowasteboards": {
          isArray: true,
          url: urlBase + "/Profiles/:id/nowasteboards",
          method: "POST"
        },

        // INTERNAL. Use Profile.nowasteboards.destroyAll() instead.
        "::delete::Profile::nowasteboards": {
          url: urlBase + "/Profiles/:id/nowasteboards",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.nowasteboards.count() instead.
        "::count::Profile::nowasteboards": {
          url: urlBase + "/Profiles/:id/nowasteboards/count",
          method: "GET"
        },

        // INTERNAL. Use NoWasteBoardSubscription.nowasteboard() instead.
        "::get::NoWasteBoardSubscription::nowasteboard": {
          url: urlBase + "/NoWasteBoardSubscriptions/:id/nowasteboard",
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
     * @ngdoc object
     * @name lbServices.NoWasteBoard.noWasteItems
     * @header lbServices.NoWasteBoard.noWasteItems
     * @object
     * @description
     *
     * The object `NoWasteBoard.noWasteItems` groups methods
     * manipulating `NoWasteItem` instances related to `NoWasteBoard`.
     *
     * Call {@link lbServices.NoWasteBoard#noWasteItems NoWasteBoard.noWasteItems()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard#noWasteItems
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
         * This usually means the response is a `NoWasteItem` object.)
         * </em>
         */
        R.noWasteItems = function() {
          var TargetResource = $injector.get("NoWasteItem");
          var action = TargetResource["::get::NoWasteBoard::noWasteItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard.noWasteItems#count
         * @methodOf lbServices.NoWasteBoard.noWasteItems
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
        R.noWasteItems.count = function() {
          var TargetResource = $injector.get("NoWasteItem");
          var action = TargetResource["::count::NoWasteBoard::noWasteItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard.noWasteItems#create
         * @methodOf lbServices.NoWasteBoard.noWasteItems
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
         * This usually means the response is a `NoWasteItem` object.)
         * </em>
         */
        R.noWasteItems.create = function() {
          var TargetResource = $injector.get("NoWasteItem");
          var action = TargetResource["::create::NoWasteBoard::noWasteItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard.noWasteItems#createMany
         * @methodOf lbServices.NoWasteBoard.noWasteItems
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
         * This usually means the response is a `NoWasteItem` object.)
         * </em>
         */
        R.noWasteItems.createMany = function() {
          var TargetResource = $injector.get("NoWasteItem");
          var action = TargetResource["::createMany::NoWasteBoard::noWasteItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard.noWasteItems#destroyAll
         * @methodOf lbServices.NoWasteBoard.noWasteItems
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
        R.noWasteItems.destroyAll = function() {
          var TargetResource = $injector.get("NoWasteItem");
          var action = TargetResource["::delete::NoWasteBoard::noWasteItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard.noWasteItems#destroyById
         * @methodOf lbServices.NoWasteBoard.noWasteItems
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
        R.noWasteItems.destroyById = function() {
          var TargetResource = $injector.get("NoWasteItem");
          var action = TargetResource["::destroyById::NoWasteBoard::noWasteItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard.noWasteItems#findById
         * @methodOf lbServices.NoWasteBoard.noWasteItems
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
         * This usually means the response is a `NoWasteItem` object.)
         * </em>
         */
        R.noWasteItems.findById = function() {
          var TargetResource = $injector.get("NoWasteItem");
          var action = TargetResource["::findById::NoWasteBoard::noWasteItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.NoWasteBoard.noWasteItems#updateById
         * @methodOf lbServices.NoWasteBoard.noWasteItems
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
         * This usually means the response is a `NoWasteItem` object.)
         * </em>
         */
        R.noWasteItems.updateById = function() {
          var TargetResource = $injector.get("NoWasteItem");
          var action = TargetResource["::updateById::NoWasteBoard::noWasteItems"];
          return action.apply(R, arguments);
        };

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
 * @name lbServices.NoWasteItem
 * @header lbServices.NoWasteItem
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `NoWasteItem` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "NoWasteItem",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/NoWasteItems/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use NoWasteItem.nowasteboard() instead.
        "prototype$__get__nowasteboard": {
          url: urlBase + "/NoWasteItems/:id/nowasteboard",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteItem#create
         * @methodOf lbServices.NoWasteItem
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
         * This usually means the response is a `NoWasteItem` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/NoWasteItems",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteItem#createMany
         * @methodOf lbServices.NoWasteItem
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
         * This usually means the response is a `NoWasteItem` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/NoWasteItems",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteItem#upsert
         * @methodOf lbServices.NoWasteItem
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
         * This usually means the response is a `NoWasteItem` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/NoWasteItems",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteItem#exists
         * @methodOf lbServices.NoWasteItem
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
          url: urlBase + "/NoWasteItems/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteItem#findById
         * @methodOf lbServices.NoWasteItem
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
         * This usually means the response is a `NoWasteItem` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/NoWasteItems/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteItem#find
         * @methodOf lbServices.NoWasteItem
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
         * This usually means the response is a `NoWasteItem` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/NoWasteItems",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteItem#findOne
         * @methodOf lbServices.NoWasteItem
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
         * This usually means the response is a `NoWasteItem` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/NoWasteItems/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteItem#updateAll
         * @methodOf lbServices.NoWasteItem
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
          url: urlBase + "/NoWasteItems/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteItem#deleteById
         * @methodOf lbServices.NoWasteItem
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
         * This usually means the response is a `NoWasteItem` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/NoWasteItems/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteItem#count
         * @methodOf lbServices.NoWasteItem
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
          url: urlBase + "/NoWasteItems/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteItem#prototype$updateAttributes
         * @methodOf lbServices.NoWasteItem
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
         * This usually means the response is a `NoWasteItem` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/NoWasteItems/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.NoWasteItem#createChangeStream
         * @methodOf lbServices.NoWasteItem
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
          url: urlBase + "/NoWasteItems/change-stream",
          method: "POST"
        },

        // INTERNAL. Use NoWasteBoard.noWasteItems.findById() instead.
        "::findById::NoWasteBoard::noWasteItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/NoWasteBoards/:id/noWasteItems/:fk",
          method: "GET"
        },

        // INTERNAL. Use NoWasteBoard.noWasteItems.destroyById() instead.
        "::destroyById::NoWasteBoard::noWasteItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/NoWasteBoards/:id/noWasteItems/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use NoWasteBoard.noWasteItems.updateById() instead.
        "::updateById::NoWasteBoard::noWasteItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/NoWasteBoards/:id/noWasteItems/:fk",
          method: "PUT"
        },

        // INTERNAL. Use NoWasteBoard.noWasteItems() instead.
        "::get::NoWasteBoard::noWasteItems": {
          isArray: true,
          url: urlBase + "/NoWasteBoards/:id/noWasteItems",
          method: "GET"
        },

        // INTERNAL. Use NoWasteBoard.noWasteItems.create() instead.
        "::create::NoWasteBoard::noWasteItems": {
          url: urlBase + "/NoWasteBoards/:id/noWasteItems",
          method: "POST"
        },

        // INTERNAL. Use NoWasteBoard.noWasteItems.createMany() instead.
        "::createMany::NoWasteBoard::noWasteItems": {
          isArray: true,
          url: urlBase + "/NoWasteBoards/:id/noWasteItems",
          method: "POST"
        },

        // INTERNAL. Use NoWasteBoard.noWasteItems.destroyAll() instead.
        "::delete::NoWasteBoard::noWasteItems": {
          url: urlBase + "/NoWasteBoards/:id/noWasteItems",
          method: "DELETE"
        },

        // INTERNAL. Use NoWasteBoard.noWasteItems.count() instead.
        "::count::NoWasteBoard::noWasteItems": {
          url: urlBase + "/NoWasteBoards/:id/noWasteItems/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.NoWasteItem#updateOrCreate
         * @methodOf lbServices.NoWasteItem
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
         * This usually means the response is a `NoWasteItem` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.NoWasteItem#update
         * @methodOf lbServices.NoWasteItem
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
         * @name lbServices.NoWasteItem#destroyById
         * @methodOf lbServices.NoWasteItem
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
         * This usually means the response is a `NoWasteItem` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.NoWasteItem#removeById
         * @methodOf lbServices.NoWasteItem
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
         * This usually means the response is a `NoWasteItem` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.NoWasteItem#modelName
    * @propertyOf lbServices.NoWasteItem
    * @description
    * The name of the model represented by this $resource,
    * i.e. `NoWasteItem`.
    */
    R.modelName = "NoWasteItem";


        /**
         * @ngdoc method
         * @name lbServices.NoWasteItem#nowasteboard
         * @methodOf lbServices.NoWasteItem
         *
         * @description
         *
         * Fetches belongsTo relation nowasteboard.
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
        R.nowasteboard = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::get::NoWasteItem::nowasteboard"];
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

        // INTERNAL. Use Shop.dailyboard() instead.
        "prototype$__get__dailyboard": {
          url: urlBase + "/Shops/:id/dailyboard",
          method: "GET"
        },

        // INTERNAL. Use Shop.dailyboard.create() instead.
        "prototype$__create__dailyboard": {
          url: urlBase + "/Shops/:id/dailyboard",
          method: "POST"
        },

        // INTERNAL. Use Shop.dailyboard.update() instead.
        "prototype$__update__dailyboard": {
          url: urlBase + "/Shops/:id/dailyboard",
          method: "PUT"
        },

        // INTERNAL. Use Shop.dailyboard.destroy() instead.
        "prototype$__destroy__dailyboard": {
          url: urlBase + "/Shops/:id/dailyboard",
          method: "DELETE"
        },

        // INTERNAL. Use Shop.nowasteboard() instead.
        "prototype$__get__nowasteboard": {
          url: urlBase + "/Shops/:id/nowasteboard",
          method: "GET"
        },

        // INTERNAL. Use Shop.nowasteboard.create() instead.
        "prototype$__create__nowasteboard": {
          url: urlBase + "/Shops/:id/nowasteboard",
          method: "POST"
        },

        // INTERNAL. Use Shop.nowasteboard.update() instead.
        "prototype$__update__nowasteboard": {
          url: urlBase + "/Shops/:id/nowasteboard",
          method: "PUT"
        },

        // INTERNAL. Use Shop.nowasteboard.destroy() instead.
        "prototype$__destroy__nowasteboard": {
          url: urlBase + "/Shops/:id/nowasteboard",
          method: "DELETE"
        },

        // INTERNAL. Use Shop.profile() instead.
        "prototype$__get__profile": {
          url: urlBase + "/Shops/:id/profile",
          method: "GET"
        },

        // INTERNAL. Use Shop.address() instead.
        "prototype$__get__address": {
          url: urlBase + "/Shops/:id/address",
          method: "GET"
        },

        // INTERNAL. Use Shop.address.create() instead.
        "prototype$__create__address": {
          url: urlBase + "/Shops/:id/address",
          method: "POST"
        },

        // INTERNAL. Use Shop.address.update() instead.
        "prototype$__update__address": {
          url: urlBase + "/Shops/:id/address",
          method: "PUT"
        },

        // INTERNAL. Use Shop.address.destroy() instead.
        "prototype$__destroy__address": {
          url: urlBase + "/Shops/:id/address",
          method: "DELETE"
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

        // INTERNAL. Use Address.shop() instead.
        "::get::Address::shop": {
          url: urlBase + "/Addresses/:id/shop",
          method: "GET"
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
     * @name lbServices.Shop.dailyboard
     * @header lbServices.Shop.dailyboard
     * @object
     * @description
     *
     * The object `Shop.dailyboard` groups methods
     * manipulating `DailyBoard` instances related to `Shop`.
     *
     * Call {@link lbServices.Shop#dailyboard Shop.dailyboard()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Shop#dailyboard
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Fetches hasOne relation dailyboard.
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
        R.dailyboard = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::get::Shop::dailyboard"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.dailyboard#create
         * @methodOf lbServices.Shop.dailyboard
         *
         * @description
         *
         * Creates a new instance in dailyboard of this model.
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
        R.dailyboard.create = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::create::Shop::dailyboard"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.dailyboard#createMany
         * @methodOf lbServices.Shop.dailyboard
         *
         * @description
         *
         * Creates a new instance in dailyboard of this model.
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
        R.dailyboard.createMany = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::createMany::Shop::dailyboard"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.dailyboard#destroy
         * @methodOf lbServices.Shop.dailyboard
         *
         * @description
         *
         * Deletes dailyboard of this model.
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
        R.dailyboard.destroy = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::destroy::Shop::dailyboard"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.dailyboard#update
         * @methodOf lbServices.Shop.dailyboard
         *
         * @description
         *
         * Update dailyboard of this model.
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
        R.dailyboard.update = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::update::Shop::dailyboard"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Shop.nowasteboard
     * @header lbServices.Shop.nowasteboard
     * @object
     * @description
     *
     * The object `Shop.nowasteboard` groups methods
     * manipulating `NoWasteBoard` instances related to `Shop`.
     *
     * Call {@link lbServices.Shop#nowasteboard Shop.nowasteboard()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Shop#nowasteboard
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Fetches hasOne relation nowasteboard.
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
        R.nowasteboard = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::get::Shop::nowasteboard"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.nowasteboard#create
         * @methodOf lbServices.Shop.nowasteboard
         *
         * @description
         *
         * Creates a new instance in nowasteboard of this model.
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
        R.nowasteboard.create = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::create::Shop::nowasteboard"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.nowasteboard#createMany
         * @methodOf lbServices.Shop.nowasteboard
         *
         * @description
         *
         * Creates a new instance in nowasteboard of this model.
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
        R.nowasteboard.createMany = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::createMany::Shop::nowasteboard"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.nowasteboard#destroy
         * @methodOf lbServices.Shop.nowasteboard
         *
         * @description
         *
         * Deletes nowasteboard of this model.
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
        R.nowasteboard.destroy = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::destroy::Shop::nowasteboard"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.nowasteboard#update
         * @methodOf lbServices.Shop.nowasteboard
         *
         * @description
         *
         * Update nowasteboard of this model.
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
        R.nowasteboard.update = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::update::Shop::nowasteboard"];
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
    /**
     * @ngdoc object
     * @name lbServices.Shop.address
     * @header lbServices.Shop.address
     * @object
     * @description
     *
     * The object `Shop.address` groups methods
     * manipulating `Address` instances related to `Shop`.
     *
     * Call {@link lbServices.Shop#address Shop.address()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Shop#address
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Fetches hasOne relation address.
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
         * This usually means the response is a `Address` object.)
         * </em>
         */
        R.address = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::get::Shop::address"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.address#create
         * @methodOf lbServices.Shop.address
         *
         * @description
         *
         * Creates a new instance in address of this model.
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
         * This usually means the response is a `Address` object.)
         * </em>
         */
        R.address.create = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::create::Shop::address"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.address#createMany
         * @methodOf lbServices.Shop.address
         *
         * @description
         *
         * Creates a new instance in address of this model.
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
         * This usually means the response is a `Address` object.)
         * </em>
         */
        R.address.createMany = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::createMany::Shop::address"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.address#destroy
         * @methodOf lbServices.Shop.address
         *
         * @description
         *
         * Deletes address of this model.
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
        R.address.destroy = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::destroy::Shop::address"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.address#update
         * @methodOf lbServices.Shop.address
         *
         * @description
         *
         * Update address of this model.
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
         * This usually means the response is a `Address` object.)
         * </em>
         */
        R.address.update = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::update::Shop::address"];
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

        // INTERNAL. Use Profile.nowasteboards.findById() instead.
        "prototype$__findById__nowasteboards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/nowasteboards/:fk",
          method: "GET"
        },

        // INTERNAL. Use Profile.nowasteboards.destroyById() instead.
        "prototype$__destroyById__nowasteboards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/nowasteboards/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.nowasteboards.updateById() instead.
        "prototype$__updateById__nowasteboards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/nowasteboards/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Profile.nowasteboards.link() instead.
        "prototype$__link__nowasteboards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/nowasteboards/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Profile.nowasteboards.unlink() instead.
        "prototype$__unlink__nowasteboards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/nowasteboards/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.nowasteboards.exists() instead.
        "prototype$__exists__nowasteboards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/nowasteboards/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Profile.dailyboards.findById() instead.
        "prototype$__findById__dailyboards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/dailyboards/:fk",
          method: "GET"
        },

        // INTERNAL. Use Profile.dailyboards.destroyById() instead.
        "prototype$__destroyById__dailyboards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/dailyboards/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.dailyboards.updateById() instead.
        "prototype$__updateById__dailyboards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/dailyboards/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Profile.dailyboards.link() instead.
        "prototype$__link__dailyboards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/dailyboards/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Profile.dailyboards.unlink() instead.
        "prototype$__unlink__dailyboards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/dailyboards/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.dailyboards.exists() instead.
        "prototype$__exists__dailyboards": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Profiles/:id/dailyboards/rel/:fk",
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

        // INTERNAL. Use Profile.nowasteboards() instead.
        "prototype$__get__nowasteboards": {
          isArray: true,
          url: urlBase + "/Profiles/:id/nowasteboards",
          method: "GET"
        },

        // INTERNAL. Use Profile.nowasteboards.create() instead.
        "prototype$__create__nowasteboards": {
          url: urlBase + "/Profiles/:id/nowasteboards",
          method: "POST"
        },

        // INTERNAL. Use Profile.nowasteboards.destroyAll() instead.
        "prototype$__delete__nowasteboards": {
          url: urlBase + "/Profiles/:id/nowasteboards",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.nowasteboards.count() instead.
        "prototype$__count__nowasteboards": {
          url: urlBase + "/Profiles/:id/nowasteboards/count",
          method: "GET"
        },

        // INTERNAL. Use Profile.dailyboards() instead.
        "prototype$__get__dailyboards": {
          isArray: true,
          url: urlBase + "/Profiles/:id/dailyboards",
          method: "GET"
        },

        // INTERNAL. Use Profile.dailyboards.create() instead.
        "prototype$__create__dailyboards": {
          url: urlBase + "/Profiles/:id/dailyboards",
          method: "POST"
        },

        // INTERNAL. Use Profile.dailyboards.destroyAll() instead.
        "prototype$__delete__dailyboards": {
          url: urlBase + "/Profiles/:id/dailyboards",
          method: "DELETE"
        },

        // INTERNAL. Use Profile.dailyboards.count() instead.
        "prototype$__count__dailyboards": {
          url: urlBase + "/Profiles/:id/dailyboards/count",
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
     * @name lbServices.Profile.nowasteboards
     * @header lbServices.Profile.nowasteboards
     * @object
     * @description
     *
     * The object `Profile.nowasteboards` groups methods
     * manipulating `NoWasteBoard` instances related to `Profile`.
     *
     * Call {@link lbServices.Profile#nowasteboards Profile.nowasteboards()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Profile#nowasteboards
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Queries nowasteboards of Profile.
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
        R.nowasteboards = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::get::Profile::nowasteboards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.nowasteboards#count
         * @methodOf lbServices.Profile.nowasteboards
         *
         * @description
         *
         * Counts nowasteboards of Profile.
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
        R.nowasteboards.count = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::count::Profile::nowasteboards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.nowasteboards#create
         * @methodOf lbServices.Profile.nowasteboards
         *
         * @description
         *
         * Creates a new instance in nowasteboards of this model.
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
        R.nowasteboards.create = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::create::Profile::nowasteboards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.nowasteboards#createMany
         * @methodOf lbServices.Profile.nowasteboards
         *
         * @description
         *
         * Creates a new instance in nowasteboards of this model.
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
        R.nowasteboards.createMany = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::createMany::Profile::nowasteboards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.nowasteboards#destroyAll
         * @methodOf lbServices.Profile.nowasteboards
         *
         * @description
         *
         * Deletes all nowasteboards of this model.
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
        R.nowasteboards.destroyAll = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::delete::Profile::nowasteboards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.nowasteboards#destroyById
         * @methodOf lbServices.Profile.nowasteboards
         *
         * @description
         *
         * Delete a related item by id for nowasteboards.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for nowasteboards
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
        R.nowasteboards.destroyById = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::destroyById::Profile::nowasteboards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.nowasteboards#exists
         * @methodOf lbServices.Profile.nowasteboards
         *
         * @description
         *
         * Check the existence of nowasteboards relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for nowasteboards
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
        R.nowasteboards.exists = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::exists::Profile::nowasteboards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.nowasteboards#findById
         * @methodOf lbServices.Profile.nowasteboards
         *
         * @description
         *
         * Find a related item by id for nowasteboards.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for nowasteboards
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
        R.nowasteboards.findById = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::findById::Profile::nowasteboards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.nowasteboards#link
         * @methodOf lbServices.Profile.nowasteboards
         *
         * @description
         *
         * Add a related item by id for nowasteboards.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for nowasteboards
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
        R.nowasteboards.link = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::link::Profile::nowasteboards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.nowasteboards#unlink
         * @methodOf lbServices.Profile.nowasteboards
         *
         * @description
         *
         * Remove the nowasteboards relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for nowasteboards
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
        R.nowasteboards.unlink = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::unlink::Profile::nowasteboards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.nowasteboards#updateById
         * @methodOf lbServices.Profile.nowasteboards
         *
         * @description
         *
         * Update a related item by id for nowasteboards.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for nowasteboards
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
        R.nowasteboards.updateById = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::updateById::Profile::nowasteboards"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Profile.dailyboards
     * @header lbServices.Profile.dailyboards
     * @object
     * @description
     *
     * The object `Profile.dailyboards` groups methods
     * manipulating `DailyBoard` instances related to `Profile`.
     *
     * Call {@link lbServices.Profile#dailyboards Profile.dailyboards()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Profile#dailyboards
         * @methodOf lbServices.Profile
         *
         * @description
         *
         * Queries dailyboards of Profile.
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
        R.dailyboards = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::get::Profile::dailyboards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.dailyboards#count
         * @methodOf lbServices.Profile.dailyboards
         *
         * @description
         *
         * Counts dailyboards of Profile.
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
        R.dailyboards.count = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::count::Profile::dailyboards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.dailyboards#create
         * @methodOf lbServices.Profile.dailyboards
         *
         * @description
         *
         * Creates a new instance in dailyboards of this model.
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
        R.dailyboards.create = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::create::Profile::dailyboards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.dailyboards#createMany
         * @methodOf lbServices.Profile.dailyboards
         *
         * @description
         *
         * Creates a new instance in dailyboards of this model.
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
        R.dailyboards.createMany = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::createMany::Profile::dailyboards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.dailyboards#destroyAll
         * @methodOf lbServices.Profile.dailyboards
         *
         * @description
         *
         * Deletes all dailyboards of this model.
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
        R.dailyboards.destroyAll = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::delete::Profile::dailyboards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.dailyboards#destroyById
         * @methodOf lbServices.Profile.dailyboards
         *
         * @description
         *
         * Delete a related item by id for dailyboards.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for dailyboards
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
        R.dailyboards.destroyById = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::destroyById::Profile::dailyboards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.dailyboards#exists
         * @methodOf lbServices.Profile.dailyboards
         *
         * @description
         *
         * Check the existence of dailyboards relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for dailyboards
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
        R.dailyboards.exists = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::exists::Profile::dailyboards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.dailyboards#findById
         * @methodOf lbServices.Profile.dailyboards
         *
         * @description
         *
         * Find a related item by id for dailyboards.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for dailyboards
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
        R.dailyboards.findById = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::findById::Profile::dailyboards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.dailyboards#link
         * @methodOf lbServices.Profile.dailyboards
         *
         * @description
         *
         * Add a related item by id for dailyboards.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for dailyboards
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
        R.dailyboards.link = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::link::Profile::dailyboards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.dailyboards#unlink
         * @methodOf lbServices.Profile.dailyboards
         *
         * @description
         *
         * Remove the dailyboards relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for dailyboards
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
        R.dailyboards.unlink = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::unlink::Profile::dailyboards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Profile.dailyboards#updateById
         * @methodOf lbServices.Profile.dailyboards
         *
         * @description
         *
         * Update a related item by id for dailyboards.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for dailyboards
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
        R.dailyboards.updateById = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::updateById::Profile::dailyboards"];
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

        // INTERNAL. Use NoWasteBoardSubscription.nowasteboard() instead.
        "prototype$__get__nowasteboard": {
          url: urlBase + "/NoWasteBoardSubscriptions/:id/nowasteboard",
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
         * @name lbServices.NoWasteBoardSubscription#nowasteboard
         * @methodOf lbServices.NoWasteBoardSubscription
         *
         * @description
         *
         * Fetches belongsTo relation nowasteboard.
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
        R.nowasteboard = function() {
          var TargetResource = $injector.get("NoWasteBoard");
          var action = TargetResource["::get::NoWasteBoardSubscription::nowasteboard"];
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

        // INTERNAL. Use DailyBoardSubscription.dailyboard() instead.
        "prototype$__get__dailyboard": {
          url: urlBase + "/DailyBoardSubscriptions/:id/dailyboard",
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
         * @name lbServices.DailyBoardSubscription#dailyboard
         * @methodOf lbServices.DailyBoardSubscription
         *
         * @description
         *
         * Fetches belongsTo relation dailyboard.
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
        R.dailyboard = function() {
          var TargetResource = $injector.get("DailyBoard");
          var action = TargetResource["::get::DailyBoardSubscription::dailyboard"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Address
 * @header lbServices.Address
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Address` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Address",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Addresses/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Address.shop() instead.
        "prototype$__get__shop": {
          url: urlBase + "/Addresses/:id/shop",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Address#create
         * @methodOf lbServices.Address
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
         * This usually means the response is a `Address` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Addresses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Address#createMany
         * @methodOf lbServices.Address
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
         * This usually means the response is a `Address` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Addresses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Address#upsert
         * @methodOf lbServices.Address
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
         * This usually means the response is a `Address` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Addresses",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Address#exists
         * @methodOf lbServices.Address
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
          url: urlBase + "/Addresses/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Address#findById
         * @methodOf lbServices.Address
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
         * This usually means the response is a `Address` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Addresses/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Address#find
         * @methodOf lbServices.Address
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
         * This usually means the response is a `Address` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Addresses",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Address#findOne
         * @methodOf lbServices.Address
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
         * This usually means the response is a `Address` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Addresses/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Address#updateAll
         * @methodOf lbServices.Address
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
          url: urlBase + "/Addresses/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Address#deleteById
         * @methodOf lbServices.Address
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
         * This usually means the response is a `Address` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Addresses/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Address#count
         * @methodOf lbServices.Address
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
          url: urlBase + "/Addresses/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Address#prototype$updateAttributes
         * @methodOf lbServices.Address
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
         * This usually means the response is a `Address` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Addresses/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Address#createChangeStream
         * @methodOf lbServices.Address
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
          url: urlBase + "/Addresses/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Shop.address() instead.
        "::get::Shop::address": {
          url: urlBase + "/Shops/:id/address",
          method: "GET"
        },

        // INTERNAL. Use Shop.address.create() instead.
        "::create::Shop::address": {
          url: urlBase + "/Shops/:id/address",
          method: "POST"
        },

        // INTERNAL. Use Shop.address.createMany() instead.
        "::createMany::Shop::address": {
          isArray: true,
          url: urlBase + "/Shops/:id/address",
          method: "POST"
        },

        // INTERNAL. Use Shop.address.update() instead.
        "::update::Shop::address": {
          url: urlBase + "/Shops/:id/address",
          method: "PUT"
        },

        // INTERNAL. Use Shop.address.destroy() instead.
        "::destroy::Shop::address": {
          url: urlBase + "/Shops/:id/address",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Address#updateOrCreate
         * @methodOf lbServices.Address
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
         * This usually means the response is a `Address` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Address#update
         * @methodOf lbServices.Address
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
         * @name lbServices.Address#destroyById
         * @methodOf lbServices.Address
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
         * This usually means the response is a `Address` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Address#removeById
         * @methodOf lbServices.Address
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
         * This usually means the response is a `Address` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Address#modelName
    * @propertyOf lbServices.Address
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Address`.
    */
    R.modelName = "Address";


        /**
         * @ngdoc method
         * @name lbServices.Address#shop
         * @methodOf lbServices.Address
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
          var action = TargetResource["::get::Address::shop"];
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
