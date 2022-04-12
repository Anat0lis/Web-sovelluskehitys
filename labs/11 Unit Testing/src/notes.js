var notes = (function() {
  var list = [];

  return {
    add: function(note) {
      if (note) {
        if(note.trim().length > 0){
        var item = {timestamp: Date.now(), text: note};
        list.push(item);
        return true;
        }
        return false;
      }
      return false;
    },
    remove: function(index) {
      if (index === undefined) {
        return false;
      }
      if (list.length > index) {
        list.splice(index, 1);
        return true;
      }
      return false;
    },
    count: function() {
      return list.length;
    },
    list: function() {
      return list;
    },
    find: function(str) {
      if (str === undefined)
        return false;
      if(str.length===0)
        return false;
      let newList = [];
      let item;
      for (let i = 0; i<list.length; i++) {
        if (list[i].text.toLowerCase().includes(str.toLowerCase())){
          item = list[i];
          newList.push(item);
        }
      }
      if(newList.length>0)
      return newList;
      else return false;
    },
    clear: function() {
      list.splice(0, list.length);
    }
  }
}());

