const str: string = 'Hello';
const num: number = 10;
const bool: boolean = true;
const newStr: any = 'hello'; // любой тип
//============================================================================================================
const arr: number[] = [1, 2, 3];
const arr1: Array<string> = ['H', 'E', 'L', 'P'];
//============================================================================================================
function info(name: string, age: number | boolean): void {
    console.log(`${name}, ${age}`);
}
info('Andrei', 30);
//============================================================================================================
class  Server {
    static VERSION = '1.0.0';

    private status: string = 'working';

    constructor(public name, protected ip) {
    }

    turnOn() {
        this.status = 'working';
    }
    turnOff() {
        this.status = 'offline';
    }

    public getStatus(): string {
        return this.status
    }
}

const server: Server = new Server('VS', '1.3.4.2');
// ============================================================================================================
interface userInterface {
    newName: string;
    newAge: number;
    logInfo: () => void;
    id?: any
}

const user: userInterface = {
    newName: 'Andrei',
    newAge: 30,
    logInfo() {
        console.log(this.newName + this.newAge);
    }
};




