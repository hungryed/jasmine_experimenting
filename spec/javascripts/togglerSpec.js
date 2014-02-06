describe("Trip detail toggler", function() {
  describe("clicking a show link", function() {
    it("shows the trip description", function(){
      loadFixtures("one_index_trip.html");
      init();
    });
  });
});
