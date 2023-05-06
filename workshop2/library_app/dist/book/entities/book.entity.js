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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookEntity = void 0;
const author_entity_1 = require("../../author/entities/author.entity");
const publisher_entity_1 = require("../../publisher/entities/publisher.entity");
const typeorm_1 = require("typeorm");
let BookEntity = class BookEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], BookEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BookEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BookEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BookEntity.prototype, "genre", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => author_entity_1.AuthorEntity, (author) => author.books),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Object)
], BookEntity.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => publisher_entity_1.PublisherEntity, (publisher) => publisher.books),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Object)
], BookEntity.prototype, "publisher", void 0);
BookEntity = __decorate([
    (0, typeorm_1.Entity)('books')
], BookEntity);
exports.BookEntity = BookEntity;
//# sourceMappingURL=book.entity.js.map