System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var FabricIcon;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            FabricIcon = (function () {
                function FabricIcon() {
                    this.fabricIconType = "none";
                }
                FabricIcon.prototype.getClasses = function () {
                };
                FabricIcon.prototype.getStaticClasses = function () {
                    return "ms-icon";
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FabricIcon.prototype, "fabricIconType", void 0);
                FabricIcon = __decorate([
                    core_1.Component({
                        selector: 'fabric-icon',
                        template: '<i *ng-if="iconName !== unspecified" [ngClass]="class="ms-Icon ms-Icon--{{iconName}}"></i>',
                        directives: [common_1.NgClass, common_1.NgIf]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FabricIcon);
                return FabricIcon;
            })();
            exports_1("FabricIcon", FabricIcon);
        }
    }
});
//# sourceMappingURL=fabric.icon.component.js.map