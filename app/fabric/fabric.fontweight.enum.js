System.register(['../utility/enum'], function(exports_1) {
    var enum_1;
    var FontWeight, Color;
    return {
        setters:[
            function (enum_1_1) {
                enum_1 = enum_1_1;
            }],
        execute: function() {
            (function (FontWeight) {
                FontWeight[FontWeight["unspecified"] = 0] = "unspecified";
                FontWeight[FontWeight["light"] = 1] = "light";
                FontWeight[FontWeight["semilight"] = 2] = "semilight";
                FontWeight[FontWeight["regular"] = 3] = "regular";
                FontWeight[FontWeight["semiBold"] = 4] = "semiBold";
            })(FontWeight || (FontWeight = {}));
            exports_1("FontWeight", FontWeight);
            (function (Color) {
                Color.metadata = new enum_1.EnumMetadata(FontWeight, 'FontWeight');
                Color.wrap = Color.metadata.wrap;
            })(Color = Color || (Color = {}));
            exports_1("Color", Color);
        }
    }
});
//# sourceMappingURL=fabric.fontweight.enum.js.map