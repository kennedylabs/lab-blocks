System.register(['../utility/enum', 'lodash'], function(exports_1) {
    var enum_1, _;
    var FontSize;
    return {
        setters:[
            function (enum_1_1) {
                enum_1 = enum_1_1;
            },
            function (_1) {
                _ = _1;
            }],
        execute: function() {
            (function (FontSize) {
                FontSize[FontSize["Unknown"] = 0] = "Unknown";
                FontSize[FontSize["SU"] = 1] = "SU";
                FontSize[FontSize["XXL"] = 2] = "XXL";
                FontSize[FontSize["XL"] = 3] = "XL";
                FontSize[FontSize["L"] = 4] = "L";
                FontSize[FontSize["MPlus"] = 5] = "MPlus";
                FontSize[FontSize["M"] = 6] = "M";
                FontSize[FontSize["SPlus"] = 7] = "SPlus";
                FontSize[FontSize["S"] = 8] = "S";
                FontSize[FontSize["XS"] = 9] = "XS";
                FontSize[FontSize["MI"] = 10] = "MI";
            })(FontSize || (FontSize = {}));
            exports_1("FontSize", FontSize);
            (function (FontSize) {
                FontSize.metadata = new enum_1.EnumMetadata(FontSize, 'FontSize', {
                    displayStringTransform: getDisplayString,
                    inverseStringTransform: getInverseDisplayString
                });
                FontSize.wrap = FontSize.metadata.wrap;
                function getDisplayString(str) {
                    return _.startCase(str
                        .replace('MI', 'Miniature')
                        .replace('S', 'Small')
                        .replace('M', 'Medium')
                        .replace('L', 'Large')
                        .replace('X', 'Extra')
                        .replace('SU', 'Supersized'));
                }
                function getInverseDisplayString(str) {
                    return _.startCase(str
                        .replace('Miniature', 'MI')
                        .replace('Small', 'S')
                        .replace('Medium', 'M')
                        .replace('Large', 'L')
                        .replace('Extra', 'X')
                        .replace('Supersized', 'SU'));
                }
            })(FontSize = FontSize || (FontSize = {}));
            exports_1("FontSize", FontSize);
        }
    }
});
//# sourceMappingURL=fabric.fontsize.enum.js.map