
export class StringToggle {
  private _stringValue: string;
  private _isActive: boolean;
  private _jsStringsCollection: Set<string> = null;

  constructor(stringValue: string);
  constructor(stringValue: string, isActive: boolean);
  constructor(jsStringsCollection: Set<string>, stringValue: string);
  constructor(jsStringsCollection: Set<string>, stringValue: string, isActive: boolean);
  constructor(jsStringsCollectionOrStringValue: Set<string> | string,
    stringValueOrIsActive?: string | boolean, isActive?: boolean) {
    this._jsStringsCollection = jsStringsCollectionOrStringValue &&
      typeof jsStringsCollectionOrStringValue !== 'string' ?
      jsStringsCollectionOrStringValue : null;
    this._stringValue = jsStringsCollectionOrStringValue &&
      typeof jsStringsCollectionOrStringValue === 'string' ? jsStringsCollectionOrStringValue :
      typeof stringValueOrIsActive && typeof stringValueOrIsActive === 'string' ?
        stringValueOrIsActive : null;
    this._isActive = stringValueOrIsActive && typeof stringValueOrIsActive === 'boolean' ?
      stringValueOrIsActive : isActive;
  }

  get value(): boolean {
    return this._isActive;
  }
  set value(value: boolean) {
    if (this._isActive !== value) {
      if (this._jsStringsCollection && this._isActive)
        this._jsStringsCollection.delete(this._stringValue);

      this._isActive = value;

      if (this._jsStringsCollection && this._isActive)
        this._jsStringsCollection.delete(this._stringValue);
    }
  }

  attachJSStringsCollection(jsStringsCollection: Set<string>): void {
    this._jsStringsCollection = jsStringsCollection;
  }
  detachJSStringsCollection(): void {
    this._jsStringsCollection = null;
  }
}
