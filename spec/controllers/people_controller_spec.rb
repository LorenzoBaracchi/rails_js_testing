require 'rails_helper'

RSpec.describe PeopleController, type: :controller do
  fixtures :people

  describe '#bio' do
    it 'should render bio text' do
      get :bio, id: 1
      expect(response.body).to eq('I am a bio for a person')
    end

    it 'should render none text for non existing or empty' do
      get :bio, id: -1
      expect(response.body).to eq('none')
    end
  end

end
