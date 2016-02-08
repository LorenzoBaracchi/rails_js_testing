class PeopleController < ApplicationController

  def index
    @people = Person.all
  end

  def bio
    return render text: 'none' unless Person.exists?(params[:id])
    person = Person.find(params[:id])
    render text: person.bio and return
  end

end
