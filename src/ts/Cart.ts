import Buyable from './Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        if(this._items.some(el => el.id === item.id)) {
            if(item.canAddMore) {
                item.count += 1;
                return;
            } else {
                return;
            }        
        };

        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalСost(): number {
        return this.items.reduce((acc, item) => {
          return acc += item.price * item.count}, 0)
    }

    totalСostDiscount(discount: number): number {
        const total = this.totalСost(); 
        const result = total - total / 100 * discount;
        return result;
    }

    removeItem(id: number): void {
        const item = this._items.find(el => el.id === id);
        if(item === undefined) return;
        if(item.canAddMore) {
            item.count -= 1;
            if(item.count > 0) return;
        }

        this._items = this.items.filter(item => item.id !== id)
    }
}