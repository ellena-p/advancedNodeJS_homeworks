"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublisherController = void 0;
const common_1 = require("@nestjs/common");
const publisher_service_1 = require("./publisher.service");
const publisher_dto_1 = require("./dto/publisher.dto");
let PublisherController = class PublisherController {
    constructor(publisherService) {
        this.publisherService = publisherService;
    }
    getPublishers() {
        const publishers = this.publisherService.getPublishers();
        return publishers;
    }
    async inserPublisher(body) {
        const author = await this.publisherService.inserPublisher(body);
        return {
            message: `Publisher was inserted`,
        };
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublisherController.prototype, "getPublishers", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [publisher_dto_1.PublisherDto]),
    __metadata("design:returntype", Promise)
], PublisherController.prototype, "inserPublisher", null);
PublisherController = __decorate([
    (0, common_1.Controller)('publisher'),
    __metadata("design:paramtypes", [publisher_service_1.PublisherService])
], PublisherController);
exports.PublisherController = PublisherController;
//# sourceMappingURL=publisher.controller.js.map