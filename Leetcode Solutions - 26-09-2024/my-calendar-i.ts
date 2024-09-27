class MyCalendar {
    private bookings: Array<[number, number]> = [];

    constructor() { }

    public book(start: number, end: number): boolean {
        for (const [s, e] of this.bookings) {
            if (start < e && end > s) {
                return false; // There is an overlap
            }
        }
        this.bookings.push([start, end]);
        return true; // No overlap, event is booked
    }
}
