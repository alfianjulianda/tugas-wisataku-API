"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const default_1 = require("@apollo/server/plugin/landingPage/default");
const path_1 = require("path");
const destinasi_module_1 = require("./destinasi/destinasi.module");
const fasilitas_module_1 = require("./fasilitas/fasilitas.module");
const prisma_module_1 = require("./prisma/prisma.module");
const ulasan_module_1 = require("./ulasan/ulasan.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                sortSchema: true,
                graphiql: false,
                plugins: [
                    (0, default_1.ApolloServerPluginLandingPageLocalDefault)(),
                ],
            }),
            prisma_module_1.PrismaModule,
            destinasi_module_1.DestinasiModule,
            ulasan_module_1.UlasanModule,
            fasilitas_module_1.FasilitasModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map