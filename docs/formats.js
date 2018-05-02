"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Formats {
}
Formats.pairs = new Map([
    [
        'advancement grant %player only %string',
        'advancement grant %0 only %1'
    ], [
        'advancement grant %player only %string %string',
        'advancement grant %0 only %1 %2'
    ]
]);
exports.default = Formats;
