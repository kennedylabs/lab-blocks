System.register(['lodash', './globals'], function(exports_1) {
    var _, globals_1;
    var defaultEnumOptions, EnumMetadata, EnumValueWrapper;
    return {
        setters:[
            function (_1) {
                _ = _1;
            },
            function (globals_1_1) {
                globals_1 = globals_1_1;
            }],
        execute: function() {
            ;
            defaultEnumOptions = {
                doNumericChecks: globals_1.switches.get('isDevMode'),
                useZeroDefault: true,
                throwForBadNumericCheck: false,
                jsStringTransform: _.camelCase,
                jsStringPrefix: "",
                jsStringPostfix: "",
                displayNameTransform: _.startCase,
                displayStringTransform: _.startCase,
                inverseStringTransform: null
            };
            EnumMetadata = (function () {
                function EnumMetadata(enumeration, name, options) {
                    this.enumeration = enumeration;
                    this.name = name;
                    this.config = options ? _.merge({}, defaultEnumOptions, options) : defaultEnumOptions;
                    if (this.config.useZeroDefault && !_.isString(enumeration[0]))
                        this.config.useZeroDefault = false;
                }
                Object.defineProperty(EnumMetadata.prototype, "displayName", {
                    get: function () {
                        return _.isFunction(this.config.displayNameTransform) ?
                            this.config.displayNameTransform(this.name) : this.name;
                    },
                    enumerable: true,
                    configurable: true
                });
                EnumMetadata.prototype.getValue = function (enumValueOrString, doInverseTransform) {
                    if (doInverseTransform === void 0) { doInverseTransform = false; }
                    var str = _.isString(enumValueOrString) ? enumValueOrString : "";
                    if (str && doInverseTransform)
                        str = this.transformStringInverse(str);
                    else if (this.config.doNumericChecks && _.isNumber(enumValueOrString))
                        str = this.enumeration[enumValueOrString];
                    var val = str ? this.enumeration[str] : enumValueOrString;
                    if (this.config.doNumericChecks && !_.isNumber(val)) {
                        if (this.config.useZeroDefault)
                            val = 0;
                        else if (this.config.throwForBadNumericCheck)
                            throw new Error('Enumeration value or string is not valid.');
                        else
                            val = null;
                    }
                    ;
                    return val;
                };
                EnumMetadata.prototype.getJSString = function (enumValue) {
                    var str = this.getStringForEnumValue(enumValue);
                    if (_.isFunction(this.config.jsStringTransform))
                        str = this.config.jsStringTransform(str);
                    if (_.isString(this.config.jsStringPrefix))
                        str = this.config.jsStringPrefix + str;
                    if (_.isString(this.config.jsStringPostfix))
                        str = str + this.config.jsStringPostfix;
                    return str;
                };
                EnumMetadata.prototype.getDisplayString = function (enumValue) {
                    var str = this.getStringForEnumValue(enumValue);
                    if (_.isFunction(this.config.displayStringTransform))
                        str = this.config.displayStringTransform(str);
                    return str;
                };
                EnumMetadata.prototype.wrap = function (enumValueOrString) {
                    return new EnumValueWrapper(this, enumValueOrString);
                };
                EnumMetadata.prototype.getValues = function () {
                    return _.values(this.enumeration).filter(_.isNumber);
                };
                EnumMetadata.prototype.getStringForEnumValue = function (enumValue) {
                    var str = this.enumeration[enumValue];
                    if (!_.isString(str) && this.config.useZeroDefault)
                        str = this.enumeration[0];
                    if (!str)
                        throw new Error('Enumeration value is not valid.');
                    return str;
                };
                EnumMetadata.prototype.transformStringInverse = function (str) {
                    str = _.isString(str) ? str : "";
                    if (_.isString(this.config.jsStringPrefix) && this.config.jsStringPrefix.length &&
                        str.startsWith(this.config.jsStringPrefix))
                        str = str.slice(this.config.jsStringPrefix.length);
                    if (_.isString(this.config.jsStringPostfix) && this.config.jsStringPostfix.length &&
                        str.startsWith(this.config.jsStringPostfix))
                        str = str.slice(this.config.jsStringPostfix.length);
                    str.replace(" ", "");
                    if (_.isFunction(this.config.inverseStringTransform))
                        str = this.config.inverseStringTransform(str);
                    return str;
                };
                return EnumMetadata;
            })();
            exports_1("EnumMetadata", EnumMetadata);
            EnumValueWrapper = (function () {
                function EnumValueWrapper(metadata, enumValueOrString) {
                    this.metadata = metadata;
                    this.set(enumValueOrString);
                }
                Object.defineProperty(EnumValueWrapper.prototype, "value", {
                    get: function () {
                        return this.metadata.getValue(this.enumValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EnumValueWrapper.prototype, "jsString", {
                    get: function () {
                        return this.metadata.getJSString(this.enumValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EnumValueWrapper.prototype, "displayString", {
                    get: function () {
                        return this.metadata.getDisplayString(this.enumValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                EnumValueWrapper.prototype.set = function (enumValueOrString) {
                    this.enumValue = this.metadata.getValue(enumValueOrString);
                };
                return EnumValueWrapper;
            })();
            exports_1("EnumValueWrapper", EnumValueWrapper);
        }
    }
});
//# sourceMappingURL=enum.js.map