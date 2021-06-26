"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const esaucy_1 = require("esaucy");
const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
class BetAmountCommand {
}
class UserMoneyState {
}
class BetAmountCommandHandler {
    execute(command) {
        return __awaiter(this, void 0, void 0, function* () {
            const number = generateRandomNumber();
            const event = {
                numberRolled: number,
                amountBet: command.amountBet,
                date: new Date(),
                id: `betPlaced=${new Date()}`,
                won: false,
            };
            if (number > 52)
                event.won = true;
            else
                event.won = false;
            return event;
        });
    }
}
class BetPlacedProjector {
    project(currentState, event) {
        return __awaiter(this, void 0, void 0, function* () {
            const newState = {
                index: currentState.index + 1,
                money: event.won
                    ? currentState.money + event.amountBet
                    : currentState.money - event.amountBet,
            };
            return newState;
        });
    }
}
class LocalEventStore {
    constructor() {
        this.store = {};
    }
    publish(event) {
        return __awaiter(this, void 0, void 0, function* () {
            this.store[event.id] = event;
            return true;
        });
    }
}
class BetService extends esaucy_1.EventBasedService {
    constructor() {
        super(new BetAmountCommandHandler(), new BetPlacedProjector(), new LocalEventStore());
    }
    updateState(_state) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    getCurrentState(_event) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                index: 0,
                money: 0,
            };
        });
    }
}
const service = new BetService();
const input = { amountBetBTC: 1.2342627 };
const command = {
    amountBet: input.amountBetBTC,
    date: new Date(),
    id: "AmountBetBTC",
};
service.execute(command).then((result) => {
    console.log(result);
});
//# sourceMappingURL=app.js.map