var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";
import 'rxjs/add/operator/map';
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.apiRoot = '';
        var token = [];
        this.headers = new Headers({ 'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new RequestOptions({ headers: this.headers });
    }
    HttpService.prototype.post = function (url, parameters) {
        var json = [];
        if (!parameters) {
            var parameters_1 = {};
        }
        var apiURL = "" + this.apiRoot;
        return this.http.post(apiURL + url, parameters, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    HttpService.prototype.get = function (url) {
        var apiURL = "" + this.apiRoot;
        return this.http.get(apiURL + url, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    HttpService.prototype.handleError = function (error) {
        return Observable.throw(error.json().error || 'Server error');
    };
    HttpService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], HttpService);
    return HttpService;
}());
export { HttpService };
//# sourceMappingURL=http.service.js.map