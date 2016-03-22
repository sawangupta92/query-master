Meteor.Collection.prototype.afterDays = function(attr, days) {
  return this.find({[attr]: {$gt: dateBeforeDays(days)}});
}

Meteor.Collection.prototype.beforeDays = function(attr, days) {
  return this.find({[attr]: {$lt: dateBeforeDays(days)}});
}

Meteor.Collection.prototype.betweenDays = function(attr, startDay, endDay) {
  return this.find({[attr]: {$gt: dateBeforeDays(startDay), $lte: dateBeforeDays(endDate) }});
}

Meteor.Collection.prototype.today = function(attr) {
  return this.find({[attr]: {$gt: dateBeforeDays(1), $lte: dateBeforeDays(0) }});
}

Meteor.Collection.prototype.yesterday = function(attr) {
  return this.find({[attr]: {$gt: dateBeforeDays(2), $lte: dateBeforeDays(1) }});
}

Meteor.Collection.prototype.tomorrow = function(attr) {
  return this.find({[attr]: {$gt: dateBeforeDays(0), $lte: dateAfterDays(1) }});
}

Meteor.Collection.prototype.pastWeek = function(attr) {
  return this.find({[attr]: {$gt: dateBeforeDays(7), $lte: dateBeforeDays(0) }});
}

Meteor.Collection.prototype.pastMonth = function(attr) {
  return this.find({[attr]: {$gt: dateBeforeDays(30), $lte: dateBeforeDays(0) }});
}

Meteor.Collection.prototype.nextMonth = function(attr) {
  return this.find({[attr]: {$gt: dateBeforeDays(0), $lte: dateAfterDays(30) }});
}

Meteor.Collection.prototype.maximum = function(attr) {
  if(Meteor.isClient){
    return _.max(this.find().fetch(), function(obj){
      return obj[attr]
    })
  }
}

Meteor.Collection.prototype.maximum = function(attr) {
  if(Meteor.isClient){
    return _.min(this.find().fetch(), function(obj){
      return obj[attr]
    })
  }
}

Meteor.Collection.prototype.sum = function(attr) {
  if(Meteor.isClient){
    var collection = this.find({}, {fields: {[attr]: 1}}).fetch(),
        sum = 0;
    _.each(collection, function(obj){
      if(obj[attr])
        sum += obj[attr];
    })
    return sum;
  } else {

  }
}

Meteor.Collection.prototype.average = function(attr) {
  if(Meteor.isClient){
    var count = this.find({}, {fields: {[attr]: 1}}).count();
    return this.sum(attr) / count;
  } else {

  }
}

function dateBeforeDays(n){
  var date = new Date();
  date.setDate(date.getDate() - n);
  return date;
}

function dateAfterDays(n){
  var date = new Date();
  date.setDate(date.getDate() + n);
  return date;
}
