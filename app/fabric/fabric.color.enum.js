System.register(['../utility/enum'], function(exports_1) {
    var enum_1;
    var Color;
    return {
        setters:[
            function (enum_1_1) {
                enum_1 = enum_1_1;
            }],
        execute: function() {
            (function (Color) {
                Color[Color["Unspecified"] = 0] = "Unspecified";
                Color[Color["ThemeDarker"] = 1] = "ThemeDarker";
                Color[Color["ThemeDark"] = 2] = "ThemeDark";
                Color[Color["ThemeDarkAlt"] = 3] = "ThemeDarkAlt";
                Color[Color["ThemePrimary"] = 4] = "ThemePrimary";
                Color[Color["ThemeSecondary"] = 5] = "ThemeSecondary";
                Color[Color["ThemeTertiary"] = 6] = "ThemeTertiary";
                Color[Color["ThemeLight"] = 7] = "ThemeLight";
                Color[Color["ThemeLighter"] = 8] = "ThemeLighter";
                Color[Color["ThemeLighterAlt"] = 9] = "ThemeLighterAlt";
                Color[Color["Black"] = 10] = "Black";
                Color[Color["NeutralDark"] = 11] = "NeutralDark";
                Color[Color["NeutralPrimary"] = 12] = "NeutralPrimary";
                Color[Color["NeutralSecondary"] = 13] = "NeutralSecondary";
                Color[Color["NeutralSecondaryAlt"] = 14] = "NeutralSecondaryAlt";
                Color[Color["NeutralTertiary"] = 15] = "NeutralTertiary";
                Color[Color["NeutralTertiaryAlt"] = 16] = "NeutralTertiaryAlt";
                Color[Color["NeutralLight"] = 17] = "NeutralLight";
                Color[Color["NeutralLighter"] = 18] = "NeutralLighter";
                Color[Color["NeutralLighterAlt"] = 19] = "NeutralLighterAlt";
                Color[Color["White"] = 20] = "White";
                Color[Color["Yellow"] = 21] = "Yellow";
                Color[Color["YellowLight"] = 22] = "YellowLight";
                Color[Color["Orange"] = 23] = "Orange";
                Color[Color["OrangeLight"] = 24] = "OrangeLight";
                Color[Color["OrangeLighter"] = 25] = "OrangeLighter";
                Color[Color["RedDark"] = 26] = "RedDark";
                Color[Color["Red"] = 27] = "Red";
                Color[Color["MagentaLight"] = 28] = "MagentaLight";
                Color[Color["Magenta"] = 29] = "Magenta";
                Color[Color["MagentaDark"] = 30] = "MagentaDark";
                Color[Color["PurpleLight"] = 31] = "PurpleLight";
                Color[Color["Purple"] = 32] = "Purple";
                Color[Color["PurpleDark"] = 33] = "PurpleDark";
                Color[Color["BlueLight"] = 34] = "BlueLight";
                Color[Color["BlueMid"] = 35] = "BlueMid";
                Color[Color["Blue"] = 36] = "Blue";
                Color[Color["BlueDark"] = 37] = "BlueDark";
                Color[Color["TealLight"] = 38] = "TealLight";
                Color[Color["Teal"] = 39] = "Teal";
                Color[Color["TealDark"] = 40] = "TealDark";
                Color[Color["GreenLight"] = 41] = "GreenLight";
                Color[Color["Green"] = 42] = "Green";
                Color[Color["GreenDark"] = 43] = "GreenDark";
                Color[Color["Info"] = 44] = "Info";
                Color[Color["Success"] = 45] = "Success";
                Color[Color["Alert"] = 46] = "Alert";
                Color[Color["Error"] = 47] = "Error";
            })(Color || (Color = {}));
            exports_1("Color", Color);
            (function (Color) {
                Color.metadata = new enum_1.EnumMetadata(Color, 'Color');
                Color.wrap = Color.metadata.wrap;
            })(Color = Color || (Color = {}));
            exports_1("Color", Color);
        }
    }
});
//# sourceMappingURL=fabric.color.enum.js.map