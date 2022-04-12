describe("notes module", function () {

  beforeEach(function() {
    notes.clear();
    notes.add('first note');
    notes.add('second note');
    notes.add('third note');
    notes.add('fourth note');
    notes.add('fifth note');
  });

  describe('adding a note', function() {

    it("should be able to add a new note", function () {
      expect(notes.add('sixth note')).toBe(true);
      expect(notes.count()).toBe(6);
    });

    it("should ignore blank notes", function () {
      expect(notes.add('')).toBe(false);
      expect(notes.count()).toBe(5);
    });

    it('should ignore notes containing only whitespace', function() {
      expect(notes.add('   ')).toBe(false);
      expect(notes.count()).toBe(5);
    });
    it('should require a string parameter', function() {
      expect(notes.add()).toBe(false);
      expect(notes.count()).toBe(5);
    });
  });

  describe('deleting a note', function() {
    it('should be able to delete the first index', function(){
      expect(notes.remove(0)).toBe(true);
      expect(notes.find('first')).toBe(false);
    });
    it('should be able to delete the last index',function() {
      expect(notes.remove(notes.list().length - 1)).toBe(true);
      expect(notes.find('fifth')).toBe(false);
    });
    it('should return false if index is out of range', function(){
      expect(notes.remove(notes.list().length)).toBe(false)
    });
    it('should return false if the parameter is missing', function(){
      expect(notes.remove()).toBe(false)
    });
  });

  describe('find notes', function(){
    it('should be able to find notes', function(){
     expect(notes.find('note')).toEqual(notes.list());
     expect(notes.find('th')).toEqual(notes.list().splice(2,3));
    });
    it('search should not be case sensitive', function(){
      expect(notes.find('Note')).toEqual(notes.list());
    });
    it ('should return false if the parameter is missing', function(){
      expect(notes.find()).toBe(false);
    });
    it('should ignore blank notes', function(){
      expect(notes.find('')).toBe(false);
    });
  });
});
