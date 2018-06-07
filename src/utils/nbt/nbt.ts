export type NbtValue =
    | NbtCompound
    | NbtList
    | NbtByteArray
    | NbtIntArray
    | NbtLongArray
    | NbtByte
    | NbtShort
    | NbtInt
    | NbtLong
    | NbtFloat
    | NbtDouble
    | NbtString

export class NbtString {
    private value: string

    public get = () => this.value

    public set(value: string) {
        this.value = value
    }

    public toString = () => `"${this.value}"`
}

export class NbtByte {
    private value: number

    public get = () => this.value

    public set(value: number) {
        this.value = value
    }

    public toString = () => `${this.value}b`
}

export class NbtShort {
    private value: number

    public get = () => this.value

    public set(value: number) {
        this.value = value
    }

    public toString = () => `${this.value}s`
}

export class NbtInt {
    private value: number

    public get = () => this.value

    public set(value: number) {
        this.value = value
    }

    public toString = () => `${this.value}`
}

export class NbtLong {
    private value: number

    public get = () => this.value

    public set(value: number) {
        this.value = value
    }

    public toString = () => `${this.value}L`
}

export class NbtFloat {
    private value: number

    public get = () => this.value

    public set(value: number) {
        this.value = value
    }

    public toString = () => `${this.value}f`
}

export class NbtDouble {
    private value: number

    public get = () => this.value

    public set(value: number) {
        this.value = value
    }

    public toString = () => `${this.value}d`
}

export class NbtCompound {
    private value = new Map<string, NbtValue>()

    public get = (key: string) => this.value.get(key)

    public set(key: string, val: NbtValue) {
        this.value.set(key, val)
    }

    public toString() {
        let result = '{'

        for (const key of this.value.keys()) {
            const val = this.get(key)
            if (val) {
                result += `${key}:${val.toString()},`
            }
        }

        result = result.slice(0, -1) + '}'

        return result
    }
}

export class NbtList {
    private value: NbtValue[] = []

    public get = (index: number) => this.value[index]

    public add(val: NbtValue) {
        this.value.push(val)
    }

    public toString() {
        let result = '['

        for (const val of this.value) {
            result += `${val.toString()},`
        }

        result = result.slice(0, -1) + ']'

        return result
    }
}

export class NbtByteArray {
    private value: NbtByte[] = []

    public get = (index: number) => this.value[index]

    public add(val: NbtByte) {
        this.value.push(val)
    }

    public toString() {
        let result = '[B;'

        for (const val of this.value) {
            result += `${val.toString()},`
        }

        result = result.slice(0, -1) + ']'

        return result
    }
}

export class NbtIntArray {
    private value: NbtInt[] = []

    public get = (index: number) => this.value[index]

    public add(val: NbtInt) {
        this.value.push(val)
    }

    public toString() {
        let result = '[I;'

        for (const val of this.value) {
            result += `${val.toString()},`
        }

        result = result.slice(0, -1) + ']'

        return result
    }
}

export class NbtLongArray {
    private value: NbtLong[] = []

    public get = (index: number) => this.value[index]

    public add(val: NbtLong) {
        this.value.push(val)
    }

    public toString() {
        let result = '[L;'

        for (const val of this.value) {
            result += `${val.toString()},`
        }

        result = result.slice(0, -1) + ']'

        return result
    }
}
