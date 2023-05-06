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
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const book_entity_1 = require("./entities/book.entity");
const typeorm_2 = require("typeorm");
const author_entity_1 = require("../author/entities/author.entity");
const publisher_entity_1 = require("../publisher/entities/publisher.entity");
let BookService = class BookService {
    constructor(bookRepository, authorRepository, publisherRepository) {
        this.bookRepository = bookRepository;
        this.authorRepository = authorRepository;
        this.publisherRepository = publisherRepository;
    }
    getBooks() {
        return this.bookRepository.find({
            relations: ['author', 'publisher'],
        });
    }
    async insertBook(bookDto, authorId, publisherId) {
        const author = await this.authorRepository.findOneBy({ id: authorId });
        const publisher = await this.publisherRepository.findOneBy({ id: publisherId });
        const book = Object.assign(Object.assign({}, bookDto), { author: author, publisher: publisher });
        const bookInserted = this.bookRepository.create(book);
        const bookSaved = await this.bookRepository.save(bookInserted);
        return book.id;
    }
};
BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(book_entity_1.BookEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(author_entity_1.AuthorEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(publisher_entity_1.PublisherEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map