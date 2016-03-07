System.register(['../utility/enum'], function(exports_1) {
    var enum_1;
    var AnimationType;
    return {
        setters:[
            function (enum_1_1) {
                enum_1 = enum_1_1;
            }],
        execute: function() {
            (function (AnimationType) {
                AnimationType[AnimationType["Unspecified"] = 0] = "Unspecified";
                AnimationType[AnimationType["SlideRightIn40"] = 1] = "SlideRightIn40";
                AnimationType[AnimationType["SlideLeftIn40"] = 2] = "SlideLeftIn40";
                AnimationType[AnimationType["SlideUpIn20"] = 3] = "SlideUpIn20";
                AnimationType[AnimationType["SlideUpIn10"] = 4] = "SlideUpIn10";
                AnimationType[AnimationType["SlideDownIn20"] = 5] = "SlideDownIn20";
                AnimationType[AnimationType["SlideDownIn10"] = 6] = "SlideDownIn10";
                AnimationType[AnimationType["SlideRightOut40"] = 7] = "SlideRightOut40";
                AnimationType[AnimationType["SlideLeftOut40"] = 8] = "SlideLeftOut40";
                AnimationType[AnimationType["SlideUpOut20"] = 9] = "SlideUpOut20";
                AnimationType[AnimationType["SlideUpOut10"] = 10] = "SlideUpOut10";
                AnimationType[AnimationType["SlideDownOut20"] = 11] = "SlideDownOut20";
                AnimationType[AnimationType["SlideDownOut10"] = 12] = "SlideDownOut10";
                AnimationType[AnimationType["ScaleUpIn100"] = 13] = "ScaleUpIn100";
                AnimationType[AnimationType["ScaleDownIn100"] = 14] = "ScaleDownIn100";
                AnimationType[AnimationType["ScaleUpOut103"] = 15] = "ScaleUpOut103";
                AnimationType[AnimationType["ScaleDownOut98"] = 16] = "ScaleDownOut98";
                AnimationType[AnimationType["FadeIn100"] = 17] = "FadeIn100";
                AnimationType[AnimationType["FadeIn200"] = 18] = "FadeIn200";
                AnimationType[AnimationType["FadeIn400"] = 19] = "FadeIn400";
                AnimationType[AnimationType["FadeIn500"] = 20] = "FadeIn500";
                AnimationType[AnimationType["FadeOut100"] = 21] = "FadeOut100";
                AnimationType[AnimationType["FadeOut200"] = 22] = "FadeOut200";
                AnimationType[AnimationType["FadeOut400"] = 23] = "FadeOut400";
                AnimationType[AnimationType["FadeOut500"] = 24] = "FadeOut500";
            })(AnimationType || (AnimationType = {}));
            exports_1("AnimationType", AnimationType);
            (function (AnimationType) {
                AnimationType.metadata = new enum_1.EnumMetadata(AnimationType, 'AnimationType');
                AnimationType.wrap = AnimationType.metadata.wrap;
            })(AnimationType = AnimationType || (AnimationType = {}));
            exports_1("AnimationType", AnimationType);
        }
    }
});
//# sourceMappingURL=fabric.animationtype.enum.js.map