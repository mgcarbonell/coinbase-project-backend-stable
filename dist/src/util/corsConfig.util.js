"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsConfig = void 0;
const accessList = [process.env.CLIENT_URL, "http://localhost:3000"];
const options = {
    origin: "accessList",
    methods: "GET,PUT,POST,DELETE,OPTIONS",
};
exports.corsConfig = options;
//# sourceMappingURL=corsConfig.util.js.map