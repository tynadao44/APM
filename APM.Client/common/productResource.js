(function () {
    angular
        .module("common.services")
        .factory("productResource",
            ["$resource",
                "appSettings",
                ProductResource])

    function ProductResource($resource, appSettings) {
        return $resource(appSettings.serverPath + "/api/Products/:id");
    }
}());