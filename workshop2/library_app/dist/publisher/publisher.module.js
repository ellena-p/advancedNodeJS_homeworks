"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublisherModule = void 0;
const common_1 = require("@nestjs/common");
const publisher_service_1 = require("./publisher.service");
const publisher_controller_1 = require("./publisher.controller");
const publisher_entity_1 = require("./entities/publisher.entity");
const book_entity_1 = require("../book/entities/book.entity");
const typeorm_1 = require("@nestjs/typeorm");
let PublisherModule = class PublisherModule {
};
PublisherModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([publisher_entity_1.PublisherEntity, book_entity_1.BookEntity])],
        providers: [publisher_service_1.PublisherService],
        controllers: [publisher_controller_1.PublisherController]
    })
], PublisherModule);
exports.PublisherModule = PublisherModule;
//# sourceMappingURL=publisher.module.js.map