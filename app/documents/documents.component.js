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
var core_1 = require("@angular/core");
var DocumentsComponent = (function () {
    function DocumentsComponent() {
        this.pageTitle = "Document Dashboard";
        this.documents = [
            {
                title: "My first doc",
                description: "an angular experiment",
                file_url: 'www.google.com',
                updated_at: '1/1/2017',
                image_url: 'https://c2.staticflickr.com/6/5490/14525128103_08a505b99c_b.jpg'
            },
            {
                title: "My second doc",
                description: "an angular experiment",
                file_url: 'www.google.com',
                updated_at: '1/1/2017',
                image_url: 'https://c2.staticflickr.com/4/3925/15354675906_4a5a05d088_b.jpg'
            },
            {
                title: "My third doc",
                description: "an angular experiment",
                file_url: 'www.google.com',
                updated_at: '1/1/2017',
                image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/STS-135_final_flyaround_of_ISS_1.jpg/500px-STS-135_final_flyaround_of_ISS_1.jpg'
            }
        ];
    }
    return DocumentsComponent;
}());
DocumentsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'documents',
        templateUrl: 'documents.component.html',
        styleUrls: ['documents.component.css']
    }),
    __metadata("design:paramtypes", [])
], DocumentsComponent);
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map