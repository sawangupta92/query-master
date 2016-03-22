This package includes some common query interface methods

Let's assume a User collection with a created_at field

List of methods.

Methods to handle time

1) User.afterDays('created_at', 7) // will give you results between today and 7 days from now

2) User.beforeDays('created_at', 7) // will give you results between 7 days from now(past) and today.

3) User.betweenDays(attr, 1, 3) // will give you results between 1 day from now and 3 days from now (you may also provide negative values)

5) User.today(attr)

6) User.yesterday(attr)

7) User.tomorrow(attr)

8) User.pastWeek(attr)

9) User.pastMonth(attr)

10) User.nextMonth(attr)

10) User.maximum(attr) // returns maximum value of attr in User collection

10) User.minimum(attr) // returns minimum value of attr in User collection

10) User.sum(attr) // returns sum value of attr in User collection
