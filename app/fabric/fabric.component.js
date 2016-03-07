System.register(['../utility/enum'], function(exports_1) {
    var enum_1;
    var AnimationType, Color, FabricComponent;
    return {
        setters:[
            function (enum_1_1) {
                enum_1 = enum_1_1;
            }],
        execute: function() {
            (function (AnimationType) {
                AnimationType[AnimationType["slideRightIn40"] = 0] = "slideRightIn40";
                AnimationType[AnimationType["slideLeftIn40"] = 1] = "slideLeftIn40";
                AnimationType[AnimationType["slideUpIn20"] = 2] = "slideUpIn20";
                AnimationType[AnimationType["slideUpIn10"] = 3] = "slideUpIn10";
                AnimationType[AnimationType["slideDownIn20"] = 4] = "slideDownIn20";
                AnimationType[AnimationType["slideDownIn10"] = 5] = "slideDownIn10";
                AnimationType[AnimationType["slideRightOut40"] = 6] = "slideRightOut40";
                AnimationType[AnimationType["slideLeftOut40"] = 7] = "slideLeftOut40";
                AnimationType[AnimationType["slideUpOut20"] = 8] = "slideUpOut20";
                AnimationType[AnimationType["slideUpOut10"] = 9] = "slideUpOut10";
                AnimationType[AnimationType["slideDownOut20"] = 10] = "slideDownOut20";
                AnimationType[AnimationType["slideDownOut10"] = 11] = "slideDownOut10";
                AnimationType[AnimationType["scaleUpIn100"] = 12] = "scaleUpIn100";
                AnimationType[AnimationType["scaleDownIn100"] = 13] = "scaleDownIn100";
                AnimationType[AnimationType["scaleUpOut103"] = 14] = "scaleUpOut103";
                AnimationType[AnimationType["scaleDownOut98"] = 15] = "scaleDownOut98";
                AnimationType[AnimationType["fadeIn100"] = 16] = "fadeIn100";
                AnimationType[AnimationType["fadeIn200"] = 17] = "fadeIn200";
                AnimationType[AnimationType["fadeIn400"] = 18] = "fadeIn400";
                AnimationType[AnimationType["fadeIn500"] = 19] = "fadeIn500";
                AnimationType[AnimationType["fadeOut100"] = 20] = "fadeOut100";
                AnimationType[AnimationType["fadeOut200"] = 21] = "fadeOut200";
                AnimationType[AnimationType["fadeOut400"] = 22] = "fadeOut400";
                AnimationType[AnimationType["fadeOut500"] = 23] = "fadeOut500";
            })(AnimationType || (AnimationType = {}));
            exports_1("AnimationType", AnimationType);
            (function (Color) {
                Color.metadata = new enum_1.EnumMetadata(AnimationType, 'AnimationType');
                Color.wrap = Color.metadata.wrap;
            })(Color = Color || (Color = {}));
            exports_1("Color", Color);
            FabricComponent = (function () {
                function FabricComponent() {
                }
                FabricComponent.prototype.getClasses = function () {
                    var classes = new Array();
                    return classes;
                };
                FabricComponent.prototype.getStaticClasses = function () {
                    return null;
                };
                FabricComponent.prototype.addClass = function (className) {
                };
                return FabricComponent;
            })();
            exports_1("FabricComponent", FabricComponent);
        }
    }
});
//# sourceMappingURL=fabric.component.js.map