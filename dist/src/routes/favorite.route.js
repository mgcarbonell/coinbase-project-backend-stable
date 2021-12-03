"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const favorite_controller_1 = require("../controllers/favorite.controller");
const favoriteRoutes = (app) => {
    app.get("/api/v1/favorite", favorite_controller_1.getFavorite);
    app.get("/api/v1/favorite/:id", favorite_controller_1.getSingleFavorite);
    app.post("/api/v1/favorite", favorite_controller_1.createFavorite);
    app.delete("/api/v1/favorite/:id", favorite_controller_1.deleteFavorite);
    app.put("/api/v1/favorite/:id", favorite_controller_1.updateFavorite);
};
exports.default = favoriteRoutes;
//# sourceMappingURL=favorite.route.js.map