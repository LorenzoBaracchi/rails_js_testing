MagicLamp.fixture(controller: PeopleController) do
  person1 = Person.new(id: 1, name: 'pippo', age: 42, bio: 'this is a test bio')
  @people = [person1]
  render 'index'
end
