This package includes some common query interface methods

Let's assume a User collection with a created_at field

## List of methods.

### Methods to handle time

#### 1) #afterDays

`User.afterDays('created_at', 7)` // Finds all records occurring after the given time

#### 2) #beforeDays

`User.beforeDays('created_at', 7)` // Finds all records occurring before the given time

#### 3) #betweenDays

`User.betweenDays(attr, 1, 3)` // Finds all records occurring between given time

#### 5) #today

`User.today(attr)`

#### 6) #yesterday

`User.yesterday(attr)`

#### 7) #tomorrow

`User.tomorrow(attr)`

#### 8) #pastWeek

`User.pastWeek(attr)`

#### 9) #pastMonth

`User.pastMonth(attr)`

#### 10) #nextMonth

`User.nextMonth(attr)`

### Methods to handle calculations

#### 11) #maximum

`User.maximum(attr)` // returns maximum value of attr in User collection

#### 12) #minimum

`User.minimum(attr)` // returns minimum value of attr in User collection

#### 13) #sum

`User.sum(attr)` // returns sum value of attr in User collection

#### 13) #average

`User.average(attr)` // returns sum value of attr in User collection
